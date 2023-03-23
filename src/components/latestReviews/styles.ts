import styled from 'styled-components';
import { Select } from 'antd';
import { Row } from 'react-grid-system';

export const ScrollbarContainer = styled.div`
  overflow-x: scroll;
`;

export const TableBody = styled.div`
  height: 500px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 20px;
`;

export const CustomRow = styled(Row)`
  padding: 20px 0;
  height: 100px;
`;

export const TitleTable = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 1.71;
  letter-spacing: 0.1px;
  color: ${(props) => props.theme['black-87']};
  align-items: flex-start;
`;

export const ImageCar = styled.span`
  width: 80px;
  height: 60px;
  border-radius: 4px;

  border-radius: 4px;
  border: solid 1px #e0e0e0;
  align-items: right;
  display: flex;
`;

export const ItemPlate = styled.span`
  margin-top: 4px;
  align-items: center;
  display: flex;

  font-size: 10px;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 0.33px;
  color: ${(props) => props.theme.steel};
`;

export const ListWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  padding: 15px 20px;
  border: 1px solid rgba(0, 0, 0, 0.12);
`;

export const ListItem = styled.div`
  background-color: ${(props) => props.theme['white-two']};
  padding: 0px;
  display: grid;
  grid-template-columns: 6fr 2fr 4fr;
  grid-gap: 20px;
`;

export const ListColumn = styled.div<{
  width?: string;
  align?: 'initial' | 'center' | 'end';
}>`
  display: flex;
  width: ${({ width }) => width};
  text-align: ${({ align }) => align};
  margin-bottom: 19px;
`;

export const ListHeader = styled(ListItem)`
  font-size: 10px;
  font-weight: 500;
  line-height: 1.6;
  letter-spacing: 1.5px;
`;

export const ItensContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #e0e0e0;
`;

export const SeeAllLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  padding: 0 16px;
  height: 20px;

  &:hover {
    cursor: pointer;
  }
`;

export const PricingContainer = styled.div`
  margin: auto;
  width: 180px;
  padding: 7px 17px;
  white-space: nowrap;
  border-radius: 13px;
  background-color: ${(props) => props.theme['ice-blue']};
`;
