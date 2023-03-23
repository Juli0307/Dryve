import styled from 'styled-components';
import { Input, Cascader } from 'antd';
import { Row } from 'react-grid-system';

export const TabTitle = styled.h1`
  font-size: 20px;
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: 0.15px;
  color: ${(props) => props.theme['black-87']};
`;
export const TabContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme['white-two']};
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  margin-top: 22px;
`;

export const PositionInput = styled.div`
  padding-left: 40px;
  padding-bottom: 40px;
`;

export const CustomLabel = styled.div`
  display: inline-block;
  text-align: center;
  width: 360px;
`;

export const CustomInput = styled(Input)`
  height: 56px;
`;

export const CascaderState = styled(Cascader)`
  width: 262px;
  height: 56px;

  .ant-select-selector,
  .ant-select-selection-search,
  .ant-select-selection-search-input {
    height: 56px !important;
    align-items: center;
  }
`;

export const FooterContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: ${(props) => props.theme['ice-blue']};
  display: flex;
  gap: 5px;
`;

export const InputRow = styled(Row)`
  margin-top: 16px;
`;

export const ButtonSave = styled.button`
  background-color: ${(props) => props.theme['blue-violet']};
  border: none;
  display: flex;
  align-items: center;
  margin-left: 20px;
  margin-top: 20px;
  padding: 10px 48px;
  border-radius: 4px;
  height: 36px;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;

export const ButtonCancel = styled.button`
  background-color: ${(props) => props.theme['ice-blue']};
  color: ${(props) => props.theme['blue-violet']};
  border: none;
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 10px 48px;
  border-radius: 4px;
  height: 36px;
  width: 150px;

  &:hover {
    cursor: pointer;
  }
`;
