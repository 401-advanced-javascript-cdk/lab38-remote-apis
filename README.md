# Lab36 - Redux Assignment 2 - Reducers

Redux implementation with multiple reducers

### Author: Chris Kozlowski

### Links and Resources

- [GitHub PR](https://github.com/401-advanced-javascript-cdk/lab36-state-reducers/pull/1)
- [Netlify Deployment](https://keen-joliot-24ce61.netlify.com)

### Modules

#### `index.js`

Gets the root element in the HTML and renders the App component wrapped in the store provider.

#### `app.js`

Renders a div that displays a name  and contains a dispatch method from store props.  Renders the Numbers component.

#### `numbers.js`

Connects to the store and renders two divs.  One displays the number from store props.  The other calls a store action when clicked that resets the number to its initial state.

#### `store/index.js`

Exports the createStore method with the app and numbers reducers combined.

#### `store/app-reducers.js`

Holds logic that is triggered on a 'CHANGE' action type.

#### `store/numbers-reducers.js`

Holds logic that is triggered on a 'CHANGE' or 'RESET' action type.

#### `store/app-actions.js`

Exports the 'CHANGE' action.

#### `store/numbers-actions.js`

Exports the 'RESET' action.

#### `store/middleware/reporter.js`

Creates a log on any action.

#### Operation

Go to the deployment [here](https://keen-joliot-24ce61.netlify.com).  Clicking on the NAME text will activate the 'CHANGE' action, changing the name to a random name and the number to a random number, both of which originate from the store's state.  Clicking the RESET div will activate the 'RESET' action, setting the number onlt to its initial state.
