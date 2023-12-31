import { HeaderContainer } from './styles';
import { Timer, Scroll } from 'phosphor-react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Logo">
        <img src={logo} alt="Logo Image" />
      </NavLink>
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="History page">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
