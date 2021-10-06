import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// component
import Home from './components/Home'
import Header from './components/Header_footer/header'
import Footer from './components/Header_footer/footer'

const Routes = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes
