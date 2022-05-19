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
import UserDetails from "./pages/Members/UserRegistration/UserDetails";
import ViewMemberDetails from "./pages/Members/MerchantMembers/ViewMerchantMember";
import AddMember from "./pages/Members/MerchantMembers/AddMerchantMember";
import SuperAdmins from "./pages/Members/SuperAdmin/SuperAdmins";
import PayBills from "./pages/PayBills/PayBills";
import EditAccountDetails from "./pages/Profile/EditAccountDetails";
import AddSuperAdmin from "./pages/Members/SuperAdmin/AddSuperAdmin";
import UpdateSuperAdmin from "./pages/Members/SuperAdmin/UpdateSuperAdmin";
import ViewSuperAdmin from "./pages/Members/SuperAdmin/ViewSuperAdmin";
import VerifiedUser from "./pages/Members/UserRegistration/VerifiedUser";
import PendingVerificationUser from "./pages/Members/UserRegistration/PendingVerificationUser";
import DeclinedUser from "./pages/Members/UserRegistration/DeclinedUser";
import ComplianceOfficers from "./pages/Members/ComplianceOfficer/ComplianceOfficers";
import UpdateComplianceOfficer from "./pages/Members/ComplianceOfficer/UpdateComplianceOfficer";
import ViewComplianceOfficer from "./pages/Members/ComplianceOfficer/ViewComplianceOfficer";
import { ForgotPassword } from "./pages/Login/ForgotPassword";
import CashInRequestsReport from "./pages/Reports/CashInRequestsReport";
import CashOutPaymentsReport from "./pages/Reports/CashOutPaymentsReport";
import VolumeOfTransactionsReport from "./pages/Reports/VolumeOfTransactionsReport";
import AddMerchantMember from "./pages/Members/MerchantMembers/AddMerchantMember";
import UpdateMerchantMember from "./pages/Members/MerchantMembers/UpdateMerchantMember";
import ViewMerchantMember from "./pages/Members/MerchantMembers/ViewMerchantMember";

//INDEX Pages
import IndexMerchants from "./pages/Merchants/IndexMerchants";
import IndexProfile from "./pages/Profile/IndexProfile";
import IndexSuperAdmin from "./pages/Members/SuperAdmin/IndexSuperAdmin";
import IndexMerchantMember from "./pages/Members/MerchantMembers/IndexMerchantMember";
import IndexComplianceOfficer from "./pages/Members/ComplianceOfficer/IndexComplianceOfficer";
import IndexVerifiedUser from "./pages/Members/UserRegistration/IndexVerifiedUser";
import IndexPendingVerificationUser from "./pages/Members/UserRegistration/IndexPendingVerificationUser";
import IndexDeclinedUser from "./pages/Members/UserRegistration/IndexDeclinedUser";
import MerchantAdminProfile from "./pages/Profile/MerchantAdminProfile";
import CashInRequestMerchantAdmin from "./pages/CashInRequest/CashInRequestMerchantAdmin";


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
            <Route path='merchantAdminProfile' element={<MerchantAdminProfile/>}/>
            <Route path='changePassword' element={<ChangePassword />} />
            <Route path='editDetails' element={<EditAccountDetails />} />
          </Route>
          <Route path='cashIn' element={<CashIn />} />
          <Route path='cashInMerchantAdmin' element={<CashInRequestMerchantAdmin />}/>
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
          <Route path='complianceOfficers' element={<IndexComplianceOfficer/>}>
            <Route index element={<ComplianceOfficers/>}/>
            <Route path='updateComplianceOfficer' element={<UpdateComplianceOfficer/>}/>
            <Route path='viewComplianceOfficer' element={<ViewComplianceOfficer/>}/>
          </Route>
          <Route path='merchantMembers' element={<IndexMerchantMember />}>
            <Route index element={<MerchantMembers />} />
            <Route path='addMerchantMember' element={<AddMerchantMember/>} />
            <Route path='updateMerchantMember' element={<UpdateMerchantMember />} />
            <Route path='viewMerchantMember' element={<ViewMerchantMember />} />
          </Route>
          <Route path='verifiedUsers' element={<IndexVerifiedUser />}>
            <Route index element={<VerifiedUser />}/>
            <Route path='viewUserDetails' element={<UserDetails />}/>
          </Route>
          <Route path='pendingVerificationUsers' element={<IndexPendingVerificationUser />}>
            <Route index element={<PendingVerificationUser />}/>
            <Route path='viewUserDetails' element={<UserDetails />}/>
          </Route>
          <Route path='declinedUsers' element={<IndexDeclinedUser />}>
            <Route index element={<DeclinedUser />}/>
            <Route path='viewUserDetails' element={<UserDetails />}/>
          </Route>
          <Route path='cashInRequestsReport' element={<CashInRequestsReport/>} />
          <Route path='cashOutPaymentsReport' element={<CashOutPaymentsReport/>} />
          <Route path='volumeOfTransactionsReport' element={<VolumeOfTransactionsReport/>} />
          
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
