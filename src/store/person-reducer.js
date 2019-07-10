export default (state = {}, {type, payload}) => {
  switch(type) {
    case 'SEND_PEOPLE_RESULTS':
      let newState = {...state};
      payload.map(person => {
        newState = {...newState, [person.name]: {}}
      })
      return newState;
    case 'SEND_PERSON_RESULTS':
      if(payload.name) {
        return {...state, current: payload.name, [payload.name]:payload};
      }
      else {
        return {...state, current: payload};
      }
    default:
      return state;
  }
};