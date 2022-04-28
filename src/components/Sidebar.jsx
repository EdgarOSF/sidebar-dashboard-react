import { NavLink } from 'react-router-dom';
import * as FaIcon from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar bg-light">
      <ul>
        <li>
          <NavLink exact to="/" className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active">
            <FaIcon.FaHome className="me-2" />
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/sales" className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active">
            <FaIcon.FaRegChartBar className="me-2" />
            Ventas
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/clients" className="text-dark rounded py-2 w-100 d-inline-block px-3" activeClassName="active">
            <FaIcon.FaUsers className="me-2" />
            Clientes
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
