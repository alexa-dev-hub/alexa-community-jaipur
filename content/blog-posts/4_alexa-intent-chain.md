## <a name="intentchaining"></a> Intent Chaining

#### June 7, 2020 by [Tarun](/)

While developing a skill, one may require to use a multi turn conversation with Alexa, rather to propmt Alexa to reply back. In other words something like this:

```windows
Alexa: How are you?
User: I am fine.
Alexa: That's great. I can do a Covid-19 checkup for you. Let's begin.
Alexa: Do you have symptoms of fever?
User: I have mild fever.
Alexa: Okay, so you have mild fever. Do you also have symptoms of....
```

**You got the point!**  
This is a more natural way of having conversation with your user. In order to achieve this functionality you need to work with Dialog Delegation and achieve Intent Chaining through it. Let's proceed and see how do we do that. Thanks to [this](https://developer.amazon.com/blogs/alexa/post/9ffdbddb-948a-4eff-8408-7e210282ed38/intent-chaining-for-alexa-skill) post for making things easy.

The way we are going to learn intent chaining is by implement a skill on it.  
It is suggested that you create a skill using [ASK CLI](#createskill). Once done proceed to the next steps below.

## Building the Interaction Model.

We will provide the launch request prompt to the user as "How are you?". The user will respond to this question and from then onwards we will carry forward the conversation. So to handle user's response we create an Intent named 'WhatCanYouDoIntent'. This has some sample utternaces. Here we will also add that we are starting our test.

```javascript
const WhatCanYouDoIntentHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "WhatCanYouDoIntent"
    );
  },
  handle(handlerInput) {
    const speakOutput =
      "Great! I will start a generic Covid test for you, let us begin.";
    return handlerInput.responseBuilder
      .addDelegateDirective({
        //    IGNORE
        name: "FeverCheckIntent", //    FOR A
      }) //    MOMENT
      .speak(speakOutput)
      .getResponse();
  },
};
```

We will be asking our user about three conditions for our test. They are fever symptoms, cold symptoms and travel hsitory.
**TWO CHOICES ARE AVAILABLE TO US NOW:**

1. We can create a single intent and can take these 3 values in 3 different slots. Then using auto-delegation we can force Alexa to reprompt untill all values are taken.
2. We can create 3 different intents (FeverCheckIntent, ColdCheckIntent and TravelCheckIntent) and can chain them together.

The second option will help us understand our goal of intent chaining hence we go with it.
Within each of the 3 intents we will have slots. Hence we first create custom slots.

### Making Custom Slots

In the left pane, beside the 'Slot Type(0)' title, click the **Add** button. Give a 'slot type name' (here I have given FeverCondition) and enter slot values as described below:

<img src="/api/posts/images/feverslot.JPG" width="100%">

Now create an intent named 'FeverCheckIntent' and at the bottom provide create a new slot (here I named it as Fevereport) with slot type 'FeverCondition' as created above. Notice that we didn't give any sample utterances, becauses this intent won't be called when the user speaks something first rather when Alexa prompts the user to speak.
To do that click on the Slot name 'FeveReport' and fill the page as decribed below.

<img src="/api/posts/images/slotprompt.JPG" width="100%">

Once done with it Click Save Model.
