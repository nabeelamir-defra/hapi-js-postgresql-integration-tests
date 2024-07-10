/** @type {import('jest').Config} */
const config = {
  "transform": {
    "^.+\\.(js|ts)$": "babel-jest"
  },
  "transformIgnorePatterns": [],
  "globalSetup": "./jest-setup.js"
};
export default config