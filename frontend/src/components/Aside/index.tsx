import React, { useState } from 'react';
import { MdDashboard, MdExitToApp } from 'react-icons/md';
import Toggle from '../Toggle';

import { Link } from 'react-router-dom';
import MenuLinks from '../../utils/menu';

import { MdClose, MdMenu } from 'react-icons/md';

import { MdSchool } from 'react-icons/md';

import { useContextAuth } from '../../hooks/AuthContext';

import * as S from './styles';

interface ILinks {
  name: string;
  path: string;
  icon: React.ReactNode;
  isAdmin: boolean;
}

interface IMenus {
  name: string;
  path: string;
  icon: JSX.Element;
  isAdmin: boolean;
}
const Aside: React.FC = () => {
  const [menus, setMenus] = React.useState<IMenus[]>();
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);
  const { user } = useContextAuth();

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  React.useEffect(() => {
    if (user) {
      let filtered = MenuLinks.filter((menu) => menu.isAdmin === user.isAdmin);
      setMenus(filtered);
    }
  }, [user]);

  return (
    <S.Container menuIsOpen={toggleMenuIsOpened}>
      <S.Header>
        <S.ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </S.ToggleMenu>

        <MdSchool size={40} color="#e16e0e" />
        <S.Title>School Academy</S.Title>
      </S.Header>

      <S.MenuContainer>
        <S.MenuItemLink>
          <Link to="/">
            <MdDashboard />
            Dashboard
          </Link>
        </S.MenuItemLink>
        {menus &&
          menus.length > 0 &&
          menus.map(({ name, path, icon, isAdmin }: ILinks, index) => {
            return (
              <S.MenuItemLink key={index}>
                <Link to={path}>
                  {icon}
                  {name}
                </Link>
              </S.MenuItemLink>
            );
          })}
        <S.MenuItemLink>
          <Link to="/exit">
            <MdExitToApp />
            Sair
          </Link>
        </S.MenuItemLink>
      </S.MenuContainer>

      <S.ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle />
      </S.ThemeToggleFooter>
    </S.Container>
  );
};

export default Aside;
