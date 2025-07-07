const {
    defineConfig,
    globalIgnores,
} = require("eslint/config");

const tsParser = require("@typescript-eslint/parser");

const {
    fixupConfigRules,
    fixupPluginRules,
} = require("@eslint/compat");

const _import = require("eslint-plugin-import");
const typescriptEslint = require("@typescript-eslint/eslint-plugin");
const react = require("eslint-plugin-react");
const reactHooks = require("eslint-plugin-react-hooks");
const globals = require("globals");
const js = require("@eslint/js");

const {
    FlatCompat,
} = require("@eslint/eslintrc");

const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

module.exports = defineConfig([{
    languageOptions: {
        parser: tsParser,
        sourceType: "module",
        ecmaVersion: 2020,

        parserOptions: {
            ecmaFeatures: {
                jsx: true,
            },
        },

        globals: {
            ...globals.node,
            ...globals.browser,
        },
    },

    extends: fixupConfigRules(compat.extends(
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/eslint-recommended",
    )),

    plugins: {
        import: fixupPluginRules(_import),
        "@typescript-eslint": fixupPluginRules(typescriptEslint),
        react: fixupPluginRules(react),
        "react-hooks": fixupPluginRules(reactHooks),
    },

    rules: {
        "react/prop-types": 0,
        "import/no-unresolved": [
            "error",
            {
                ignore: [
                    '@okta/okta-signin-widget/css/okta-sign-in.min.css'
                ],
            },
        ],
    },

    settings: {
        "react": {
            "version": "16.8",
        },
    },
}, {
    files: ["**/*.test.jsx"],

    languageOptions: {
        globals: {
            ...globals.jest,
        },
    },

    rules: {
        "react/display-name": 0,
    },
}, globalIgnores([
    "**/node_modules",
    "**/dist",
    "**/build",
    "**/build2",
    "scripts",
    "tools",
    "**/okta-oidc-tck",
    "**/samples-nodejs-express-4",
])]);
