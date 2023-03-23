import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
`;

export const CatalogContainer = styled.div`
  width: calc(100%);
  height: 40rem;
  background-color: white;
  display: flex;
  border-radius: 4px;
  margin-top: 30px;
  padding: 0;
`;

export const GridContainer = styled.div`
  width: calc(100% - 60px);
  display: grid;
  grid-template-columns: 9fr 3fr;
`;
