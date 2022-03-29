# HOW TO RUN
1. `git clone` the repo
1. connect to the St. Olaf VPN
1. `cd` into the directory
1. run `node ./utils/server.js`
1. open `StudyView.js` with your text editor of choice and change the state.url variable to match your own (run `ifconfig` to get your IP)
1. run `expo start`
1. open the expo app on your phone and scan the QR code
1. enjoy

# NOTES
- All grade buttons advance the cards, but the card component does not update until you touch it to refresh it, keep an eye on the term/definition numbers :)
- The deck selection in the drawer is purely decorative, for your enjoyment.
- The warnings from the expo app are from the drawer module. Don't blame me.