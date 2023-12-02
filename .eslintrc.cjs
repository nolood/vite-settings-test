module.exports = {
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier', 'import'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module', project: './tsconfig.json',
    },
    rules: {
        'prettier/prettier': 'error',
        'import/extensions': 'off',
        'react/jsx-filename-extension': ['error', {extensions: ['.jsx', '.tsx']}],
        'react/react-in-jsx-scope': 'off',
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [
                    ['~', './src'],
                ],
                extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
            },
        },
    },
};
