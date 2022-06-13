module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
};

// get smaller bundle size by excluding react-native-paper modules not in use
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
};