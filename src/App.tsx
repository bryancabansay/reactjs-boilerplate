import { Login } from "./pages/Login/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

//PAGES
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
import ViewMemberDetails from "./pages/Members/MerchantMembers/ViewMerchantMember";
import AddMember from "./pages/Members/MerchantMembers/AddMerchantMember";
import SuperAdmins from "./pages/Members/SuperAdmin/SuperAdmins";
import PayBills from "./pages/PayBills/PayBills";
import EditAccountDetails from "./pages/Profile/EditAccountDetails";
import AddSuperAdmin from "./pages/Members/SuperAdmin/AddSuperAdmin";
import UpdateSuperAdmin from "./pages/Members/SuperAdmin/UpdateSuperAdmin";
import ViewSuperAdmin from "./pages/Members/SuperAdmin/ViewSuperAdmin";

//INDEX Pages
import IndexMerchants from "./pages/Merchants/IndexMerchants";
import IndexProfile from "./pages/Profile/IndexProfile";
import IndexSuperAdmin from "./pages/Members/SuperAdmin/IndexSuperAdmin";
import IndexMerchantMember from "./pages/Members/MerchantMembers/IndexMerchantMember";
import AddMerchantMember from "./pages/Members/MerchantMembers/AddMerchantMember";
import UpdateMerchantMember from "./pages/Members/MerchantMembers/UpdateMerchantMember";
import ViewMerchantMember from "./pages/Members/MerchantMembers/ViewMerchantMember";
import IndexUser from "./pages/Members/UserRegistration/IndexUser";
import { ForgotPassword } from "./pages/Login/ForgotPassword";
import CashInRequests from "./pages/Reports/CashInRequests";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/Registration' element={<Registration />} />
        <Route path='/' element={<Menu />}>
          <Route path='indexProfile' element={<IndexProfile />}>
            <Route index element={<Profile />} />
            <Route path='changePassword' element={<ChangePassword />} />
            <Route path='editDetails' element={<EditAccountDetails />} />
          </Route>
          <Route path='cashIn' element={<CashIn />} />
          <Route path='cashOut' element={<CashOut />} />
          <Route path='payBills' element={<PayBills />} />
          <Route path='transactionHistory' element={<TransactionHistory />} />
          <Route path='merchants' element={<IndexMerchants />}>
            <Route index element={<Merchants />}/>
            <Route path='addMerchant' element={<AddMerchant />} />
            <Route path='viewMerchant' element={<MerchantDetails />} />
            <Route path='editMerchant' element={<EditMerchant />} />
          </Route>
          <Route path='superAdmins' element={<IndexSuperAdmin />}>
            <Route index element={<SuperAdmins />}/>
            <Route path='addSuperAdmin' element={<AddSuperAdmin />}/>
            <Route path='updateSuperAdmin' element={<UpdateSuperAdmin />}/>
            <Route path='viewSuperAdmin' element={<ViewSuperAdmin />}/>
          </Route>
          <Route path='merchantMembers' element={<IndexMerchantMember />}>
            <Route index element={<MerchantMembers />} />
            <Route path='addMerchantMember' element={<AddMerchantMember/>} />
            <Route path='updateMerchantMember' element={<UpdateMerchantMember />} />
            <Route path='viewMerchantMember' element={<ViewMerchantMember />} />
          </Route>
          <Route path='users' element={<IndexUser />}>
            <Route index element={<UserList />}/>
            <Route path='viewUserDetails' element={<UserDetails />}/>
          </Route>
          <Route path='cashInRequests' element={<CashInRequests/>} />
          
          <Route path='userDetails' element={<UserDetails />} />
          <Route path='viewMemberDetails' element={<ViewMemberDetails />} />
          <Route path='addMember' element={<AddMember />} />
          <Route path='extra' element={<Extra />} />
          <Route path='faq' element={<Faq />} />
          <Route path='contactUs' element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
