module.exports = {
    env: {
        browser: true,
        node: true,
        'jest/globals': true,
    },
    extends: [
        // Integrate typescript and prettier.
        `plugin:@typescript-eslint/recommended`,
        `prettier/@typescript-eslint`,
        `plugin:prettier/recommended`,
    ],
    ignorePatterns: [`cache`, `dist`, `generated`, `tmp`],
    parser: `@typescript-eslint/parser`,
    parserOptions: {
        ecmaVersion: 2020,
        project: `./tsconfig.json`,
        sourceType: `module`,
    },
    plugins: [`import`, `jest`, `max-params-no-constructor`],
    overrides: [
        {
            files: [`./apps/*-api/**/*.ts`],
            rules: {
                // () => String etc. is useful for resolvers, module forwardRef's etc.
                'arrow-body-style': [`off`],
            },
        },
        {
            files: [`*.actions.ts`],
            rules: {
                // We allow many classes per file for ngxs actions.
                'max-classes-per-file': `off`,
            },
        },
    ],
};
