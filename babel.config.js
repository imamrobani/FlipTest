module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.ios.js', '.android.js', '.js', '.json', '.tsx', '.ts'],
        alias: {
          '@root': '.',
          '@src': './src',
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@const': './src/const',
          '@hooks': './src/hooks',
          '@redux': './src/redux',
          '@action': './src/redux/action',
          '@reducer': './src/redux/reducer',
          '@router': './src/router',
          '@screens': './src/screens',
          '@utils': './src/utils',
          '@helper': './src/utils/Helper'
        }
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
