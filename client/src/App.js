import React from 'react';
import StartPage from './pages/StartPage/StartPage';
import CreateContest from './pages/CreateContest/CreateContest';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import AdminPanel from './pages/AdminPanel/Adminpanel';
import {Route , Switch , Router} from "react-router-dom";
import history from './boot/browserHistory';
import CheckUser from './components/HOC/checkUser';
import Dashboard from './pages/Dashboard/Dashboard';
import NotFound from './pages/NotFound/notFound';
import  Form from './components/CreatContestComponents/threeStepContestForm/threeStepContestForm'

function App (){
    return (
      <CheckUser>
        <Router history={history}>
          <Switch>
            <Route path="/" exact component={StartPage} />
            <Route path="/login/"  exact component={Login} />
            <Route path="/signup/" exact component={SignUp} />
            <Route path="/admin_panel/" exact component={AdminPanel} />
            <Route path="/contest_creating_step1/" exact component={Form} />
            <Route path="/contest_creating/" exact component={CreateContest} />
            <Route path="/dashboard/" exact component={Dashboard} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </CheckUser>
    )
  }

export default App;

