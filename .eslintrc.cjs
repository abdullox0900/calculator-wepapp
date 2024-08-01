module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    // Custom ESLint rules
    'react/prop-types': 'off', // TypeScript foydalanganda kerak emas
    '@typescript-eslint/explicit-module-boundary-types': 'off', // Funksiyalar uchun
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Foydalanilmagan o'zgaruvchilar uchun
    'react/react-in-jsx-scope': 'off', // React 17 dan boshlab kerak emas
    'no-console': 'warn', // Konsol xabarlariga ogohlantirish berish
    'no-debugger': 'warn', // Debugger uchun ogohlantirish
  },
}
