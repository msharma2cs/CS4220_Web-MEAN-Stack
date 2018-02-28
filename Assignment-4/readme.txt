##### Lab 2 - Week 5 #####

-----------
To execute:
-----------
    1. npm install
    2. node mineHelloWorld.js
    3. node validateMessages.js

    [Note]: Uses the public/private keys provided on github for signing and verification, included in current directory.


--------------------------------
Question 1: Hello, World! Coins
--------------------------------
    Required: To mine a solution for CS4220 Hello, World! Coin. Specifically, to find an input that begins with the string Hello, World!, followed by a nonce, and hashes to an output with three leading zeroes.

    For example, the string `Hello, World!1558215` hashes to '000008fb67e78dee225c2bea554b989b164c1db4cbc5d281d00ffa81724a83b3'
    This output has five (5) leading zeroes: 000008fb67e78... and would not be the correct answer.

    1. Used SHA-256 hashing algorithm to calculate your hashes.
    2. Nonce begins at 1, and increments with each hashing attempt.
    3. Output is in the following form:
            The 'SHA-256' digest of 'Hello, World!???' is: 000....


-----------------------------
Question 2: Message Validator
-----------------------------
    Required: To read a remote array of objects from http://albertcervantes.com/cs4220/messages.json consisting of message and signature properties, and determine if the message is valid based on the associated signature. 
    
    For example,
        false - The quick brown fox jumped over the lazy moon
        false - Sphinx of black quartz, judge my vow
        true - Jackdaws love my big sphinx of quartz
    
    1. Script outputs whether the message is valid or not, followed by the original message.
    2. Used the RSA key pair provided via GitHub.

----------------------------------------------------------------
Github link: https://github.com/msharma2cs/CS4220_Web-MEAN-Stack
----------------------------------------------------------------

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------