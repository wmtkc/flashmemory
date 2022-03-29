import React from 'react';
import { StyleSheet, View, Button } from 'react-native';

class GradeButtonContainer extends React.Component {
    constructor (props) {
        super(props);
    }

    failPress = () => {
        // fail
        this.props.callback();
    }
    
    easyPress = () => {
        // easy
        this.props.callback();
    }

    medPress = () => {
        // med
        this.props.callback();
    }

    hardPress = () => {
        // hard
        this.props.callback();
    }

    render () {
        return (
            <View style={styles.container}>
                <Button color='#f00' 
                        title='  X  '
                        onPress={this.failPress} />
                <Button color='#0f0'
                        title='  1  '
                        onPress={this.easyPress} />
                <Button color='#ff0'
                        title='  2  '
                        onPress={this.medPress} />
                <Button color='#f80'
                        title='  3  '
                        onPress={this.hardPress} />
            </View>
        );
    }
}

export default GradeButtonContainer;

const styles = StyleSheet.create({
    container: {
        width: 300,
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});