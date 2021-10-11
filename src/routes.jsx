import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// component
import Home from './components/Home'
import Header from './components/Header_footer/header'
import Footer from './components/Header_footer/footer'
import SignIn from './components/Signin'

const Routes = (props) => {
  console.info(props)
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/sign_in" exact component={SignIn} />
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </Router>
  )
}

export default Routes
