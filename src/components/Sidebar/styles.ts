import styled from 'styled-components';

export const SidebarHeader = styled.div`
  padding: 1rem;
  background-color: #fefefe;
  border: 0.5px solid #fefefe;
  border-bottom-color: #fefefe;
  display: flex;
  border-top: 10rem;
`;

export const SidebarBody = styled.div<{ closed?: boolean }>`
  display: grid;
  padding: 0 ${(props) => (props.closed ? '30px' : '15px')};
  color: #acb0b7 !important;

  a {
    color: ${(props) => props.theme['black-87']};
    width: 18px;
    opacity: 0.3;
    align-items: center;
    cursor: pointer;
    height: 40px;
    transition: width 0.3s ease-in-out;
    &:hover {
      color: ${(props) => props.theme['bright-blue']};
      opacity: 1;
    }
  }
`;

export const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '240px' : '80px')};
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  z-index: 1;
  transition: width 0.3s ease-in-out;
  box-shadow: 1px 0 0 0 #e0e0e0;

  a {
    text-decoration: none;
  }
`;

export const SidebarButton = styled.button<{ isOpen?: boolean }>`
  position: absolute;
  bottom: 20px;
  left: ${(props) => (props?.isOpen ? 'calc(100% - 40px)' : '25px')};
  z-index: 2;
  background: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${(props) => props.theme['black-87']};
  opacity: 0.3;

  &:hover {
    color: ${(props) => props.theme['bright-blue']};
    opacity: 1;
  }
`;

export const SidebarContent = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? '240px' : '80px')};
  height: 100%;
  background-color: ${(props) => props.theme['white-two']};
  transition: width 0.3s ease-in-out;
`;

export const SidebarDescription = styled.div`
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme['bright-blue']};
  }
`;

export const SidebarIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
  border: 1px solid transparent;
  padding: 0 15px;

  & > div {
    width: 30px;
  }

  &:hover {
    color: ${(props) => props.theme['bright-blue']};
    border: ${(props) => `1px solid ${props.theme['bright-blue']}`};
    background-color: ${(props) => props.theme['ice-blue']};
  }
`;
export const LogoffContainer = styled.div`
  align-items: center;
  display: grid;
  cursor: pointer;
`;

export const IconHeader = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;
  letter-spacing: 1.5px;
  gap: 5px;
`;
