import styled from 'styled-components';

export const SidebarHeader = styled.div`
  padding: 1rem;
  background-color: #fefefe;
  border: 0.5px solid #fefefe;
  border-bottom-color: #fefefe;
  display: flex;
  border-top: 10rem;
`;

export const SidebarBody = styled.div`
  padding: 2rem;
  display: grid;
  gap: 1rem;
  color: #acb0b7 !important;

  a:-webkit-any-link {
    color: ${(props) => props.theme['black-87']};
    width: 18px;
    opacity: 0.3;
    align-items: center;
    cursor: pointer;

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

  @media (max-width: 576px) {
    width: 100%;
  }
`;

export const SidebarButton = styled.button`
  position: absolute;
  bottom: 20px;
  left: 25px;
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
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: 0.1px;
  color: ${(props) => props.theme['black-87']};
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme['bright-blue']};
  }
`;

export const SidebarDescriptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
