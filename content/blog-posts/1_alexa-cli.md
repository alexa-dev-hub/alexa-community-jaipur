# Install the Alexa CLI:

#### June 1, 2020 by [Tarun](/)

1. [Install ASK CLI](#intallaskcli)

## What should I know?

You should have a Amazon Developer account, if you don't have one [Sign Up](https://developer.amazon.com/) for one.  
It is expected that you have a basic knowledge as to how a skill works, what are intents and slots, and basic understanding of NodeJS or Python.
Get a refresher with this video. (Note: The video is a bit old. A few things have changed in the console as of now.)

<iframe src="https://youtube.com/embed/q-mrSBrlDso" frameborder="0" allowfullscreen="true" width="100%" height="450"> </iframe>

**Excited?**  
Let's get started!

## <a name="intallaskcli"></a> Install the Alexa Skills Kit CLI

<img src="https://i.ytimg.com/vi/Z1pVgsAKmYI/maxresdefault.jpg" width="100%"/>

CLI stands for **Command Line Interface**, upon installation of which you can easily control your workflow using the command prompt without going to the Alexa Console.

As you must have known Alexa development can be done in both NodeJS and Python so download them to your system.

- [NodeJS](https://nodejs.org/en/) (download the one labelled as LTS)
- [Python](https://www.python.org/downloads/release/python-360/) (This link opens Python 3.6, the most stable and compatible version)

Once done, you can now begin to install the ASK CLI, open the Command Prompt (Windows) or Termial (Linux) and enter the following commands, also note, if any of the commands dosen't run, then open the terminal / CMD as an administrator on Windows or type sudo before your commands in Linux.

`npm install -g --production windows-build-tools@4.0.0`  
 The above step is required only for windows  
`npm install -g ask-cli`  
`ask configure`  
After the above steps you'll be prompted to enter your credentials in your browser, enter them and you've succesfully completed the installation process!

_Congrats!_  
_Let's create a new Skill using the CLI in the next post._
