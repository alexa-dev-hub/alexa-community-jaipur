<img src="https://github.com/imabp/alexa-community-jaipur/blob/master/ReadMe_Assets/ReadMeAsset.PNG"/>

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-10-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->
# ✌ We just got upgraded to V2.🎉
Check here at: https://alexadevhub.netlify.com 

# Alexa Blogs

The website is dedicated to Alexa Development blogs.:computer:<br> 
Blogs are posted by the members of Alexa Community:people_holding_hands:, Jaipur.

## Stack Used: MERN.

The website stands on the <b>MERN</b> architecture. <br>
You can find the front-end part within the [_client_](https://github.com/alexa-dev-hub/alexa-community-jaipur/tree/master/client) folder. 

## Development Guidelines
We have shifted our codebase from Heroku to Netlify and now have decoupled Backend and Frontend branches.
This helps us to maintain code more easily. We follow modular coding practices.

<img src="https://user-images.githubusercontent.com/53480076/95044924-5906a680-06fe-11eb-8d63-b9d7a8dcdac2.png">

### Note
Frontend is hosted on Netlify.
Backend is on Heroku
1. All changes regarding **FrontEnd** should be made in `master`. For contributors, if you are working on **frontend**, you need to send PR on `master` branch
2. All changes regarding **BackEnd** should be made in `v1-deployment`. For contributors, if you are working on **backend**, you need to send PR on `v1-deployment` branch.
#### [IMPORTANT] Maintainers, DO NOT merge these two branches `master` and `v1-deployment`. This would lead to **kill of application**.





## Stats

![GitHub forks](https://img.shields.io/github/forks/alexa-dev-hub/alexa-community-jaipur?style=social)
![GitHub stars](https://img.shields.io/github/stars/alexa-dev-hub/alexa-community-jaipur?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/alexa-dev-hub/alexa-community-jaipur?style=social)
![GitHub license](https://img.shields.io/badge/license-MIT-red)


### Issues :
![GitHub issues](https://img.shields.io/github/issues-raw/alexa-dev-hub/alexa-community-jaipur)
![GitHub closed issues](https://img.shields.io/github/issues-closed-raw/alexa-dev-hub/alexa-community-jaipur)

### Pull requests :
![GitHub pull requests](https://img.shields.io/github/issues-pr-raw/alexa-dev-hub/alexa-community-jaipur)
![GitHub closed pull requests](https://img.shields.io/github/issues-pr-closed-raw/alexa-dev-hub/alexa-community-jaipur)

### Commit history :
![GitHub commit activity](https://img.shields.io/github/commit-activity/m/alexa-dev-hub/alexa-community-jaipur)
![GitHub last commit](https://img.shields.io/github/last-commit/alexa-dev-hub/alexa-community-jaipur)


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
- Also make sure to **whitelist your IP address** in the cluster's **Network Access Tab** on MongoDB Atlas. You can allow traffic from all by putting in `0.0.0.0/0` too, for development purposes. 

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


## Further Development and Contribution :speech_balloon:

The website requires a whole new fresher look. We would love to see your _creativity and bring out the designer within you._ You can spill your ideas using the Material UI library for React. We need designer who could create _wireframes_ for the website.

## Regarding Deployment to Production :rocket:

The website has been enabled with automatic deployments on **Heroku** (See Environments) from the master branch, make sure you do not leave any critical merge conflicts whenever you leave a PR.

## Want to be a part of Alexa Community, Jaipur. :handshake:
Follow us on 
<a href="https://www.linkedin.com/company/aacjaipur" target="blank"><img align="center" src="https://user-images.githubusercontent.com/45101690/88830367-7b0a1700-d1eb-11ea-9ab1-5ab4699a1660.gif" alt="sumanth nidamanuri" height="20" width="20" /></a><br>
We will get in touch with you.

## Facing Any Problem or need any Help? :thinking:
Write us in [issues](https://github.com/issues) section. We will try to solve your issue within 24 hours :hourglass_flowing_sand:.<br>

### Show some :heart: and :star: the repo to support the project! :star_struck:

This project is published and maintained under <b>MIT License</b>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/tarunnsingh"><img src="https://avatars0.githubusercontent.com/u/31896659?v=4" width="100px;" alt=""/><br /><sub><b>Tarun Singh</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=tarunnsingh" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/imabp"><img src="https://avatars3.githubusercontent.com/u/53480076?v=4" width="100px;" alt=""/><br /><sub><b>Abir</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=imabp" title="Code">💻</a> <a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=imabp" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/sumanthst24"><img src="https://avatars3.githubusercontent.com/u/45101690?v=4" width="100px;" alt=""/><br /><sub><b>Sumanth Nidamanuri</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=sumanthst24" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/hariom1625"><img src="https://avatars1.githubusercontent.com/u/66957239?v=4" width="100px;" alt=""/><br /><sub><b>Hari Om Yadav</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=hariom1625" title="Code">💻</a></td>
    <td align="center"><a href="http://web.iiit.ac.in/~dhruv.kapur"><img src="https://avatars0.githubusercontent.com/u/37783178?v=4" width="100px;" alt=""/><br /><sub><b>Dhruv Kapur</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=dkapur17" title="Code">💻</a></td>
    <td align="center"><a href="http://garimasingh.netlify.app"><img src="https://avatars2.githubusercontent.com/u/44302373?v=4" width="100px;" alt=""/><br /><sub><b>Garima Singh</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=garimasingh128" title="Documentation">📖</a></td>
    <td align="center"><a href="https://github.com/priyanshu0405"><img src="https://avatars0.githubusercontent.com/u/58037946?v=4" width="100px;" alt=""/><br /><sub><b>priyanshu0405</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=priyanshu0405" title="Code">💻</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/ManojAthreya"><img src="https://avatars2.githubusercontent.com/u/39020374?v=4" width="100px;" alt=""/><br /><sub><b>Manoj Athreya A</b></sub></a><br /><a href="#design-ManojAthreya" title="Design">🎨</a></td>
    <td align="center"><a href="https://github.com/harshalkaigaonkar"><img src="https://avatars0.githubusercontent.com/u/65395607?v=4" width="100px;" alt=""/><br /><sub><b>harshal kaigaonkar</b></sub></a><br /><a href="https://github.com/alexa-dev-hub/alexa-community-jaipur/commits?author=harshalkaigaonkar" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/TheGiraffe"><img src="https://avatars1.githubusercontent.com/u/4595588?v=4" width="100px;" alt=""/><br /><sub><b>Sophia</b></sub></a><br /><a href="#design-TheGiraffe" title="Design">🎨</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
