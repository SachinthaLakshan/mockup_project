import './App.css';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar />

        <section class="home-section">
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
