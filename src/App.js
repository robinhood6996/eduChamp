import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Pages/Form/LogIn/LogIn';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Pages/Form/Register/Register';
import Home from './Pages/Home/Home/Home'
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Shared/Footer/Footer';
import AllCourse from './Pages/AllCourse/AllCourse';

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
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
