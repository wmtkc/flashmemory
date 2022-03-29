import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Drawer from 'react-native-drawer';
import DrawerContent from '../containers/DrawerContent';
import FlashCard from '../components/FlashCard';
import GradeButtonContainer from '../containers/GradeButtonContainer';


class StudyView extends React.Component {

  constructor (props) {
    super();
    this.state = {
      ////////////////////////////////////
      //////////// UPDATE WITH YOUR OWN IP
      url:'http://192.168.1.6:3001/decks',
      /////////////////////////////////////
      ////////////////////////////////////
      cards: [],
      current_deck: { 
        title: 'Deck 1'
      },
      current_card: {
        index: 0,
        side_a: 'Update Me!',
        side_b: ''
      }
    }
  }

  async componentDidMount () {
    this.retrieveDecks()
      .done()
      .catch(err => {
        console.error(err);
      });
  }

  retrieveDecks () {
     fetch(this.state.url)
      .then(response => response.text())
      .then(data => {

        console.log("DATA: " + data)
        let json = JSON.parse(data)
        this.setState({
          cards: json.cards,
          current_card: {
            index: 0,
            side_a: json.cards[0].term,
            side_b: json.cards[0].def
          }
        })
      })
      .catch(err => {
        console.error(err);
      });
  }

  openDrawer = () => {
    this._drawer.open()
  };

  selectDeck = (id) => {
    // TODO:
    // Handle Deck Selection
  }


  nextCard = () => {
    let new_index = 0;
    if (this.state.current_card.index !== this.state.cards.length-1)
      new_index = this.state.current_card.index + 1;
    this.setState({
      current_card: {
        index: new_index,
        side_a: this.state.cards[new_index].term,
        side_b: this.state.cards[new_index].def
      }
    })
  }


  render () {
    return (
      <Drawer ref={(ref) => this._drawer = ref}
              type="overlay"
              content={ <DrawerContent callback= {this.selectDeck} navigation={this.props.navigation}/>}
              tapToClose={true}
              openDrawerOffset={0.2}
              panCloseMask={0.2}
              closedDrawerOffset={-3}
              styles={styles.drawer}
              tweenHandler={(ratio) => ({
                main: { opacity:(2-ratio)/2 }
              })}>
        <View style={styles.container}>
          <View style={styles.titlebar}>
            <Text style={{fontSize: 30}} onPress={this.openDrawer}>☰</Text>
            {/* Display Deck Title */}
            <Text style={{fontSize: 30}}>{this.state.current_deck.title}</Text>
          </View>
          <FlashCard side_a={this.state.current_card.side_a} side_b={this.state.current_card.side_b} />
          <GradeButtonContainer callback={this.nextCard} />
        </View>
      </Drawer>
    );
  }
}

export default StudyView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  drawer: {
    shadowColor: '#000000', 
    shadowOpacity: 0.8, 
    shadowRadius: 3
  },
  titlebar: {
    width: 350,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between'
  }
});
