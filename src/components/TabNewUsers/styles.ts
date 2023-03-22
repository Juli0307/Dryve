import styled from 'styled-components';
import { Input, Cascader } from 'antd';

export const TabTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: ${(props) => props.theme['black-87']};
`;
export const TabContainer = styled.div`
  width: 1200px;
  height: 684px;
  background-color: ${(props) => props.theme['white-two']};
  padding: 2px 0 97px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  margin-left: 110px;
  margin-top: 68px;
`;

export const CustomLabel = styled.div`
  display: inline-block;
  text-align: center;
  width: 360px;
  font-family: 'Inter', sans-serif;
`;

export const NameContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 40px;
  margin-top: 30px;
`;

export const InputName = styled(Input)`
  width: 262px;
  height: 56px;
`;

export const InputEmail = styled(Input)`
  width: 540px;
  height: 56px;
`;

export const EmailContainer = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`;

export const InputPhone = styled(Input)`
  width: 262px;
  height: 56px;
`;

export const PhoneContainer = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`;

export const InputCEP = styled(Input)`
  width: 262px;
  height: 56px;
`;

export const CEPContainer = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`;

export const InputAdress = styled(Input)`
  width: 540px;
  height: 56px;
`;

export const AdressContainer = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`;

export const AdressDetailsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 40px;
  margin-top: 15px;
`;

export const InputAdressDetails = styled(Input)`
  width: 262px;
  height: 56px;
`;

export const InputNeighborhood = styled(Input)`
  width: 540px;
  height: 56px;
`;

export const NeighborhoodContainer = styled.div`
  margin-left: 40px;
  margin-top: 15px;
`;

export const CityContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-left: 40px;
  margin-top: 15px;
`;

export const InputCity = styled(Input)`
  width: 262px;
  height: 56px;
`;

export const CascaderState = styled(Cascader)`
  width: 262px;
  height: 56px;
`;

export const FooterContainer = styled.div`
  width: 1198px;
  height: 75px;
  margin-left: 110px;
  background-color: ${(props) => props.theme['ice-blue']};
`;
