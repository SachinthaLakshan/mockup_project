import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />
        <ToastContainer />
        <section className="home-section">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/welcome" component={Welcome} />
          </Switch>
        </section>
      </div>
    </BrowserRouter>
  );
}

export default App;
