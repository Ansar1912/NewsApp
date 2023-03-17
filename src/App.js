import React, { Component } from 'react'
import NavBar from './componenets/NavBar'
import News from './componenets/News'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <NavBar/>
        <Routes>
          <Route exact path="" element={<News key="home" />} />  
          <Route exact path="/business" element={<News key="business" category="business" country="us" pageSize="12" /> }/>  
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" country="us" pageSize="12" /> }/>  
          <Route exact path="/health" element={<News key="health" category="health" country="us" pageSize="12" /> }/>  
          <Route exact path="/science" element={<News key="science" category="science" country="us" pageSize="12" /> }/>  
          <Route exact path="/sports" element={<News key="sports" category="sports" country="us" pageSize="12" /> }/>  
          <Route exact path="/technology" element={<News key="technology" category="technology" country="us" pageSize="12" /> }/>  
          <Route exact path="/general" element={<News key="general" category="general" country="us" pageSize="12" /> }/>  
        </Routes>
        </Router>
      </div>
    )
  }
}

