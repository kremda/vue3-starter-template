/* eslint-env node */
// eslint-disable-next-line @typescript-eslint/no-require-imports
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  'root': true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    './.eslintrc-auto-import.json',
  ],
  'env': {
    'vue/setup-compiler-macros': true,
  },
  'plugins': [
    'import',
  ],
  'rules': {
    // DEFAULT
    quotes: ['error', 'single'],
    semi: 'off',
    'comma-dangle': [
      'error',
      {
        arrays: 'always-multiline',
        objects: 'always-multiline',
        imports: 'always-multiline',
        exports: 'always-multiline',
        functions: 'always-multiline',
      },
    ],
    'linebreak-style': 0,
    'arrow-parens': ['error', 'always'],
    'no-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-unused-vars': 'off',
    'no-use-before-define': ['error', { functions: false, classes: false }],
    'indent': ['error', 2],
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'no-tabs': 0,
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'space-before-blocks': ['error', { 'functions': 'always', 'keywords': 'always', 'classes': 'always' }],
    'arrow-spacing': ['error', { 'before': true, 'after': true }],
    'key-spacing': ['error', { 'afterColon': true }],
    'block-spacing': ['error', 'always'],
    'no-multiple-empty-lines': 'error',
    'eol-last': ['error', 'always'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: '*', next: 'return' },
    ],
    'object-curly-spacing': ['error', 'always'],
    // VUE
    'vue/html-closing-bracket-newline': ['error', {
      'singleline': 'never',
      'multiline': 'always',
    }],
    // IMPORTS
    'import/first': 'error',
    'import/no-duplicates': 'error',
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal'], 'unknown', ['sibling', 'parent']],
        'newlines-between': 'never',
      },
    ],

    // TYPESCRIPT
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        args: 'after-used',
      },
    ],
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/prefer-enum-initializers': 'error',
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/member-delimiter-style': 'error',
  },

};
