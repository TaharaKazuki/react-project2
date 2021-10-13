import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AuthGurad from './Hoc/Auth'

// component
import Home from './components/Home'
import Header from './components/Header_footer/header'
import Footer from './components/Header_footer/footer'
import SignIn from './components/Signin'
import Dashboard from './components/Admin/Dashboard'

const Routes = ({ user }) => {
  return (
    <Router>
      <Header user={user} />
      <Switch>
        <Route path="/dashboard" exact component={AuthGurad(Dashboard)} />
        <Route path="/sign_in" exact component={SignIn} />
        <Route path="/" exact component={Home} />
      </Switch>
      <ToastContainer />
      <Footer />
    </Router>
  )
}

export default Routes
