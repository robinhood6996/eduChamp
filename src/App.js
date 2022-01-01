import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
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
