## User Authorization and Authentication

### Hey! Following are the steps, you would require to add authorization and authentication to your MERN app.

- Tarun Singh (02/Oct/2020).

## Setting Up the Backend. (NodeJS + Express + MongoDB).

- We first need to setup MONGO DB, you can do that locally or follow [these]() steps to setup a Cluster (Database) and get a MONGODB_URI.
- Save the URI securely in your code. Make sure you do not push it to Github/GitLab for obvious security reasons.
- Check in `config/keys.js` and `config/devkeys.js` how I secure my keys. You can come up with a more intiutive method.
- Now in your `app.js` import the necessary files and make these updates.

```javascript
const keys = require("./config/keys");
const passport = require("passport");
const cookieParser = require("cookie-parser");

app.use(cookieParser());
app.use(passport.initialize());

mongoose.connect(
  keys.MONGO_DB_URI,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("DB Connected");
  }
);
```

- Next, you would need to create Schema and Models for your DB objects.
- First is the USER object and BLOG object which I created under `models` folder.
- Next initialise Next Setup the `passport.js` file.

### To be added... :cross:
