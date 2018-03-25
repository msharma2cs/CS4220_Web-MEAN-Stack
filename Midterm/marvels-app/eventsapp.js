const
    // Custom module to query external api: marvel.com
    marvels = require('marvels'),
    // Required to display radio options.
    Radio = require('prompt-radio');

    getEventByIdCreators = (eventID) => {
        marvels.getEventByIdCreators( eventID )
            .then( (resources) => {
                console.log()
                resources.data.results.forEach( (items) => {
                        console.log(`Creators ID: ${items.id}`)
                        console.log(`Creators Name: ${items.fullName}`)
                        console.log()
                    });
                });
                giveEventChoices(eventID);
    }

    getEventByIdCharacters = (eventID) => {
        marvels.getEventByIdCharacters( eventID )
                .then( (resources) => {
                    console.log()
                    resources.data.results.forEach( (items) => {
                        console.log(`Character ID: ${items.id}`)
                        console.log(`Character Name: ${items.name}`)
                        const description = (items.description != '') ? `Character Description: ${items.description}` : `Character Description: Sorry! No Description available`;
                        console.log(description)
                        console.log()
                    });
                });
                giveEventChoices(eventID);
    }

    getEventByIdStories = (eventID) => {
        marvels.getEventByIdStories( eventID )
                .then( (resources) => {
                    console.log()
                    resources.data.results.forEach( (items) => {
                        console.log(`Stories ID: ${items.id}`)
                        console.log(`Stories Name: ${items.title}`)
                        const description = (items.description != '') ? `Stories Description: ${items.description}` : `Stories Description: Sorry! No Description available`;
                        console.log(description)
                        console.log()
                    });
                });
                giveEventChoices(eventID);
    }

    getEventByIdComics = (eventID) => {
        marvels.getEventByIdComics( eventID )
                .then( (resources) => {
                    console.log()
                    resources.data.results.forEach( (items) => {
                        console.log(`Comics ID: ${items.id}`)
                        console.log(`Comics Name: ${items.title}`)
                        const description = (items.description != '') ? `Comics Description: ${items.description}` : `Comics Description: Sorry! No Description available`;
                        console.log(description)
                        console.log()
                    });
                });
                giveEventChoices(eventID);
    }

    getEventByIdSeries = (eventID) => {
        marvels.getEventByIdSeries( eventID )
                .then( (resources) => {
                    console.log()
                    resources.data.results.forEach( (items) => {
                        console.log(`Series ID: ${items.id}`)
                        console.log(`Series Name: ${items.title}`)
                        const description = (items.description != '') ? `Series Description: ${items.description}` : `Series Description: Sorry! No Description available`;
                        console.log(description)
                        console.log()
                    });
                });
                giveEventChoices(eventID);
    }

    giveEventChoices = ( eventID ) => {
        eventsPrompt.run()
                .then( (answer) => {
                    if ( answer[0] == '1' ) getEventByIdCreators( eventID)
                    else if ( answer[0] == '2' ) getEventByIdCharacters( eventID)
                    else if ( answer[0] == '3' ) getEventByIdStories( eventID)
                    else if ( answer[0] == '4' ) getEventByIdComics( eventID)
                    else if ( answer[0] == '5' ) getEventByIdSeries( eventID)
                }) 
    }

    var eventsPrompt = new Radio({
        name: 'eventCat',
        message: 'Want to know more about the event?',
        choices: [
            '1. Appeared in Creators.',
            '2. Appeared in Characters',
            '3. Appeared in Stories',
            '4. Appeared in Comics',
            '5. Appeared in Series',
            '6. Exit'
        ]
    });
    
module.exports.run = options => {
    if ( options.id == null && options.name == null ) {
        console.log("In if - both null.")
        marvels.events()
                .then( (resources) => {
                    console.log()
                    resources.data.results.forEach( (items) => {
                        console.log(`Event ID: ${items.id}`);
                        console.log(`Event Name: ${items.title}`)
                        const description = (items.description != '') ? `About the Event: ${items.description}` : `About the Event: Sorry! No Description available`;
                        console.log(description);
                        console.log(`Appeared in Creators: ${items.creators.available}`);
                        console.log(`Appeared in Characters: ${items.characters.available}`);
                        console.log(`Appeared in Stories: ${items.stories.available}`)
                        console.log(`Appeared in Comics: ${items.comics.available}`)
                        console.log(`Appeared in Series: ${items.series.available}`)
                        console.log()
                    });
                });
                
    } else if ( options.name != null ) {
        console.log("In else if - id null.")
        marvels.getEventsByName( options.name.replace(/ /g, "%20") )
                .then( (resources) => {
                    console.log()
                    console.log(resources.data.results)
                    resources.data.results.forEach( (items) => {
                        console.log(`Event ID: ${items.id}`);
                        console.log(`Event Name: ${items.title}`)
                        const description = (items.description != '') ? `About the Event: ${items.description}` : `About the Event: Sorry! No Description available`;
                        console.log(description);
                        console.log(`Appeared in Creators: ${items.creators.available}`);
                        console.log(`Appeared in Characters: ${items.characters.available}`);
                        console.log(`Appeared in Stories: ${items.stories.available}`)
                        console.log(`Appeared in Comics: ${items.comics.available}`)
                        console.log(`Appeared in Series: ${items.series.available}`)
                        console.log()
                    });
                    return resources.data.results[0].id;
                })
                .then( (eventID) => {
                    giveEventChoices( eventID);
                })
    } else if ( options.id != null ) {
        console.log("In else if - name null.")
        if ( !options.creators && !options.characters && !options.stories && !options.comics && !options.series) {
            marvels.getEventById(options.id)
                    .then( (resources) => {
                        console.log()
                        resources.data.results.forEach( (items) => {
                            console.log(`Event ID: ${items.id}`);
                            console.log(`Event Name: ${items.title}`)
                            const description = (items.description != '') ? `About the Event: ${items.description}` : `About the Event: Sorry! No Description available`;
                            console.log(description);
                            console.log(`Appeared in Creators: ${items.creators.available}`);
                            console.log(`Appeared in Characters: ${items.characters.available}`);
                            console.log(`Appeared in Stories: ${items.stories.available}`)
                            console.log(`Appeared in Comics: ${items.comics.available}`)
                            console.log(`Appeared in Series: ${items.series.available}`)
                            console.log()
                        });
                        return resources.data.results[0].id;
                    })
                    .then( (eventID) => {
                        giveEventChoices( eventID );
                    })
        }
        if ( options.creators == true ) {
            getEventByIdCreators(options.id)
        }
        if ( options.characters == true ) {
            getEventByIdCharacters(options.id)
        }
        if ( options.stories == true ) {
            getEventByIdStories(options.id)
        }
        if ( options.comics == true ) {
            getEventByIdComics(options.id)
        }
        if ( options.series == true ) {
            getEventByIdSeries(options.id)
        }
    }

}