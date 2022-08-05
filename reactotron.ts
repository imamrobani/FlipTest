import AsyncStorage from '@react-native-async-storage/async-storage';
import reactotron from 'reactotron-react-native';
// @ts-ignore
import ReactotronFlipper from 'reactotron-react-native/dist/flipper';
// eslint-disable-next-line import/no-cycle
import {Reactotron} from './reactotron.interface';

const enableConsole = __DEV__;

// @ts-ignore
export const reactotronInstance: Reactotron = reactotron
  .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({
    name: 'Flip Test',
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-return
    createSocket: (path?: string) => new ReactotronFlipper(path)
  }) // controls connection & communication settings
  .useReactNative(); // add all built-in react native plugins

if (enableConsole) {
  reactotronInstance.clear();
  reactotronInstance.connect();
}

console.tron = reactotronInstance;
