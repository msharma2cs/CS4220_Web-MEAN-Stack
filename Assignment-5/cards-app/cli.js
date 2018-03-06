const
    app = require('./app'),
    yargs = require('yargs')

const flags = yargs.usage('$0: Usage <cmd> [options]')
    .command({
        command: 'play',
        desc: 'Play card game starting with 5 cards, and throwing up to 4 cards.',
        handler: () => { app.play() }
    })
    .help('help')
    .argv