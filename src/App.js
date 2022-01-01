import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    </div>
  );
}

export default App;
