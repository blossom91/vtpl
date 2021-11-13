const gulp = require('gulp');
const babel = require('gulp-babel');
const less = require('gulp-less');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const through2 = require('through2');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const size = require('gulp-filesize');
const rename = require('gulp-rename');
const fs = require('fs');
const path = require('path');
const tansPath = require('./scripts/plugin/gulp-tans-path');

const paths = {
    dest: {
        lib: 'output/lib',
        esm: 'output/es',
        dist: 'output/dist',
    },
    assets: 'components/assets/**/*',
    scripts: 'components/**/*.{js,jsx}',
    styles: ['components/**/*.less'],
};

function cssInjection(content) {
    return content
        .replace(/\/style\/?'/g, "/style/css'")
        .replace(/\/style\/?"/g, '/style/css"')
        .replace(/\.less/g, '.css');
}

function compileScripts(babelEnv, destDir) {
    const {scripts} = paths;
    process.env.BABEL_ENV = babelEnv;
    return gulp
        .src(scripts)
        .pipe(babel())
        .pipe(
            through2.obj(function z(file, encoding, next) {
                this.push(file.clone());
                if (file.path.match(/(\/|\\)style(\/|\\)index\.js/)) {
                    const content = file.contents.toString(encoding);
                    file.contents = Buffer.from(cssInjection(content));
                    file.path = file.path.replace(/index\.js/, 'css.js');
                    this.push(file);
                    next();
                } else {
                    next();
                }
            })
        )
        .pipe(gulp.dest(destDir));
}

function compileCJS() {
    const {dest} = paths;
    return compileScripts('cjs', dest.lib);
}

function compileESM() {
    const {dest} = paths;
    return compileScripts('esm', dest.esm);
}

const buildScripts = gulp.series(compileCJS, compileESM);

function copyAssets() {
    return gulp
        .src(paths.assets)
        .pipe(gulp.dest(paths.dest.lib + '/assets/'))
        .pipe(gulp.dest(paths.dest.esm + '/assets/'))
        .pipe(gulp.dest(paths.dest.dist + '/assets/'));
}

function copyLess() {
    return gulp
        .src(paths.styles)
        .pipe(gulp.dest(paths.dest.lib))
        .pipe(gulp.dest(paths.dest.esm));
}

function less2css() {
    return gulp
        .src(paths.styles.concat(['!components/styles/*.less']))
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssnano({zindex: false, reduceIdents: false}))
        .pipe(tansPath())
        .pipe(gulp.dest(paths.dest.lib))
        .pipe(gulp.dest(paths.dest.esm));
}

function lessDist() {
    return gulp
        .src(paths.styles)
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(concat(`index.min.css`))
        .pipe(size())
        .pipe(gulp.dest(paths.dest.dist + '/style/'))
        .pipe(sourcemaps.write())
        .pipe(rename(`index.min.css.map`))
        .pipe(size())
        .pipe(gulp.dest(paths.dest.dist + '/style/'));
}

// 这里专门为项目定制的一些兼容逻辑
const filePaths = [
    //
    path.resolve(__dirname, 'components/styles/index.less'),
];

const start = cb => {
    // 处理一下需要兼容webpack的文件
    filePaths.forEach(filePath => {
        let content = fs.readFileSync(filePath, 'utf-8');
        if (content.includes("@import '~")) {
            content = content.replace(/@import '~/g, "@import '");
        }
        fs.writeFileSync(filePath, content);
    });
    cb();
};

const done = cb => {
    filePaths.forEach(filePath => {
        let content = fs.readFileSync(filePath, 'utf-8');
        if (content.includes("@import '@baidu")) {
            content = content.replace(/@import '@baidu/g, "@import '~@baidu");
        }
        fs.writeFileSync(filePath, content);
    });
    cb();
};

const build = gulp.series(
    gulp.parallel(buildScripts, copyLess, copyAssets),
    start,
    gulp.parallel(less2css, lessDist),
    done
);
exports.build = build;

exports.default = build;
