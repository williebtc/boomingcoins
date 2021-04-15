import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from "./screens/HomeScreen"
import AboutScreen from "./screens/AboutScreen"
import ServicesScreen from "./screens/ServicesScreen"
import FaqScreen from "./screens/FaqScreen"
import TermsScreen from "./screens/TermsScreen"
import ContactScreen from "./screens/ContactScreen"
import LoginScreen from "./screens/Login"
import RegisterScreen from "./screens/RegisterScreen"
import Dashboard from "./screens/Dashboard"
import Admin from "./screens/Admin"
import UserEditScreen from "./screens/UserEditScreen"
import Guidance from "./components/Guidance"
import Packages from "./components/Packages"

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/about" component={AboutScreen} exact />
          <Route path="/services" component={ServicesScreen} exact />
          <Route path="/faq" component={FaqScreen} exact />
          <Route path="/terms" component={TermsScreen} exact />
          <Route path="/contact" component={ContactScreen} exact />
          <Route path="/login" component={LoginScreen} exact />
          <Route path="/register" component={RegisterScreen} exact />
          <Route path="/dashboard" component={Dashboard} exact />
          <Route path="/guidance" component={Guidance} exact />
          <Route path="/package" component={Packages} exact />
          <Route path="/admin" component={Admin} exact />
          <Route path="/admin/user/:id/edit" component={UserEditScreen} exact />
        </Switch>
        <Footer />
      </Router>
    </>
  )
}

export default App
