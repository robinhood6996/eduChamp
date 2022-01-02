import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from './Pages/Form/LogIn/LogIn';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Register from './Pages/Form/Register/Register';
<<<<<<< HEAD
import Home from './Pages/homePage/home/Home';
=======
import Home from './Pages/Home/Home/Home'
import Navigation from './Pages/Shared/Navigation/Navigation';
import Footer from './Pages/Home/Footer/Footer';
>>>>>>> 1a1cdbe5ee0754765cd24f44b1255f85e2cf1cc4

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
