import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class AddDeckView extends React.Component {

    render () {
        return(
            <View style={styles.container}>
                <Text style={styles.text}>I might look empty, but I'm actually full of potential!</Text>
            </View>
        );
    }
}

export default AddDeckView;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#f0f0f0',
    },
    text: {
        fontSize: 30,
        alignSelf: 'stretch',
        textAlign: 'center',
    }
});