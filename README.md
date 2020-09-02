<img src="https://github.com/imabp/alexa-community-jaipur/blob/master/ReadMe_Assets/ReadMeAsset.PNG"/>

# Alexa Blogs

The website is dedicated to Alexa Development blogs.:computer:<br> 
Blogs are posted by the members of Alexa Community:people_holding_hands:, Jaipur.

## Stack Used: MERN.

The website stands on the <b>MERN</b> architecture. <br>
You can find the front-end part within the _client_ folder [here](https://github.com/alexa-dev-hub/alexa-community-jaipur/tree/master/client)

## Further Development and Contribution

The website requires a whole new fresher look. We would love to see your _creativity and bring out the designer within you._ You can spill your ideas using the Material UI library for React. We need designer who could create _wireframes_ for the website.


## Steps to get you started:

Before moving forward, make sure you are aware of the MERN stack and have the necessary libraries and packages installed.  <br>
React is built using the create-react-app package for your knowledge.  <br>
- If you want to start learning React go through the [documentation](https://reactjs.org/docs/getting-started.html)

Follow these steps to run the website locally.
- Clone the repo using terminal, giving this command `git clone https://github.com/alexa-dev-hub/alexa-community-jaipur.git`.
- Then type `cd alexa-community-jaipur`.

**Before moving to the next steps, first put up the MONGO_DB_URI.**

- Inside the _config_ folder, add a file named _devkeys.js_.
- Add this code.

```javascript
const MONGO_DB_URI =
  "mongodb+srv://<username>:<password>@ecomerce-website.qfwmi.mongodb.net/<dbname>?retryWrites=true&w=majority";

module.exports = { MONGO_DB_URI };
```

- The above URI is just a sample. You will get a different URI when you connect your cluster to an application. It is advised you create new credentials and a new DB for working. You will then replace these details in the URI, namely < username >, < password > and < dbname >.

**Now proceed forward:**

- Now if you have nodemon installed then type `npm run dev` to start the development backend server.
- You will see the server starts at your localhost, port 5000.
- Now open another terminal and browse to the same folder.
- Now type `cd client` to move into the client folder (React).
- We will run the backend and frontend separately.
- Then type `npm run start` to begin the React local server.
- Goto `http://localhost:3000`, to see the website up and running.
- You may have to change the the API Url to direct at the backend local port.
- Explanation on client-side is in this [README](https://github.com/alexa-dev-hub/alexa-community-jaipur/blob/master/client/README.md)

## Good for?	:grinning:

The repository is good for beginners to work on. Those :man_technologist: who have recently learnt React and Web development and want to get their hands dirty with some cool open source projects are always welcome. We would love to see your creativity here.

## Want to be a part of Alexa Community, Jaipur.

Follow us on 
<a href="https://www.linkedin.com/company/aacjaipur" target="blank"><img align="center" src="https://user-images.githubusercontent.com/45101690/88830367-7b0a1700-d1eb-11ea-9ab1-5ab4699a1660.gif" alt="sumanth nidamanuri" height="20" width="20" /></a><br>
We will get in touch with you.

## Leave a STAR!:star_struck:
