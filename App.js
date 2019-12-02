import React from 'react';
import { BrowserRouter,Route } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './components/home'
import Parkir from './components/parkir';
import Hitungkata from './components/hitungkata'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Route exact path='/' component={Home} />
        <Route path='/parkir' component={Parkir} />
        <Route path='/kata' component={Hitungkata} />
      </div>
    </BrowserRouter>
  );
}

export default App;
