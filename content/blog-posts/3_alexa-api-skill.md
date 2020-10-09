# <a name="apiskill"></a> Creating an API Skill

#### June 7, 2020 by [Tarun](/)

Create a basic Hello World template as described above.
Now here we will to build an Alexa Skill which fetches data from an API and gives the output.

## What is API?

Watch this video if you aren't clear what exactly does API mean.

<iframe  frameborder="0" allowfullscreen="true" width="100%" height="450" src="https://www.youtube.com/embed/s7wmiS2mSXY"></iframe>

So here we will be using the [Covid19-API](https://api.covid19api.com/stats) to get total current cases. The following is the response from the API.

```json
{
  "Total": 59363814,
  "All": 169124,
  "AllUpdated": "2020-04-13 05:54:20 +0000 UTC",
  "Countries": 3582094,
  "...": "..."
}
```

We will extract the first key-value (i.e Total). But before moving to the code part we need to create an interaction model.

## The Interaction Model

In your console create an intent named 'TotalCasesIntent' and give some relevent sample utterances of your choice. Click 'Save Model' and then 'Build Model'.

<img src="https://alexadevhub.herokuapp.com/api/posts/images/ApiSkill-IM.JPG" width="100%">

Your interaction model is ready, let's move to the code now.

## Call the API using NodeJS (or using [Python](#pointpython))

Making a call to an API requires usage of some additional libraries. We install those libraries with the help of Node Package Manager (npm). We require just one library here named [axios](https://www.npmjs.com/package/axios).
In you terminal, you are inside your skill's directory ('skill_name' folder), now type the following command to install axios:
`npm install axios --save`
The '--save' will add axios in the list of dependencies in package.json

We create a function named getData() which will fetch data from our API.

### Use of Async/Await

NodeJS works asynchronously and on promises. If you are new to this concept or need a refresher watch this video.

<iframe src="https://youtube.com/embed/vn3tm0quoqE" frameborder="0" allowfullscreen="true" width="100%" height="450"></iframe>

Now let's here is our getData() function:

```javascript
const getData = async () => {
  const url = "https://api.covid19api.com/stats";
  return axios
    .get(url)
    .then((response) => {
      return response.data["Total"];
    })
    .catch((error) => {
      console.error(error);
    });
};
```

**Let's Understand this snippet:** The 'axios.get(url)' will return a promise which says that this command will either give a response or not. Now if we get a response the '.then()' statement runs within which we have written a callback function:

```javascript
(response) => {
  // has value of total case count
  return response.data["Total"];
};
```

This returns back the total case count value which was present in data with key value of 'Total'. (as we saw earlier).

Okay so now in our 'TotalCasesIntentHandler' when the handle part is called we see we are calling the getData() function. Since this is an asynchronous function we need to _wait_ for the response hence we used 'await'. As we used await inside our 'handle' function we need to declare it an asynchronous function by adding the 'async' keyword before it. Finally we append our total case count value to the 'speakOutput' (using [backticks (`)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) notation) which is then returned by the intent handler.

In this way we succesfully return data from our API as Alexa output.

## <a name="pointpython"></a> Call the API (using Python)

Making a call to an API requires usage of some additional libraries. We install those libraries with the help of 'pip'. We require just one library here named [requests](https://pypi.org/project/requests/).
In you terminal, you are inside your skill's directory ('skill_name' folder), now type the following command to install 'requests': `pip install requests`. Now we shall add this libraray explicitly in requirements.txt. Add `requests==2.23.0` to requirements.txt.  
Now inside our 'handle' method of our intent handler 'TotalcasesIntentHandler', we make a call to the api as follows:

```python
   response = requests.get("https://api.covid19api.com/stats")
```

We then parse the JSON and get the key-value of ['Total'] and finally convert it to a string as follows:

```python
   # has value of total case count
   str(response.json()['Total'])
```

Now we append it to the speakOutput and return the response.

**In this way we easily accomplish the process of making an API requests.**
