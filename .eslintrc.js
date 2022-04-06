module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "airbnb-base",
    ],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
    },
    plugins: ["@typescript-eslint"],
    rules: {
        quotes: ["error", "double", { allowTemplateLiterals: true }],
        semi: ["error", "never"],
        indent: ["error", 4],
        "import/extensions": ["error", "never"],
        "max-len": ["error", { code: 150 }],
    },
    ignorePatterns: ["dist/*"],
    settings: {
        "import/resolver": {
            node: {
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
}
