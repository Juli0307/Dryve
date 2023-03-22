import styled from 'styled-components';
import { style } from 'styled-system';

export const TopbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1430px;

  background-color: ${(props) => props.theme['white-two']};
  color: #fff;
  height: 70px;

  @media (max-width: 2000px) {
    align-items: flex-start;
  }
`;

export const TopbarLogo = styled.div`
  margin-left: 110px !important;
  margin-top: 20px;
  margin-bottom: 15px;
  display: flex;
  gap: 7px;
`;

export const LogoBackoffice = styled.div`
  margin-left: 0px;
  margin-top: 16px !important;
  font-family: Roboto;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #a5abb7;
  display: flex;
`;

export const BellIcon = styled.div`
  object-fit: contain;
  opacity: 0.3;
  color: ${(props) => props.theme['bright-blue']};
  margin-right: 34px;
  margin-top: 26px;
`;

export const SearchIcon = styled.div`
  object-fit: contain;
  opacity: 0.3;
  color: ${(props) => props.theme['black-87']};
  display: flex;
  margin-left: 1025px;
  margin-top: 26px;
  gap: 7px;
`;
