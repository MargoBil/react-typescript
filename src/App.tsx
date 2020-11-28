import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navbar } from "./components/Navbar";
import { TodosPage } from './components/pages/TodosPage';
import { AboutPage } from './components/pages/AboutPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
      <Route path='/' exact component={TodosPage}/> 
      <Route path='/about' exact component={AboutPage}/> 
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
