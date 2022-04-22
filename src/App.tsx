import { SignIn } from "./pages/SignIn";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Menu from './pages/Menu';
import Extra from './components/Extra';
import Profile from './pages/Profile';
import { Registration } from "./pages/Registration";
import Faq from "./pages/Faq";
import ContactUs from "./pages/ContactUs";
import CashIn from "./pages/Cash In Request/CashIn";
import CashOut from "./pages/Cash Out Reqeust/CashOut";
import Merchants from "./pages/Merchants/Merchants";
import TransactionHistory from "./pages/Transaction History/TransactionHistory";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/Login' element={<SignIn />}>
            <Route path='registration' element={<Registration />} />
          </Route>
          <Route path='/' element={<Menu />}>
            <Route path='profile' element={<Profile />}/>            
            <Route path='cashIn' element={<CashIn />} />
            <Route path='cashOut' element={<CashOut />} />
            <Route path='transactionHistory' element={<TransactionHistory />} />
            <Route path='merchants' element={<Merchants />} />
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
