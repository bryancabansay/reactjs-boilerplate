import { SignIn } from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu/Menu';
import Extra from './components/Extra';
import Profile from './pages/Profile/Profile';
import { Registration } from "./pages/Registration";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import CashIn from "./pages/CashInRequest/CashIn";
import CashOut from "./pages/CashOutPayments/CashOut";
import Merchants from "./pages/Merchants/Merchants";
import TransactionHistory from "./pages/Transaction History/TransactionHistory";
import ChangePassword from "./pages/Profile/ChangePassword";
import AddMerchant from "./pages/Merchants/AddMerchant";
import MerchantDetails from "./pages/Merchants/MerchantDetails";
import EditMerchant from "./pages/Merchants/EditMerchant";
import MerchantMembers from "./pages/Members/MerchantMembers/MerchantMembers";
import UserList from "./pages/Members/UserRegistration/UserList";
import UserDetails from "./pages/Members/UserRegistration/UserDetails";
import ViewMemberDetails from "./pages/Members/MerchantMembers/ViewMemberDetails";
import AddMember from "./pages/Members/MerchantMembers/AddMember";
import SuperAdmins from "./pages/Members/SuperAdmin/SuperAdmins";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<SignIn />}/>
          <Route path='/Registration' element={<Registration />} />
          <Route path='/' element={<Menu />}>
            <Route path='profile' element={<Profile />}>
              <Route path='/profile/changePassword' element={<ChangePassword />} />
            </Route>            
            <Route path='cashIn' element={<CashIn />} />
            <Route path='cashOut' element={<CashOut />} />
            <Route path='transactionHistory' element={<TransactionHistory />} />
            <Route path='merchants' element={<Merchants />}> 
              <Route path='addMerchant' element={<AddMerchant />}/>
              <Route path='viewMerchant' element={<MerchantDetails />} />
              <Route path='editMerchant' element={<EditMerchant />} />
            </Route>
            <Route path='superAdmins' element={<SuperAdmins />} />
            <Route path='merchantMembers' element={<MerchantMembers />} />
            <Route path='userList' element={<UserList/>}>
               
            </Route>
            <Route path='userDetails' element={<UserDetails/>}/>
            <Route path='viewMemberDetails' element={<ViewMemberDetails/>}/>
            <Route path='addMember' element={<AddMember/>}/> 
            <Route path='extra' element={<Extra />}/>
            <Route path='faq' element={<Faq />}/>
            <Route path='contactUs' element={<ContactUs />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
