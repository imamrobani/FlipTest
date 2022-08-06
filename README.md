# Bismillahirrahmanirrahim

# FlipTest

FlipTest made with love with React Natve (0.69.3)
[React Native CLI Quick Start](https://reactnative.dev/docs/environment-setup).

| Android Demo                                                                       | iOS Demo                                                                           |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| https://drive.google.com/file/d/1g-h5SGnIUPoAQiWMctY45ULHv6koMXpQ/view?usp=sharing | https://drive.google.com/file/d/1Y7n9vIK3whRQb7JUUkATkzepoT_pKSp3/view?usp=sharing |

## Instalation

- clone repository
- `yarn install`
- `cd ios && pod install` (just for iOS)
- before running the apps If you have already installed JDK on your system, make sure it is JDK 11 or newer.
- `yarn android` (for Running on Android)
- `yarn ios` (for Running on ios)

## Debugging

- Install [reacotron](https://github.com/infinitered/reactotron)
- open Reacotron debugger before run the project
- for debugging on android run `adb reverse tcp:9090 tcp:9090`
- for iOS simulator it will connect automatically after reload app
- for console logging you can use `console.tron.log()`

## Built with

- [React Native 0.69.3](https://reactnative.dev/)
- [React-Redux](https://react-redux.js.org/introduction/quick-start) react binding for redux
- [Redux Thunk](https://github.com/reduxjs/redux-thunk) for state management
- [React Navigation 6](https://reactnavigation.org/docs/getting-started) for screens navigator

## Things to improve

- Typescript implementation
- Better redux config/setup
- Clean code
- Write unit test
