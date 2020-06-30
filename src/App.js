import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MulNavbar from './MulNavbar/MulNavbar';
import Playground from './Playground/Playground';
import MulTable from './MulTable/MulTable';
import Statistic from './Statistic/Statistic';
import StaticParent from './StatisticParent/StatisticParent';
import Setting from './Setting/Setting';

// data
import classList from './ClassList';
import student from './Student';
import gameList from './GameList';

import './App.css';
import StatisticParent from './StatisticParent/StatisticParent';

class App extends Component {
  static defaultProps = {
    // 1: children, 2: parent, 3: teacher
    role: 3
  }
  fetchProfile(studClass, studId) {
    let fetchedClass = classList.find(classDetail => {
      return classDetail.studClass === studClass;
    });
    let fetchedProfile = fetchedClass.students.find(student => {
      return student.studId === studId;
    });
    fetchedProfile.studClass = studClass;
    return fetchedProfile;
  }
  render() {
    const { role } = this.props;
    return (
      <div className='App'>
        <MulNavbar role={role} />
        <Switch>
          <Route exact path='/' component={Playground} />
          <Route exact path='/table' component={MulTable} />
          {
            role === 3 ?
              <React.Fragment>
                <Route exact path='/statistic' render={routeProps => (
                  <Statistic classList={classList} />
                )} />
                <Route exact path='/statistic/:class/:id' render={routeProps => (
                  <Statistic classList={classList} profile={this.fetchProfile(routeProps.match.params.class, routeProps.match.params.id)} />
                )} />
                <Route exact path='/setting' render={routeProps => (
                  <Setting classList={classList} gameList={gameList} />
                )} />
              </React.Fragment> :
              <Route exact path='/statistic_parent' render={routeProps => (
                <StatisticParent student={student} />
              )} />
          }
        </Switch>
      </div>
    );
  }
}

export default App;
