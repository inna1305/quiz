module.exports = {
    env: {
        browser: true,
        es6: true
    },
    extends: [
        'eslint:recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:prettier/recommended'
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly'
    },
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        "ignorePatterns": ["webpack.config.js", "babel.config.js", ".eslintrc.js", ".eslint.js", ".webpack.dev.config.js", ".webpack.prod.config.js"]
    },
    plugins: ['import', 'prettier'],
    rules: {
        'prettier/prettier': 'error'
    }
};
