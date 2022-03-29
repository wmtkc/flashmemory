import React from 'react';
import {Alert, StyleSheet, View, Text, ScrollView, DatePickerIOS, Button } from 'react-native';
import { setWorldOriginAsync } from 'expo/build/AR';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {getDeckData, saveDeckTitle} from '../utils/api'
import {addDeck} from '../actions/index'

class DrawerContent extends React.Component {
    constructor (props) {
        super(props);

        // TODO:
        // DUMMY DATA
        // TO BE REPLACED BY DATABASE CALL
        this.decks = getDeckData();
    }

    submitName = (name) => {
            const { text } = name;
            saveDeckTitle(text);
            this.props.dispatch(addDeck);
            this.props.navigation.navigate('Add Deck');
        }

    deleteDeck = () =>{
        //TODO:
        // Handle deletion of a deck hopefully swiping from the side
        // delete's deck from data base
    }
    
    addDeckPress = ()=>{
        this.props.navigation.navigate('Add Deck');
        // Alert.prompt(
        //     "Enter Deck Name",
        //     "Enter your new Deck Name!",
        //       [
        //         {
        //           text: "Cancel",
        //           onPress: () => console.log("Cancel Pressed"),
        //           style: "cancel"
        //         },
        //         {
        //           text: "add",
        //           onPress: deckname => console.log("OK Pressed, deckname: " + deckname)
        //         }
        //       ]
        // );
  };

        

    
    render () {
        let items = [];
        this.decks.forEach((deck, index) => {
            items.push(<Text key={index}
                             style={styles.item}
                             onPress={this.props.callback(deck.id)}>
                            {deck.title}
                       </Text>);
        });

        return (
            <View style={styles.container}>
                <Text style={styles.banner}>
                    FlashMemory
                </Text>
                <Text style={styles.new_deck}
                      onPress={this.addDeckPress}>
                    + Add Deck
                </Text>
                <ScrollView>
                    {items}
                    {/* <Button title=" + ADD DECK" onPress = {this.addDeckPress}/> */}
                </ScrollView>
            </View>
        );
    }
}

export default DrawerContent

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#fff',
        borderStyle: 'solid',
        borderRightWidth: 3,
        borderRightColor: '#000',
    },
    banner: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'stretch',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 40,
        paddingTop: 20,
        paddingBottom: 10,
        borderStyle: 'solid',
        borderBottomWidth: 3,
        borderBottomColor: '#000',
    },
    new_deck: {
        height: 80,
        fontSize: 30,
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    item: {
        height: 60,
        alignSelf: 'stretch',
        fontSize: 18,
        textAlignVertical: 'center',
        paddingLeft: 20,
    }
});