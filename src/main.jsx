import reactDom from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Sales from './pages/Sales';
import Clients from './pages/Clients';
import 'bootstrap/scss/bootstrap.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.scss';
import NavbarNav from './components/NavbarNav';

const app = (
  <Router>
    <div className="flex">
      <Sidebar />
      <div className="content w-100">
        <NavbarNav />
        <Routes>
          <Route path="/" exact={true} element={<Home />} />
          <Route path="/sales" exact={true} element={<Sales />} />
          <Route path="/clients" exact={true} element={<Clients />} />
        </Routes>
      </div>
    </div>
  </Router>
);
const container = document.getElementById('root');

reactDom.render(app, container);
