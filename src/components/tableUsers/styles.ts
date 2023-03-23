import styled from 'styled-components';
import { Checkbox, Button } from 'antd';
import { ThemeProps } from '../../styles/themes/default';

export const UsersContainer = styled.div`
  width: 100%;
  height: 760px;
  margin-top: 30px;
  font-size: 12px;
`;

export const customTableStyle = styled.div`
  background-color: #fff;
  font-size: 10px;
  font-weight: 500;
  font-family: 'Inter';
  font-size: 10px;
  font-weight: 500;
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
  margin-left: 80px;
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
  border: none;
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 10px 20px;
  border-radius: 4px;
  height: 36px;

  &:hover {
    cursor: pointer;
  }
`;

export const AlingContainer = styled.div`
  display: flex;
`;

export const ConfirmationContainer = styled.div`
  width: 200px;
`;

export const FiltersActionContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FilterButtonContainer = styled.div`
  background-color: ${(props) => props.theme['white-two']};
  padding: 0 10px;
  height: 36px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: solid 1px rgba(0, 0, 0, 0.12);

  &:hover {
    cursor: pointer;
  }
`;

export const StatusBadge = styled.div<{ backgroundColor: ThemeProps }>`
  width: 80px;
  margin-left: auto;
  height: 26px;
  border-radius: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme[props.backgroundColor]};
`;

export const TableUsersContainer = styled.div`
  padding: 30px;
`;

export const ActionsContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;
