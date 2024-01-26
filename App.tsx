import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './src/Navigation/Navigator'
import { Provider } from 'react-redux';
import { store } from './src/Redux/store';

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </Provider>

  );
}
export default App;
