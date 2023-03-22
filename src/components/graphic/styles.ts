import styled from 'styled-components';
import ReactECharts from 'echarts-for-react';

export const GraphicContainer = styled.div`
  width: 387px;
  height: 226px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.theme['white-two']};
  margin-top: 30px;
  margin-left: 900px;
`;

export const GraphicAling = styled(ReactECharts)`
  display: flex;
  margin-left: 300px;
  margin-bottom: 100px;
  position: absolute;
`;
