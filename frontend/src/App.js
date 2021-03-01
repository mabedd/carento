import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import NotFound from './screens/NotFound'

//Renter View
import HomeScreen from './screens/HomeScreen'
import AboutUsScreen from './screens/AboutUsScreen'
import OffersScreen from './screens/OffersScreen'
import ContactScreen from './screens/ContactScreen'
import BrowseCarsScreen from './screens/BrowseCarsScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import UserProfileScreen from './screens/UserProfileScreen'
import RentSummaryScreen from './screens/RentSummaryScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'

//Company View
import CompanyHomeScreen from './screens/CompanyHomeScreen'
import CompanyRegister from './screens/CompanyRegister'
import CompanyUserListScreen from './screens/CompanyUserListScreen'

function App() {
  return (
    <Router>
      <Header />
      <Route path='/' component={HomeScreen} exact />
      <Route path='/aboutus' component={AboutUsScreen} />
      <Route path='/offers' component={OffersScreen} />
      <Route path='/contactus' component={ContactScreen} />
      <Route path='/browse' component={BrowseCarsScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/rentsummary' component={RentSummaryScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />

      <Route path='/company' component={CompanyHomeScreen} />
      <Route path='/companyregister' component={CompanyRegister} />
      <Route path='/companyusers' component={CompanyUserListScreen} />
      <Footer />
    </Router>
  );
}

export default App;
