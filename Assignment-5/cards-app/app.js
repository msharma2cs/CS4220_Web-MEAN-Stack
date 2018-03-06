const
    cards = require('deckofcards'),
    inquirer = require('inquirer')

const draw = (shuffle, n = 1) => {
    return cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .catch(err => console.log(err))
}

// HINT for #3 in Lab
const discardPrompt = (decks) => {
    // Prompt user to select cards using 'inquirer' module.
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'Select cards to throw away',
        name: 'cards',
        choices: () => {
            // Generate arrays of drawn cards from the deck.
            const playingCards = [ new inquirer.Separator() ]
            for ( let deck of decks.cards ) {
                playingCards.push(`${deck.value} of ${deck.suit}`)
            }
            playingCards.push( new inquirer.Separator() )
            return playingCards
        },

        validate: (answers) => {
            // Validate to check that atmost 4 cards are selected.
            if ( answers.length > 4 ) {
                return "You must choose upto 4 cards."
            }
            // if 0-4 cards are selected, return true.
            return true
        }
    }])
    .then( (answers) => {
            // find and remove selected cards from drawn deck.
            findAndRemove(decks, answers)
        })
}

// HINT for #4 in Lab
const findAndRemove = (current, throwaway) => {
    // Finding cards from the drawn deck,
    // that matches user selected cards, and
    // remove them.
    for ( let selectedCard of throwaway.cards ) {
        const cardValue = selectedCard.split(" ")[0];
        const cardSuit = selectedCard.split(" ")[2];

        const cardIndex = current.cards.findIndex( card => {
            return (card.value===cardValue && card.suit===cardSuit)
        })
        current.cards.splice(cardIndex, 1)
    }

    // Redraw that many cards from the same deck, from the remaining cards.
    // Update the cards array and remaining cards.
    cards.draw(current.deck_id, throwaway.cards.length)
        .then( newCards => {
            for ( let newCard of newCards.cards ) {
                current.cards.push(newCard)
            }
            current.remaining -= newCards.cards.length
            // call print function to display the final output.
            print(current)
        })
    
}

// HINT for #6 in Lab
const print = cards => {
    console.log("--- CARDS ---")
   for ( let card of cards.cards ) {
        console.log(`${card.value} of ${card.suit}`)
    }
    console.log(`\n--- REMAINING CARDS ---\n${cards.remaining}`)
}

const play = () => {
    // Draw 5 cards from a shuffled deck.
    draw( true, 5)
        // Prompt for cards to be thrown away.
        .then( (deck) => discardPrompt(deck) )
        .catch( (err) => console.log(err) )
}

module.exports = {
    play
}