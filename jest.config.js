/*
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/en/configuration.html
 */

module.exports = {
  
  roots: ['<rootDir>/src'],
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],

  coverageDirectory: "coverage",

  coverageProvider: "babel",

  testEnvironment: "node",

  collectCoverageFrom: [ '<rootDir>/src/**/*.ts', '!<rootDir>/src/main/**', '!<rootDir>/src/**/*-protocols.ts', '!**/protocols/**', '!**/test/**' ],

   transform:{
     '.+\\.ts$':'ts-jest'
   },

};
