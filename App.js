import React from 'react';
import { AppLoading, Asset, Font } from 'expo';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; 
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import configureStore from "./redux/configureStore";

const { persistor, store } = configureStore();


class App extends React.Component {
  state = {
    isLoadinComplete: false
  }
  render() {
    const { isLoadinComplete } =  this.state;
    if(!isLoadinComplete) {
      return <AppLoading 
        startAsync={this._loadAssetAsync}
        onError={this._handleLoadingError}
        onFinish={this._handleFinishLoading}
      />;
    }
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
          </View>
        </PersistGate>
      </Provider>
    );
  }
  _loadAssetAsync = async() => {
    return Promise.all([
      Asset.loadAsync([
        require("./assets/images/icon.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        ...MaterialIcons.font
      })
    ])
  };
  _handleLoadingError = error=> {
    console.error(error);
  };
  _handleFinishLoading = async() => {
    this.setState({
      isLoadinComplete: true
    })
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default App;