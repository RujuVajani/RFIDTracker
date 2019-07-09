# Node Programmer Test

## Background

Imagine you need to implement server to track shipments of RFID enabled t-shirts. Your
server is notified every time a t-shirt passes checkpoints. The t-shirts can also be packed
into boxes and then only the box as a whole is being scanned. Your goal is to keep track
of where each t-shirt has been seen when.

## Assignment

There is a swagger.yml file, implement a server conforming to the specification storing
data to a postgresql or mongodb database. Provide initialization scripts to the database and a small
guide on how to initialize it if needed.

Implement tests using a framework of your preference.

You may use any library(ies) of your choice. Use preferrably typescript, if you're not
familiar with it, you may use javascript. Node6 will be used, please feel free to upgrade to a later version.

Commit often to show how you progress. After you're finished, please make sure everything is committed,
zip your directory (including the .git subdirectory) and send it back.

## Additional Questions

1. Describe your solution in a few words (expect an experienced programmer reading it) and describe
   your choice of libraries and/or patterns.
   I really loved this assignment. I could do many other things but because of schedule I couldn't work on those. I have never tried mongoDB before but it is very simple and good to learn.
   I am still learning typescript and tried in this example.
2. How do you handle transactions?

3. What would be your preferred method of hosting the server?
    I would like to create docker image and host it on AWS.

4. How do you approach logging in Node?
    I have used winston here. We can use logging to file or cloudwatch or any other tool.

5. What is an event loop in Node and how does it interact with asynchronous tasks?
    setTimeout for such operations.
    
6. How do you handle errors?
    Try catch and if error send appropriate response to user.

7. How do you prefer to receive configuration?
    I would prefer environment variables for dynamic configuration.

