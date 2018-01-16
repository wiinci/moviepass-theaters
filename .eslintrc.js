// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: "vue-eslint-parser",
    parserOptions: {
        parser: "babel-eslint",
        sourceType: "module"
    },
    env: {
        browser: true
    },
    extends: ["airbnb-base", "plugin:vue/recommended"],
    // required to lint *.vue files
    plugins: ["vue", "html"],
    // check if imports actually resolve
    settings: {
        "import/resolver": {
            webpack: {
                config: "build/webpack.base.conf.js"
            }
        }
    },
    // add your custom rules here
    rules: {
        // no-undef
        "no-undef": ["warn"],
        // max-len
        "max-len": "off",
        // 4-space indentation
        indent: ["warn", 4],
        // Double quotes
        quotes: ["warn", "double", { avoidEscape: true }],
        // Arrow parens
        "arrow-parens": ["warn", "as-needed"],
        // Multi-line comma dangle
        "comma-dangle": ["error", "only-multiline"],
        // Turn off no-underscore-dangle
        "no-underscore-dangle": "off",
        // Turn off global-require
        "global-require": "off",
        // don't require .vue extension when importing
        "import/extensions": [
            "error",
            "always",
            {
                js: "never",
                vue: "never"
            }
        ],
        // allow optionalDependencies
        "import/no-extraneous-dependencies": [
            "error",
            {
                optionalDependencies: ["test/unit/index.js"]
            }
        ],
        // allow debugger during development
        "no-debugger": process.env.NODE_ENV === "production" ? 2 : 0,
        // Vue settings
        "vue/html-indent": [
            "error",
            4,
            {
                attribute: 1,
                closeBracket: 0,
                alignAttributesVertically: true,
                ignores: []
            }
        ],
        "vue/max-attributes-per-line": [
            2,
            {
                singleline: 1,
                multiline: {
                    max: 1,
                    allowFirstLine: false
                }
            }
        ],
        "vue/html-closing-bracket-newline": [
            "error",
            {
                singleline: "never",
                multiline: "always"
            }
        ]
    }
};
