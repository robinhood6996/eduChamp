
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Pages/Form/LogIn/LogIn';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Pages/Form/Register/Register';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import AllCourse from './Pages/AllCourse/AllCourse';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import ContactUs from './Pages/ContactUs/ContactUs';
import SingleCourse from './Pages/SingleCourse/SingleCourse';
import Blogs from './Pages/Blogs/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import MakeAdmin from './Pages/Dashboard/Admin/MakeAdmin/MakeAdmin';
import Checkout from './Pages/Checkout/Checkout/Checkout';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/allCourse" element={<AllCourse />} />
          <Route path="/course" element={<SingleCourse />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/makeAdmin" element={<MakeAdmin />} />
          <Route path="/checkOut" element={<Checkout />} />
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
