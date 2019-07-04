# Lab38 - Remote APIs with Redux

Implements asyncronous actions for API calls.

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/lab38-remote-apis/pull/1)
- [Netlify Deployment](https://fervent-ritchie-937f67.netlify.com)

### Modules

#### `index.js`

Gets the root element in the HTML and renders the App component wrapped in the store provider

#### `app.js`

Connects to the store and maps the store state and dispatch to props.  Renders the section with the information from peopleReducer and personReducer

#### `store/index.js`

Creates the store from the combined reducers.

#### `store/people-reducer.js`

Handles the syncronous 'SEND_PEOPLE_RESULTS' action.

#### `store/person-reducer.js`

Handles the syncronous 'SEND_PEOPLE_RESULTS' and 'SEND_PERSON_RESULTS' actions.

#### `store/people-actions.js`
Exports an asyncronous action that performs the API call for the list of people and the syncronous action for setting it to the store's state with the reducer.

#### `store/people-actions.js`
Exports an asyncronous action that performs the API call for the individual person's stats and the syncronous action for setting it to the store's state with the reducer.

#### `store/middleware/thunk.js`
Checks if an action is a function or an object.  If its a function it gets called by the store, if its an object next is called with the action.

### Operation

Go to the deployment [here](https://fervent-ritchie-937f67.netlify.com).  Clicking the button quries the StarWars API for a list of people.  Clicking on a single person displays their stats.  People are saved in the store as they're viewed, so clicking them again shows their data from the store state without another API call.