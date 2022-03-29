import React from 'react';
import { StyleSheet, Text } from 'react-native';

class FlashCard extends React.Component {
    constructor (props) {
        super();
        this.state = {
            card_text: props.side_a
        }
    }

    toggleFlip = () => {
        if (this.state.card_text === this.props.side_a) {
            this.setState({
                card_text: this.props.side_b
            });
        } else {
            this.setState({
                card_text: this.props.side_a
            })
        }
    }

    render () {
        return (
            <Text style={styles.card}
                  onPress={this.toggleFlip}>
                {this.state.card_text}
            </Text>
        );
    }
}

export default FlashCard;

const styles = StyleSheet.create({
  card: {
    height: 400,
    width: 300,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 1,
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30
  },
});