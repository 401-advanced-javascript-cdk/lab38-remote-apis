export default (state = [], {type, payload}) => {
  switch(type) {
    case 'SEND_PEOPLE_RESULTS':
      return payload;
    default:
      return state;
  }
};