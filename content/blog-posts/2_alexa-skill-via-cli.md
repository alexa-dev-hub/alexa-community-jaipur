# <a name="createskill"></a> Creating a new Skill using ASK CLI (on Alexa-Hosted)

#### June 4, 2020 by [Tarun](/)

To create new skill type tho following command in the CMD/Terminal:  
`ask new`

This then prompts for the programming language of your choice:

- NodeJS
- Python
- Java

Select any one of your choice, here I'll explain both NodeJs and Python.

Next, choose the hosting provider for the backend code for your skill.

- Alexa Hosted (Go for this)
- AWS with CloudFormation
- AWS Lambda

Next choose a starter template for you skill.

- Hello world (Alexa's hello world skill to send the greetings to the world!)
- Fact skill (Quick sample skill to manage a collection of voice data)
- High low game (Guess a number high or low using persistent attributes)

Finally, provide a **skill_name** for your Alexa Skill (you can change this later from Alexa console) and a **folder_name** that will be created on your local system.

Now you will have a project directory (folder) created. Move into that folder by typing:
`cd folder_name`

Here you'll see the following files and folders:

- skill-package/ (folder)
- lambda/ (folder)
- ask-resources.json (file)

Now you've succesfully created and deployed your skill. Check your Alexa console. You'll see your skill with name 'skill_name'.

## (Important) Working with GIT.

In the latest update of ASK CLI we have got GIT integration built-in to work with our Alexa-Hosted Skills.
In order to work with it you should know a few basics about git. Please get a git refresher by following [this](https://www.youtube.com/watch?v=SWYqp7iY_Tc) video tutorial.

Okay! so let's proceed further.  
The 'ask new' command automatically integrates you project with git.
you can check with this command `git remote -v`.

There are 2 branches which are automatically created:

1. master - for development stage of skill
2. prod - for live skill
   Type `git branch` to see them listed. The highlighted branch will be the current selected branch (master in our case). You can change the branch by `git checkout <branch name>`. We will work on master and push changes in master brach only, until we reach the stage to deploy our skill.

## Developing the Skill

As decribed above inside your folder structure, go to 'lambda' folder which has the following contents:

_If you selected NodeJS_  
<img src="https://alexadevhub.herokuapp.com/api/posts/images/nodejs-folder-structure.JPG" width="30%">

_If you selected Python_  
<img src="https://alexadevhub.herokuapp.com/api/posts/images/pyhton-folder-structure.JPG" width="30%">

This is a basic structure of any project which has an entry point as index.js (NodeJS) or lambda_function.py (Python) and a list of dependencies and meta information which help in runnning the program as in package.json (NodeJS) or requirements.txt (Python).

## Understanding the Code

In both the SDKs availble the flow control is the same as explained below which handles an Intent named HellowWorldIntent.

NodeJS

```javascript
const HelloWorldIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "HelloWorldIntent"
    );
  },
  handle(handlerInput) {
    const speakOutput = "Hello World!";
    return handlerInput.responseBuilder.speak(speakOutput).getResponse();
  },
};
```

Python

```python
   class HelloWorldIntentHandler(AbstractRequestHandler):
    """Handler for Hello World Intent."""
    def can_handle(self, handler_input):
        # type: (HandlerInput) -> bool
        return ask_utils.is_intent_name("HelloWorldIntent")
                  (handler_input)

    def handle(self, handler_input):
        # type: (HandlerInput) -> Response
        speak_output = "Hello World!"

        return (
            handler_input.response_builder
                .speak(speak_output)
                .response
         )
```

The flow control works as follows: First the **can-handle** runs which returns true/false depending upon whether this this request can be handled or not. If returned true then **handle** runs which handles the request and returns a response.
