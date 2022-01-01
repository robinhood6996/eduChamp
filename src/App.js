import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
<<<<<<< HEAD
import Home from './Pages/homePage/home/Home';
function App() {
  return (
    <div className="App">

      {/* ===================Home Page (মোঃ রাহাত ইসলাম ) ===============*/}

      <Home />

      {/* ========================== */}

      <div className="heading">
        <h1>Log In </h1>
      </div>
      <form action="">
        <input type="email" name='email' className='' placeholder='You Email' />
        <input type="password" name='password' className='' placeholder='Your Password' />
      </form>
=======
import LogIn from './Pages/Form/LogIn/LogIn';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Register from './Pages/Form/Register/Register';
function App() {
  return (
    <div className="">
      <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      </BrowserRouter>
>>>>>>> fbc46c433255f16619cbbc527c51e48a4f7a8182
    </div>
  );
}

export default App;
