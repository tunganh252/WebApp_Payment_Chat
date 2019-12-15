import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

//component
import Main from './ui/Main'
// import Demo from './ui/Demo'

function App() {
  return (
    <Router>
      <Main/>
    </Router>
  );
}

export default App;
