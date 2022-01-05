
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
import DashboardHome from './Pages/Dashboard/DashboardHome/DashboardHome';
import EnrolledAllCourse from './Pages/Dashboard/EnrolledAllCourse/EnrolledAllCourse';
import AddCourse from './Pages/Form/AddCourse/AddCourse';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AdminRoute from './Pages/AdminRoute/AdminRoute';
import AdminCourses from './Pages/Dashboard/AllCourse/AdminCourses';
import UserCourses from './Pages/Dashboard/UserCouses/UserCourses';

function App() {
  return (
    <div className="body">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="/course" element={<>
            <Navigation></Navigation>
            <AllCourse />
            <Footer></Footer>
          </>} />
          <Route path="/course/:id" element={<SingleCourse />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/checkout/:id" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} >
            <Route path="/dashboard/makeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>} />
            <Route path="/dashboard/enrolledAllCourse" element={<AdminRoute><EnrolledAllCourse /></AdminRoute>} />
            <Route path="/dashboard/addCourse" element={<AdminRoute><AddCourse /></AdminRoute>} />
            <Route path="/dashboard/allCourse" element={<AdminRoute><AdminCourses /></AdminRoute>} />
            <Route path="/dashboard/mycourse" element={<UserCourses />} />

          </Route>

          <Route path="/checkOut" element={<PrivateRoute></PrivateRoute>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
