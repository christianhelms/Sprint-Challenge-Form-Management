import React from 'react';
import {Route, Link} from 'react-router-dom';
import PrivateData from './Components/PrivateData';
import {ProtectedRoute} from './Components/ProtectedRoute';
import 'semantic-ui-css/semantic.min.css'
import Register from './Components/Register';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Register}/>
      <ProtectedRoute path='/privatedata' component={PrivateData}/>
    </div>
  );
}

export default App;
