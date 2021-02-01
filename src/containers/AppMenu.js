import { connect } from 'react-redux'
import AppMenuComponent from '../components/AppMenu'

import * as actions from '../actions'

const mapDispatchToProps = dispatch => {
  return {
    // dispatching plain actions
    Push: (path) => dispatch(actions.Push(path)),
    SetCurrentApp: (app) => dispatch(actions.SetCurrentApp(app)),
    SetAppError: (message,errorType,errorSeverity) => dispatch(actions.SetAppError(message,errorType,errorSeverity)),
    Logout: () => dispatch(actions.Logout())
  }
}

function mapStateToProps(state) {
  const { Global,User,Msal } = state
  return {
    msalInstance: Msal.msalInstance,
    isAuthenticated: User.isAuthenticated,
    currentApp: Global.currentApp,
    appSet: Global.appSet
  }
}

export const AppMenu = connect(mapStateToProps, mapDispatchToProps)(AppMenuComponent)
/*
  const { Msal } = state;
  return {
    msalInstance: Msal.msalInstance
  };

*/