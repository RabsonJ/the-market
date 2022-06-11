module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    extensions: ['.ios.js', '.android.js', '.js', '.jsx', '.json', '.tsx', '.ts', '.native.js'],
    plugins: [
      [
        'module-resolver',
        {
          root: ['./'],
          extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
          alias: {
            tests: ['./tests/'],
            '^~(.+)': './src/\\1'
          }
        }
      ],
      'react-native-reanimated/plugin'
    ]
  }
}
