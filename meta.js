module.exports = {
    helpers: {
        if_or(v1, v2, options) {
            if (v1 || v2) {
                return options.fn(this)
            }

            return options.inverse(this)
        },
    },
    prompts: {
        name: {
            type: 'string',
            required: true,
            message: 'Project name',
        },
        description: {
            type: 'string',
            required: false,
            message: 'Project description',
            default: 'A Vue.js project',
        },
        author: {
            type: 'string',
            message: 'Author',
        },
        mobile: {
            type: 'confirm',
            message: 'is mobile?',
        },
        singlePage: {
            type: 'confirm',
            message: 'is singlePage?',
        },
        router: {
            when: 'singlePage',
            type: 'confirm',
            message: 'Use vue-router?',
        },
        yuni: {
            when: 'mobile',
            type: 'confirm',
            message: 'Use @uneed?',
        },
        lint: {
            type: 'confirm',
            message: 'Use ESLint to lint your code?',
        },
    },
    filters: {
        'src/assets/css/common.css': 'mobile',
        '.eslintrc.js': 'lint',
        '.eslintignore': 'lint',
        'src/router/**/*': 'router',
        'src/pages/**/*': '!singlePage',
        'src/App.vue': 'singlePage',
        'src/main.js': 'singlePage',
    },
    // "completeMessage": "To get started:\n\n  {{^inPlace}}cd {{destDirName}}\n  {{/inPlace}}npm install\n  npm run dev\n\nDocumentation can be found at https://vuejs-templates.github.io/webpack"
    completeMessage: 'go go go~~~',
}
