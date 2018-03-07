const
    // Required to get the URL for api.
     config = require('./config'),
     // Required to request the api URL.
     superagent = require('superagent')

// Uses get method to call api, and returns either body on success or error.
const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}`)
        .then(response => response.body)
        .catch(error => error.response.body)
}

// If parameter is true, shuffled deck object is returned,
// Else, unshuffled deck starting from Ace of Spades if returned.
exports.deck = (shuffle) => {
    if (shuffle)
        return _fetch('deck/new/shuffle/?deck_count=1')
    else
        return _fetch('deck/new/')
}

// Accepts deck id and number of cards to be drawn.
// Returns an object with drawn cards.
exports.draw = (deck, n) => {
    return _fetch(`/deck/${deck}/draw/?count=${n}`)
}

// Accepts deck id of the deck to be shuffled.
exports.shuffle = (deck) => {
    return _fetch(`deck/${deck}/shuffle/`)
}