import superagent from 'superagent';

let seenPeople = [];

export const requestPersonData = result => store => {
  if (seenPeople.includes(result.name)) {
    return store.dispatch(sendResults(result.name))
  }
  else {
    seenPeople.push(result.name);
    return superagent.get(result.url)
      .then(results => {
        return store.dispatch(sendResults(results.body))
      })
      .catch(console.error)
  }
}


export const sendResults = payload => ({
  type:'SEND_PERSON_RESULTS',
  payload: payload,
});