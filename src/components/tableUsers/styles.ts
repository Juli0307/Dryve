import styled from 'styled-components';
import { Checkbox, Button } from 'antd';

export const UsersContainer = styled.div`
  width: 1200px;
  height: 760px;
  position: absolute;
  margin-top: 30px;
  font-size: 12px;
  margin-left: 110px;
`;

export const customTableStyle = styled.div`
  background-color: #fff;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1.5px;
`;

export const StyledCheckbox = styled(Checkbox)`
  color: red;
  .ant-checkbox-inner {
    border-color: red;
  }
  .ant-checkbox-checked .ant-checkbox-inner {
    background-color: red;
  }
`;

export const SearchBarWrapper = styled.div`
  display: flex;
`;
export const SearchInput = styled.input`
  width: 372px;
  height: 36px;
  padding: 8px;
  border: none;
  border-bottom: 2px solid #ccc;
  margin-left: 110px;
  flex-grow: 1;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  background-color: #1890ff;
  color: white;
  border: none;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #40a9ff;
  }
`;

export const ButtonAdd = styled(Button)`
  background-color: ${(props) => props.theme['blue-violet']};
  color: ${(props) => props.theme['white-two']};
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-family: 'Inter';
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  text-align: center;
  cursor: pointer;

  width: 130px;
  height: 36px;

  margin-left: 1180px;

  &:hover {
    color: ${(props) => props.theme['white-two']};
  }
`;

export const AlingContainer = styled.div`
  display: flex;
`;
