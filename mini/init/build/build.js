/* eslint-disable */
const chalk = require('chalk');
const semver = require('semver'); // semantic version的简称，semver. 语义化版本号。如负责：验证版本号合法性、比较版本号大小等..
const shell = require('shelljs'); // 提供了常用的命令行工具
const ora = require('ora');
const webpack = require('webpack');
const packageConfig = require('../package.json');
const webpackConfig = require('./webpack.config.prod');

const spinner = ora(`${packageConfig.name} build...`);

const exec = (cmd) => require('child_process').execSync(cmd).toString().trim();

const versionRequirements = [
    {
        name: 'node',
        currentVersion: semver.clean(process.version),
        versionRequirement: packageConfig.engines.node,
    },
];

const checkBuild = () => {
    if (shell.which('npm')) {
        versionRequirements.push({
            name: 'npm',
            currentVersion: exec('npm --version'),
            versionRequirement: packageConfig.engines.npm,
        });
    }
    const warnings = [];

    for (let i = 0; i < versionRequirements.length; i++) {
        const mod = versionRequirements[i];

        if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {
            warnings.push(
                `${mod.name}: ${chalk.red(mod.currentVersion)} should be ${chalk.green(mod.versionRequirement)}`
            );
        }
    }

    if (warnings.length) {
        console.log('');
        console.log(chalk.yellow('To use this template, you must update following to modules:'));
        console.log();

        for (let i = 0; i < warnings.length; i++) {
            const warning = warnings[i];
            console.log(`  ${warning}`);
        }

        console.log();
        process.exit(1);
    }
};

const run = () => {
    checkBuild();

    spinner.start();

    webpack(webpackConfig, (err, stats) => {
        spinner.stop();
        if (err) throw err;
        process.stdout.write(
            `${stats.toString({
                colors: true,
                modules: false,
                children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
                chunks: false,
                chunkModules: false,
            })}\n\n`
        );

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'));
            console.log(
                stats.toString({
                    chunks: false, // Makes the build much quieter
                    colors: true, // Shows colors in the console
                })
            );
            process.exit(1);
        }

        if (stats.hasWarnings()) {
            console.log(chalk.yellow('  Build success with warnings.\n'));
            console.log(
                stats.toString({
                    chunks: false, // Makes the build much quieter
                    colors: true, // Shows colors in the console
                })
            );
        }

        console.log(chalk.cyan('  Build complete.\n'));
    });
};

if (require.main === module) {
    run();
}
