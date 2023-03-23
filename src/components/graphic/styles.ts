import styled from 'styled-components';

export const GraphicContainer = styled.div`
  width: 100%;
  height: 226px;
  border-radius: 4px;
  padding: 20px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.theme['white-two']};
  margin-top: 30px;
`;
