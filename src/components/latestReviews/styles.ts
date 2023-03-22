import styled from 'styled-components';
export const ReviewContainer = styled.div`
  max-width: 45.6rem;
  height: 40rem;
  background-color: white;
  display: flex;
  margin-top: 12rem;
  margin-left: 130px;
  border-radius: 4px;
  padding: 0;
`;

export const ImageCar = styled.span`
  width: 80px;
  height: 60px;
  border-radius: 4px;

  margin-top: 3rem;
  border-radius: 4px;
  border: solid 1px #e0e0e0;
  align-items: right;
  display: flex;
`;

export const BrandName = styled.span`
  align-items: center;
  display: flex;
  margin-left: 8rem;
  margin-top: 97px;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${(props) => props.theme['dark-blue-grey']};
`;

export const ModelName = styled.div`
  align-items: center;
  display: flex;
  margin-right: 8rem;
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: normal;
  color: ${(props) => props.theme['dark-blue-grey']};
`;

export const ItemPlate = styled.div`
  align-items: center;
  display: flex;
  margin-left: 8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.33px;
  color: ${(props) => props.theme.steel};
`;

export const FuelType = styled.div`
  align-items: center;
  display: flex;
  margin-left: 8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.33px;
  color: ${(props) => props.theme.steel};
`;

export const ModelYear = styled.div`
  align-items: center;
  display: flex;

  margin-left: 8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.33px;
  color: ${(props) => props.theme.steel};
`;

export const TransmissionType = styled.div`
  align-items: center;
  display: flex;
  margin-left: 8rem;
  font-family: 'Roboto', sans-serif;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.33px;
  color: ${(props) => props.theme.steel};
`;

export const ListWrapper = styled.div`
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border-top: 97px;
`;

export const ListItem = styled.div`
  background-color: ${(props) => props.theme['white-two']};
  padding: 0px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
`;

export const ListHeader = styled(ListItem)`
  font-weight: bold;
`;

export const DataCar = styled.div``;

export const ValueCar = styled.div``;

export const StatusCar = styled.div``;

export const Line = styled.div`
  width: 100px;
  height: 1px;
  background-color: #ccc;
`;

export const AlingContainer = styled.div`
  align-items: center;

  display: flex;
`;

export const ItensContainer = styled.div`
  align-items: center;
`;

export const UppercaseWrapper = styled.div`
  text-transform: uppercase;
`;
