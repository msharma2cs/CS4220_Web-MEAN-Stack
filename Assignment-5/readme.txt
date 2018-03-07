##### Week 06 Lab #####

---------
Provided:
---------
	1. deckofcards node module, developed as a wrapper for 'Deck of Cards' api @ https://deckofcardsapi.com/ .
	2. node cli app, with draw command already implemented.

---------
Required:
---------
	Provided at https://github.com/cydneymikel/CS4220/blob/master/Week06/lab.md

	To build a new feature: play(), in the Cards App app.js provided. It should have two commands: draw and play.
	The draw command use the draw() function to draw cards from a deck and display in console.
	A new command: play should be added that uses play() function satisfying below instructions.

	1. Create a command on the cli.js called play, that can be run as:
		node cli.js play

	2. Automatically Shuffle a deck and draw 5 cards from it using deck() and draw() from the deckofcards module.
	   [ DO NOT modify the draw() method in the app.js - there is no reason to touch that function. ]

	3. Prompt the user and allow them to throw away up to 4 cards from the current hand, using inquirer to create a 	   prompt with a checkbox selection feature.

	4. Remove the cards the user selects from the players current hand by creating:
		removeCards(currentHand, throwawayCards) - returns the remaining cards with the throwaway cards removed

	5. Draw new cards to replace the thrown away ones.

	6. Print the new hand and print the number of cards remaining in the deck, like:

		--- CARDS ---
		5 of SPADES
		3 of HEARTS
		5 of HEARTS
		QUEEN of HEARTS
		ACE of SPADES

		--- REMAINING CARDS ---
		45

-----------
To execute:
-----------
	- In directory ./deckofcards/
		run : 
			npm install

	- In directory ./cards-app/
		run :
			npm install
			node vli.js draw - for draw command.(in class)
			node cli.js play - for play command.(assignment)

------------------
Additional things:
------------------
	1. Using npm chalk module to add white background to output, using red and black color for respective suites of card.
	2. Using character codes to display suit type as suit symbol on console.

Github link : https://github.com/msharma2cs/CS4220_Web-MEAN-Stack/tree/master/Assignment-5