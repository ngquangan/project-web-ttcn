import React, { Component } from 'react'
import {Route, Switch} from 'react-router-dom';
import NewfeedContainer from './../../Newfeed/containers/NewfeedContainer';
import Error404Screen from './../../Error404/components/Error404Screen';
import LoginContainer from '../../Login/containers/LoginContainer';
import HeaderContainer from '../../../commons/Header/containers/HeaderContainer';
import CategoryContainer from '../../Category/Containers/CategoryContainer';
import TagContainer from '../../Tag/containers/TagContainer';
import QuestionDetailContainer from '../../QuestionDetail/containers/QuestionDetailContainer';
import CategoryItemContainer from '../../Category/Containers/CategoryItemContainer';
import NotificationScreen from '../../Notification/components/NotificationScreen';
import TagItemContainer from '../../Tag/containers/TagItemContainer';
import SearchContainer from '../../Search/containers/SearchContainer';
import ProfileScreen from '../../Profile/components/ProfileScreen';
import GuestProfileScreenContainer from '../../GuestProfile/containers/GuestProfileScreenContainer';
export default class HomeScreen extends Component {
  
  render() {
    return (
      <React.Fragment>
          <HeaderContainer 
          />
          <Switch>
              <Route path = "/" component = {NewfeedContainer} exact/>
              <Route path = "/categories" component = {CategoryContainer} exact/>
              <Route path = "/tags" component = {TagContainer} exact/>
              <Route path = "/questions/:idQuestion" component = {QuestionDetailContainer}/>
              <Route path = "/categories/:idCategory" component = {CategoryItemContainer}/>
              <Route path = "/tags/:idTag" component = {TagItemContainer}/>
              <Route path = "/search" component = {SearchContainer}/>
              <Route path = "/notifications" component = {NotificationScreen}/>
              <Route path = "/profile" component = {ProfileScreen}/>
              <Route path = "/users/:idUser" component = {GuestProfileScreenContainer}/>
              <Route path = "/sign-in" component = {LoginContainer}/>
              <Route component = {Error404Screen} />
          </Switch>
      </React.Fragment>
    )
  }
}
