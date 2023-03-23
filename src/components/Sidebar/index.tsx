import {
  SidebarDescription,
  SidebarContainer,
  SidebarButton,
  SidebarHeader,
  SidebarContent,
  SidebarIcons,
  SidebarBody,
  IconHeader,
  LogoffContainer,
} from './styles';
import { IoMdHome } from 'react-icons/io';
import { RiUser3Fill } from 'react-icons/ri';
import { IoMdCar, IoIosPower } from 'react-icons/io';
import { TbVectorTriangle } from 'react-icons/tb';
import { Avatar } from '../Avatar';
import { NavLink } from 'react-router-dom';
import { BsBoxArrowRight, BsBoxArrowLeft } from 'react-icons/bs';
import { MdAccountBalanceWallet } from 'react-icons/md';
import { useState } from 'react';
import Text from '../Text';
import Space from '../Space';

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
                  <Space mL={15} />
                  <LogoffContainer>
                    <Space mT={5} />
                    <Text
                      component="h4"
                      fontSize="14px"
                      fontWeight="500"
                      color="black-87"
                    >
                      Juliana Oliveira
                    </Text>

                    <IconHeader>
                      <IoIosPower />{' '}
                      <Text
                        component="span"
                        fontSize="10px"
                        fontWeight="500"
                        color="black-87"
                      >
                        SAIR
                      </Text>
                    </IconHeader>
                  </LogoffContainer>
                </SidebarHeader>
                <SidebarBody>
                  <NavLink to="/" style={{ width: '100%' }}>
                    <SidebarIcons>
                      <div>
                        <IoMdHome size={24} />
                      </div>
                      <Text
                        component="span"
                        fontSize="14px"
                        fontWeight="500"
                        color="black-87"
                      >
                        Início
                      </Text>
                    </SidebarIcons>
                  </NavLink>

                  <NavLink to="/users" style={{ width: '100%' }}>
                    <SidebarIcons>
                      <div>
                        <RiUser3Fill size={22} />
                      </div>
                      <Text
                        component="span"
                        fontSize="14px"
                        fontWeight="500"
                        color="black-87"
                      >
                        Clientes
                      </Text>
                    </SidebarIcons>
                  </NavLink>

                  <NavLink to="" style={{ width: '100%' }}>
                    <SidebarIcons>
                      <div>
                        <IoMdCar size={24} />
                      </div>{' '}
                      <Text
                        component="span"
                        fontSize="14px"
                        fontWeight="500"
                        color="black-87"
                      >
                        Veículos
                      </Text>
                    </SidebarIcons>
                  </NavLink>

                  <NavLink to="" style={{ width: '100%' }}>
                    <SidebarIcons>
                      <div>
                        <TbVectorTriangle size={22} />
                      </div>
                      <SidebarDescription>
                        <Text
                          component="span"
                          fontSize="14px"
                          fontWeight="500"
                          color="black-87"
                        >
                          Triangulação
                        </Text>
                      </SidebarDescription>
                    </SidebarIcons>
                  </NavLink>

                  <NavLink to="" style={{ width: '100%' }}>
                    <SidebarIcons>
                      <div>
                        <MdAccountBalanceWallet size={22} />
                      </div>
                      <Text
                        component="span"
                        fontSize="14px"
                        fontWeight="500"
                        color="black-87"
                      >
                        Financeiro
                      </Text>
                    </SidebarIcons>
                  </NavLink>
                </SidebarBody>
              </div>
            ) : (
              <div>
                <SidebarHeader>
                  <Avatar />
                </SidebarHeader>

                <SidebarBody closed>
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
        <SidebarButton isOpen={isOpen} onClick={handleToggle}>
          {isOpen ? <BsBoxArrowLeft /> : <BsBoxArrowRight />}
        </SidebarButton>
      </SidebarContainer>
    </>
  );
};
