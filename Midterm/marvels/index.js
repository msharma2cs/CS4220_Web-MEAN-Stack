const
    // Required to get the configurations for api.
     config = require('./config'),
     // Required to request the api URL.
     superagent = require('superagent')

// Uses get method to call api, and returns either body on success or error.
const _fetch = (command) => {
    return superagent.get(`${config.url}/${command}&ts=${config.timestamp}&apikey=${config.public_key}&hash=${config.auth_hash}`)
        .then( (response) => response.body )
        .catch( (error) => error.response.body )
}

//Fetches lists of events.
exports.events = ( limit=20, offset=0) => {
    return _fetch(`events?limit=${limit}&offset=${offset}`)
}

exports.getEventsByName = ( limit=20, offset=0, eventName) => {
    return _fetch(`events?limit=${limit}&offset=${offset}&name=${eventName}`)
}

exports.getEventById = ( limit=20, offset=0, id) => {
    return _fetch(`events/${id}?limit=${limit}&offset=${offset}`)
}

exports.getEventByIdCharacters = ( limit=20, offset=0, id) => {
    return _fetch(`events/${id}/characters?limit=${limit}&offset=${offset}`)
}

exports.getEventByIdComics = ( limit=20, offset=0, id) => {
    return _fetch(`events/${id}/comics?limit=${limit}&offset=${offset}`)
}

exports.getEventByIdCreators = ( limit=20, offset=0, id) => {
    return _fetch(`events/${id}/creators?limit=${limit}&offset=${offset}`)
}

exports.getEventByIdSeries = ( limit=20, offset=0, id) => {
    return _fetch(`events/${id}/series?limit=${limit}&offset=${offset}`)
}

exports.getEventByIdStories = ( limit=20, offset=0, id) => {
    return _fetch(`events/${id}/stories?limit=${limit}&offset=${offset}`)
}


// Fetches lists of series.
exports.series = ( limit=20, offset=0) => {
    return _fetch(`series?limit=${limit}&offset=${offset}`)
}

exports.getSeriesByName = ( limit=20, offset=0, serieName) => {
    return _fetch(`series?limit=${limit}&offset=${offset}&name=${serieName}`)
}

exports.getSeriesById = ( limit=20, offset=0, id) => {
    return _fetch(`series/${id}?limit=${limit}&offset=${offset}`)
}

exports.getSeriesByIdCharacters = ( limit=20, offset=0, id) => {
    return _fetch(`series/${id}/characters?limit=${limit}&offset=${offset}`)
}

exports.getSeriesByIdComics = ( limit=20, offset=0, id) => {
    return _fetch(`series/${id}/comics?limit=${limit}&offset=${offset}`)
}

exports.getSeriesByIdCreators = ( limit=20, offset=0, id) => {
    return _fetch(`series/${id}/creators?limit=${limit}&offset=${offset}`)
}

exports.getSeriesByIdEvents = ( limit=20, offset=0, id) => {
    return _fetch(`series/${id}/events?limit=${limit}&offset=${offset}`)
}

exports.getSeriesByIdStories = ( limit=20, offset=0, id) => {
    return _fetch(`series/${id}/stories?limit=${limit}&offset=${offset}`)
}