/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import 'react-native-gesture-handler'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import store from "./src/app/store";
import { fromLeft, zoomIn, zoomOut, fromRight, fromBottom } from 'react-navigation-transitions'
import NavigationService from "./src/templates/NavigationService";
import Screen1 from "./src/screens/Screen1";
import Screen2 from "./src/screens/Screen2";



const BowlerStack = createStackNavigator(
  {
    Screen1: Screen1,
    Screen2: Screen2,
    
  },
  {
    transitionConfig: (nav) => handleCustomTransitionForPost(nav)
  },
  {
    initialRouteName: "Screen1"
  },
  {
    cardStyle: {
      opacity: 1,
      backgroundColor:'#0956e6'
    }
  }
  );
  const handleCustomTransitionForPost = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2];
    const nextScene = scenes[scenes.length - 1];
    
    // Custom transitions go there
    
    return fromRight();
  }
  
  export const AppContainer = createAppContainer(BowlerStack);
  const App: () => React$Node = () => {
    return (
      <>
      <Provider store={store}>
        <AppContainer
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
    </>
  );
};



export default App;
