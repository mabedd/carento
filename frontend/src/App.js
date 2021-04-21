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
import RenterFeedbackScreen from './screens/RenterFeedbackScreen'

//Company View
import CompanyHomeScreen from './screens/CompanyHomeScreen'
import CompanyRegister from './screens/CompanyRegister'
import CompanyUserListScreen from './screens/CompanyUserListScreen'
import CompanyUserEditScreen from './screens/CompanyUserEditScreen'
import CompanyCarListScreen from './screens/CompanyCarListScreen'
import CompanyCreateCarScreen from './screens/CompanyCreateCarScreen'
import CompanyEditCarScreen from './screens/CompanyEditCarScreen'
import CompanyOrderListScreen from './screens/CompanyOrderListScreen'
import CompanyProfileScreen from './screens/CompanyProfileScreen'
import CompanyLoginScreen from './screens/CompanyLoginScreen'

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
      <Route path='/offers' component={OffersScreen} /> {/** fetch from DB */}
      <Route path='/contactus' component={ContactScreen} /> {/** Send by email */}
      <Route path='/browse' component={BrowseCarsScreen} />{/** fetch from DB*/}
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/rentsummary' component={RentSummaryScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/profile' component={UserProfileScreen} />
      <Route path='/rent/feedback' component={RenterFeedbackScreen} /> {/** TODO: add rent id */}

      <Route path='/company/home' component={CompanyHomeScreen} />
      <Route path='/company/register' component={CompanyRegister} />
      <Route path='/company/login' component={CompanyLoginScreen} />
      <Route path='/company/userlist' component={CompanyUserListScreen} />{/** TypeError: Cannot read property 'map' of undefined */}
      <Route path='/company/user/:id/edit' component={CompanyUserEditScreen} />{/**!! */}
      <Route path='/company/carslist' component={CompanyCarListScreen} />{/** TypeError: Cannot read property 'map' of undefined */}
      <Route path='/company/car/create' component={CompanyCreateCarScreen} />{/** Cannot read property 'token' of undefined */}
      <Route path='/company/car/:plate/edit' component={CompanyEditCarScreen} />
      <Route path='/company/orders' component={CompanyOrderListScreen} />{/** TypeError: Cannot read property 'map' of undefined*/}
      <Route path='/company/profile' component={CompanyProfileScreen} />{/** Not fetching from DB */}

      <Route path='/admin/home' component={AdminHomeScreen} />
      <Route path='/admin/carslist' component={AdminListCarsScreen} /> {/** TypeError: Cannot read property 'map' of undefined */}
      <Route path='/admin/renterslist' component={AdminListRentersScreen} />{/** 404 */}
      <Route path='/admin/companieslist' component={AdminListCompaniesScreen} />{/** 404: */}
      <Route path='/admin/orderslist' component={AdminListOrdersScreen} />{/** 404 */}
      <Route path='/admin/login' component={AdminLoginScreen} />

      <Footer />
    </Router>
  );
}

export default App;
