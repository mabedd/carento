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
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import RenterRateCarScreen from './screens/RenterRateCarScreen'

//Company View
import CompanyHomeScreen from './screens/CompanyHomeScreen'
import CompanyRegister from './screens/CompanyRegister'
import CompanyUserListScreen from './screens/CompanyUserListScreen'
import CompanyCarListScreen from './screens/CompanyCarListScreen'
import CompanyCreateCarScreen from './screens/CompanyCreateCarScreen'
import CompanyEditCarScreen from './screens/CompanyEditCarScreen'
import CompanyOrderListScreen from './screens/CompanyOrderListScreen'
import CompanyProfileScreen from './screens/CompanyProfileScreen'
import CompanyLoginScreen from './screens/CompanyLoginScreen'
import CompanyRateRenterScreen from './screens/CompanyRateRenterScreen'

//Admin View
import AdminListCarsScreen from './screens/AdminListCarsScreen'
import AdminListRentersScreen from './screens/AdminListRentersScreen'
import AdminListCompaniesScreen from './screens/AdminListCompaniesScreen'
import AdminListOrdersScreen from './screens/AdminListOrdersScreen'
import AdminLoginScreen from './screens/AdminLoginScreen'
import AdminHomeScreen from './screens/AdminHomeScreen'



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
      <Route path='/rentsummary/:id' component={RentSummaryScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/profile' component={UserProfileScreen} />
      <Route path='/rate/:id' component={RenterRateCarScreen} />

      <Route path='/company/home' component={CompanyHomeScreen} />
      <Route path='/company/register' component={CompanyRegister} />
      <Route path='/company/login' component={CompanyLoginScreen} />
      <Route path='/company/userlist' component={CompanyUserListScreen} />
      <Route path='/company/carslist' component={CompanyCarListScreen} />
      <Route path='/company/car/create' component={CompanyCreateCarScreen} />
      <Route path='/company/car/:plate/edit' component={CompanyEditCarScreen} />
      <Route path='/company/orders' component={CompanyOrderListScreen} />
      <Route path='/company/profile' component={CompanyProfileScreen} />
      <Route path='/company/renter/rate/:id' component={CompanyRateRenterScreen} />

      <Route path='/admin/home' component={AdminHomeScreen} />
      <Route path='/admin/carslist' component={AdminListCarsScreen} />
      <Route path='/admin/renterslist' component={AdminListRentersScreen} />
      <Route path='/admin/companieslist' component={AdminListCompaniesScreen} />
      <Route path='/admin/orderslist' component={AdminListOrdersScreen} />
      <Route path='/admin/login' component={AdminLoginScreen} />

      <Footer />
    </Router>
  );
}

export default App;
