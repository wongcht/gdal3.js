const js = require('@eslint/js');
const globals = require('globals');
const pluginVue = require('eslint-plugin-vue');

module.exports = [
    {
        ignores: ['dist'],
    },
    js.configs.recommended,
    ...pluginVue.configs['flat/essential'],
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'module',
            globals: {
                ...globals.node,
                ...globals.browser,
            },
        },
        rules: {
            'vue/no-mutating-props': 'off',
        },
    },
];
