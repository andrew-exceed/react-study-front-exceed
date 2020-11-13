import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './styles/App.scss';
import 'fontsource-roboto';

import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'

import MainPage from './views/MainPage'
import TopicPage from './views/TopicPage'
import NotFoundPage from './views/NotFoundPage'
import ExamPage from './views/ExamPage'
import FinalExamPage from './views/FinalExamPage'
import ExamDetailPage from './views/ExamDetailPage'

function App() {

  
  return (
    <Router >
      <NavBar />
      <div className='content'>
          <Switch>

            <Route exact path="/">
              <MainPage />
            </Route>

            <Route path="/topic/:id?">
              <TopicPage />
            </Route>

            <Route path="/examDetail/:slug">
              <ExamDetailPage />
            </Route>

            <Route path="/exam">
              <ExamPage />
            </Route>

            <Route path="/finish">
              <FinalExamPage />
            </Route>

            <Route component={NotFoundPage} />
            
          </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
