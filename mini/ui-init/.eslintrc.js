module.exports = {
    root: true,
    extends: ['@ecomfe/eslint-config', '@ecomfe/eslint-config/react'],
    rules: {
        'import/no-unresolved': 'off',
        'no-undef': 'off',
        'no-else-return': 'off',
        'no-unused-vars': 'off',
        'prefer-const': 'off',
        'prefer-promise-reject-errors': 'off',
        'import/prefer-default-export': 'off',
        'no-param-reassign': 'off',
        'no-restricted-globals': 'off',
        'react/no-array-index-key': 0,
        'react/prop-types': 0,
        'react/jsx-no-bind': 'off',
        camelcase: 'off',
        'no-shadow': 'off',
        'func-names': 'off',
        'no-console': 'off',
        'consistent-return': 'off',
        'global-require': 'off',
        'jsx-a11y/media-has-caption': 'off',
        'jsx-a11y/no-noninteractive-element-interactions': 'off',
        'jsx-a11y/alt-text': 'off',
        'no-danger': 'off',
        'brace-style': 'off',
        'quote-props': [
            2,
            'as-needed',
            {
                unnecessary: false
            }
        ]
    }
};
