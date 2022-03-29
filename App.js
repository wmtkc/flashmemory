import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import StudyView from './views/StudyView';
import AddDeckView from './views/AddDeckView';

const Stack = createStackNavigator();

export default class NavExample extends Component {
    render() {
        return (
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Study" component={StudyView} />
                <Stack.Screen name="Add Deck" component={AddDeckView}/>
              </Stack.Navigator>
            </NavigationContainer>
        );
    }
}
