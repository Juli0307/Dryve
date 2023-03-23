import styled from 'styled-components';
import { style } from 'styled-system';

export const TopbarContainer = styled.div`
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  background-color: ${(props) => props.theme['white-two']};
  color: #fff;
  height: 70px;
`;

export const TopbarLogo = styled.div`
  margin-left: 80px !important;
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  gap: 7px;
`;

export const TopbarIconsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 28px;
`;

export const LogoBackoffice = styled.div`
  margin-left: 0px;
  margin-top: 16px !important;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  line-height: 1;
  letter-spacing: normal;
  color: #a5abb7;
  display: flex;
`;

export const BellIcon = styled.div`
  object-fit: contain;
  opacity: 0.3;
  color: ${(props) => props.theme['bright-blue']};
`;

export const SearchIcon = styled.div`
  object-fit: contain;
  opacity: 0.3;
  color: ${(props) => props.theme['black-87']};
`;
