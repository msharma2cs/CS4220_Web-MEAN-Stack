##### Week 4 Lab #####

-----------
To execute:
-----------
    node week4lab.js

    [Note]:
    1. This produces default output mentioned here. Change values for different outputs.
    2. All scripts conforms to ES6 syntax.

----------
Question 1:
----------
    Required:   Using callbacks to print the URLs and their response time. (25 pts)

    // Example Printout
    // [
    //     {  url: ''http://google.com/nothing', time: 18 },
    //     {  url: 'https://www.google.com/', time: 21 },
    //     {  url: 'https://twitter.com/', time: 31 }
    //     {  url: 'https://www.spotify.com/us/', time: 279 }
    // ]

----------
Question 2:
----------
    Required:   Using Promises to print an object that has success and error keys,
                where the value is the URLs that results in success (200 or 300) or errors (400 or 500).

    // Example Printout
    // {
    //     success: ['https://www.google.com/', 'https://www.spotify.com/us/', 'https://twitter.com /' ],
    //     error: [''http://google.com/nothing']
    // }
--------------------------------------------------------------------------------------------------------------                    