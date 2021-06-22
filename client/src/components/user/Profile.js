import { Menu } from 'semantic-ui-react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <Menu>
    <NavLink to='/'>
      <Menu.Item>
        Home
      </Menu.Item>
    </NavLink>
    <NavLink to='/profile'>
      <Menu.Item>
        {/* will put username */}
        username
      </Menu.Item>
    </NavLink>
  </Menu>
)

export default Navbar;