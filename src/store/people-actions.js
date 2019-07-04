import superagent from 'superagent';

export const requestPeopleData = url => store => {
  return superagent.get(url)
    .then(results => {
      return store.dispatch(sendResults(results.body.results))
    })
    .catch(console.error)
}


export const sendResults = payload => ({
  type:'SEND_PEOPLE_RESULTS',
  payload: payload,
});