const
    // Requires app.js to call init/start function for respective commands.
    app = require('./app'),
    // Requires yargs module to parse command line arguments and/or commands elegantly.
    yargs = require('yargs')

// Creating commands for node module.
const flags = yargs.usage('$0: Usage <cmd> [options]')
    // Command: draw -> Based on command arguments,
    //                  draws 'n' number of cards from either shuffled or unshuffled deck.
    // Calls draw() function from app.js as triggering point.
    .command({
        command: 'draw',
        desc: 'Draws a card from the deck.',
        builder: (yargs) => {
            return yargs.option('s', {
                alias: 'shuffle',
                describe: 'shuffle the deck before drawing'
            }).option('n', {
                alias: 'number',
                describe: 'number of cards to draw'
            })
        },
        handler: (argv) => { app.draw(argv.shuffle, argv.number) }
    })
    // Command: play -> No additional options required.
    //                  Draws 5 cards from shuffled deck and
    //                  prompts user to throw away upto 4 cards,
    //                  then replaces from same deck.
    // Calls play() function from app.js as triggering point.
    .command({
        command: 'play',
        desc: 'Draw 5 cards from a shuffled deck, can discard upto 4 cards and replace them from same deck.',
        handler: () => { app.play() }
    })
    .help('help')
    .argv