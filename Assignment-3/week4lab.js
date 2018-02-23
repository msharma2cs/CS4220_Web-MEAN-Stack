//Built-in Modules
const http = require('http')

// Custom Variables
const startTimes = {};
const sampleResults = [];
const sampleStatus = {
	success: [],
	error: []
};
const sample = [
	'http://www.google.com/',
	'http://www.spotify.com/us/',
	'http://twitter.com/',
	'http://google.com/nothing'
];

// Gets the response time from the http request.
const getTimes = (url, callback) => {
	http.get(url, (response) => {
		sampleResults.push({
			url: url,
			time: (new Date().getTime() - startTimes[url].getTime())
		})
		sampleStatus[(response.statusCode >= 200 && response.statusCode < 400)? 'success': 'error'].push(url)
		callback()
	})
}

// Prints time and http request status
const printTimes = (sampleList) => {
	if (!sampleList) {
		if (sampleResults.length == sample.length) {
			sampleResults.sort((a, b) => {
				return a.time - b.time
			})

			console.log("\n****************************************\n")
			console.log(sampleResults)
			console.log("\n****************************************\n")
			console.log(sampleStatus)
			console.log("\n****************************************\n")
		}
		return;
	}
	sampleList.forEach((sample) => {
		startTimes[sample] = new Date()
		getTimes(sample, printTimes)
	})
}

printTimes(sample)