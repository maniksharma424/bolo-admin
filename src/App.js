import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import './scss/style.scss'
import ForgotPassword from './views/pages/register/ForgotPassword'
import NewRegister from './views/pages/register/NewRegister'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
// import EditProducts from './views/Commerce/Editproducts'
// Containers
const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
const Login = React.lazy(() => import('./views/pages/login/Login'))
const Register = React.lazy(() => import('./views/pages/register/Register'))
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route exact path="/" name="Login Page" render={(props) => <Login {...props} />} />
            <Route exact path="/forgot" name="Forgot Page" render={(props) => <ForgotPassword {...props} />} />
            <Route exact path="/newRegister" name="Register Page" render={(props) => <NewRegister {...props} />} />




            {/* <Route exact path="/comproducts/edit/:_id" name="commerce-product-edit" render={(props) => <EditProducts {...props} />} /> */}
            {/* <Route
              exact
              path="/register"
              name="Register Page"
              render={(props) => <Register {...props} />}
            /> */}
            <Route exact path="/404" name="Page 404" render={(props) => <Page404 {...props} />} />
            <Route exact path="/500" name="Page 500" render={(props) => <Page500 {...props} />} />
            <Route path="/" name="Home" render={(props) => <DefaultLayout {...props} />} />
          </Switch>
        </React.Suspense>
      </HashRouter>
    )
  }
}
//@coreui/coreui-free-react-admin-template@4.1.1
export default App
