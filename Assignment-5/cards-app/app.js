const
    // Custom module to query external api: deckofcards.com
    cards = require('deckofcards'),
    // Required to prompt/question user on cli elegantly.
    inquirer = require('inquirer'),
    // Required to add colors to output displayed on console, used for text color, background, and bold.
    chalk = require('chalk')


// Function for 'draw' command.
// Accepts command options, draws 1 (defult, or specified) card(s) from the deck and prints on cli.
const draw = (shuffle, n = 1) => {
    cards.deck(shuffle)
        .then(deck => cards.draw(deck.deck_id, n))
        .then(result => {
            console.log('-- CARDS --')
            result.cards.forEach(card => {
                console.log(`${card.value} of ${card.suit}`)
            })

            console.log('-- REMAING CARDS --')
            console.log(result.remaining)
        })
        .catch( (err) => console.log(`Error in draw Function:\n ${err}`) )
}


// Function for 'play' command.
// No options required for this command.
const play = () => {
    const   shuffle = true,
            cardsToDraw = 5
    
    cards.deck(shuffle)
        .then( (shuffledDeck) => cards.draw(shuffledDeck.deck_id, cardsToDraw) )
        .then( (drawnCards) => discardPrompt(drawnCards) )
        .then( (remainDeck) => {
            const toDraw = 5 - remainDeck.cards.length
            cards.draw( remainDeck.deck_id, toDraw)
                .then( (newCards) => {
                    for ( let card of newCards.cards ) {
                        remainDeck.cards.push(card)
                    }
                    remainDeck.remaining = newCards.remaining
                    return remainDeck
                }).then( (finalDeck) => print(finalDeck) ) 
        })
        .catch( (err) => console.log(`Error in play Function:\n ${err}`) )
}

// Displays checklist of drawn cards, and validated user input.
const discardPrompt = (drawnCards) => {
    return inquirer.prompt([{
        type: 'checkbox',
        message: 'Select cards to throw away ( upto 4 cards )',
        name: 'cards',
        choices: () => {
            // Generate an array of drawn cards.
            const playingCards = [ new inquirer.Separator() ]
            for ( let card of drawnCards.cards ) {
                playingCards.push(`${card.value} of ${card.suit}`)
            }
            playingCards.push( new inquirer.Separator() )
            return playingCards
        },
        validate: (answers) => {
            // Validation to check that atmost 4 cards are selected.
            if ( answers.length > 4 ) {
                return "You must choose upto 4 cards."
            }
            // if 0-4 cards are selected, then return true.
            return true
        }
    }])
    .then( (answers) => {
        // Passing deck and user's answers to findAndRemove function.
        // It returns the current deck with selected cards removed.
        return findAndRemove(drawnCards, answers)
    })
    .catch( (err) => console.log(`Error in discardPrompt Function:\n ${err}`) )
}

// Removes the card(s) selected by user.
const findAndRemove = (current, throwaway) => {
    // Finding cards from the drawn deck,
    // that matches user selected cards, and
    // removes them.
    for ( let selectedCard of throwaway.cards ) {
        const cardIndex = current.cards.findIndex( card => {
            const cardValue = selectedCard.split(" ")[0];
            const cardSuit = selectedCard.split(" ")[2];
            return (card.value===cardValue && card.suit===cardSuit)
        })
        current.cards.splice(cardIndex, 1)
    }
    // returns the current deck with selected cards removed.
    return current
}

// Prints the current 5 cards in hand, with count of remaining cards in deck.
const print = cards => {
    // Object with suit name as key and suit icon code as value.
    const suitIcons = {
        "SPADES":"\u2660",
        "DIAMONDS":"\u2666",
        "CLUBS":"\u2663",
        "HEARTS":"\u2665"
    }

    // Adding cyan bg to title.
    console.log( chalk.black.bgCyan.bold("--- CARDS ---") )
    for ( let card of cards.cards ) {
        // Generating a string for card with suit icon, and also suit text for clarity.
        const cardStr = `${card.value} of ${suitIcons[card.suit]} (${card.suit})`
        // Displaying Hearts or Diamonds card in red color,
        if ( card.suit == "HEARTS" || card.suit == "DIAMONDS" )
            console.log(chalk.red.bgWhite.bold(cardStr))
        else
            // and Spades and Clubs card in black color.
            console.log(chalk.black.bgWhite.bold(cardStr))
    }
    // Adding cyan bg to title.
    console.log( chalk.black.bgCyan.bold("--- REMAINING CARDS ---") )
    // Adding white bg to remaining count.
    console.log( chalk.black.bgWhite.bold(cards.remaining) )
}


module.exports = {
    draw,
    play
}