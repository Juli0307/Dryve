import {
  SidebarDescription,
  SidebarDescriptionContainer,
  SidebarHeader,
} from './styles';
import { SidebarBody } from './styles';
import { IoMdHome } from 'react-icons/io';
import { RiUser3Fill } from 'react-icons/ri';
import { IoMdCar } from 'react-icons/io';
import { TbVectorTriangle } from 'react-icons/tb';
import { Avatar } from '../avatar';
import { NavLink } from 'react-router-dom';
import { SidebarContainer } from './styles';
import { SidebarButton } from './styles';
import { SidebarContent } from './styles';
import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { useState } from 'react';

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <SidebarContainer isOpen={isOpen}>
        <SidebarContent isOpen={isOpen}>
          <>
            {isOpen ? (
              <div>
                <SidebarHeader>
                  <Avatar />
                </SidebarHeader>
                <SidebarBody>
                  <NavLink to="/">
                    <IoMdHome size={24} />{' '}
                    <SidebarDescription>Início</SidebarDescription>
                  </NavLink>

                  <NavLink to="/users">
                    <RiUser3Fill size={22} />
                    <SidebarDescription>Clientes</SidebarDescription>
                  </NavLink>

                  <NavLink to="">
                    <IoMdCar size={24} />
                    <SidebarDescription>Veículos</SidebarDescription>
                  </NavLink>

                  <NavLink to="">
                    <TbVectorTriangle size={22} />
                    <SidebarDescription>Triangulação</SidebarDescription>
                  </NavLink>

                  <NavLink to="">
                    <MdAccountBalanceWallet size={22} />
                    <SidebarDescription>Financeiro</SidebarDescription>
                  </NavLink>
                </SidebarBody>
              </div>
            ) : (
              <div>
                <SidebarHeader>
                  <Avatar />
                </SidebarHeader>

                <SidebarBody>
                  <NavLink to="/">
                    <IoMdHome size={24} />
                  </NavLink>

                  <NavLink to="/users">
                    <RiUser3Fill size={22} />
                  </NavLink>

                  <NavLink to="">
                    <IoMdCar size={24} />
                  </NavLink>

                  <NavLink to="">
                    <TbVectorTriangle size={22} />
                  </NavLink>

                  <NavLink to="">
                    <MdAccountBalanceWallet size={22} />
                  </NavLink>
                </SidebarBody>
              </div>
            )}
          </>
        </SidebarContent>
      </SidebarContainer>
      <SidebarButton onClick={handleToggle}>
        {isOpen ? <BsBoxArrowLeft /> : <BsBoxArrowRight />}
      </SidebarButton>
    </>
  );
};
