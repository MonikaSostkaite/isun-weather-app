module.exports = {
    clearMocks: true,
    coverageDirectory: 'coverage',
    testEnvironment: 'jsdom',
    // A map from regular expressions to paths to transformers
    transform: {
        '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
    },
    // An array of file extensions your modules use
    moduleFileExtensions: ['jsx', 'js'],
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/?(*.)+(test).[j]s?(x)'],
};
