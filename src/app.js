import React from 'react';

import app from './app.module.scss';

import {requestPeopleData} from './store/people-actions.js';
import {requestPersonData} from './store/person-actions.js';
import {connect} from 'react-redux';

const peopleUrl = 'https://swapi.co/api/people/';

class App extends React.Component {

  render() {
    
    return (
      <>
        <button onClick={() => this.props.requestPeopleData(peopleUrl)}>
          Get The People
        </button>
        <section className={app.people}>
          <ul>
            { 
              this.props.people !== [] ?
                this.props.people.map((result, i) => (
                  <li onClick={() => this.props.requestPersonData(result)} key={i}>
                    {result.name}
                  </li>
                ))
              : null
            }
          </ul>
          <div className={app.person}>
            {
              this.props.person.current ?
              Object.keys(this.props.person[this.props.person.current]).map((key, i) => (
              <div key={i}>
                <span>{key}:</span>
                <span>{this.props.person[this.props.person.current][key]}</span>
              </div>
            ))
            : null
            }
          </div>
        </section>
      </>
    )
  }
}

const mapStoreStateToProps = state => ({
  people: state.people,
  person: state.person
});

const mapDispatchToState = dispatch => ({
  requestPeopleData: url => dispatch(requestPeopleData(url)),
  requestPersonData: url => dispatch(requestPersonData(url))
});

export default connect(mapStoreStateToProps, mapDispatchToState)(App);