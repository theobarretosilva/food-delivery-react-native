import Navigation from './navigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import 'react-native-url-polyfill/auto';

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
