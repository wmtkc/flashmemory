
const initialDeckData =
 [
            {
                id: 0,
                title: 'Deck 1',
                cards: []
            },
            
            {
                id: 1,
                title: 'Deck 2',
                cards: []
            },

            {
                id: 2,
                title: 'Deck 3',
                cards: []
            }

        ]

export const getDeckData = () =>{
	return initialDeckData
}

export function saveDeckTitle(title){
	return AsycStorage.getItem(flashID, JSON.stringify({
		[title]:{
			title: title,
			cards: []
		}
	}))
}