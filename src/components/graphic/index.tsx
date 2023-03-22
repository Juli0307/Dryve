import React, { useEffect } from 'react';
import * as echarts from 'echarts';
import { GraphicAling, GraphicContainer } from './styles';
import ReactECharts from 'echarts-for-react';
import { left } from 'styled-system';

export const GraphicIndex: React.FC = () => {
  const options = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      orient: 'vertical',
      right: 0,
      top: 'center',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        fontSize: 10, // tamanho da fonte dos itens da legenda
      },
    },
    series: [
      {
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'right',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 10,
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 60, name: 'Na média', itemStyle: { color: '#1070ca' } },
          {
            value: 25,
            name: 'Acima da média',
            itemStyle: { color: '#ec4c47' },
          },
          {
            value: 15,
            name: 'Abaixo da média',
            itemStyle: { color: '#f7d154' },
          },
        ],
      },
    ],
  };

  return (
    <div>
      <GraphicContainer>
        <ReactECharts echarts={echarts} option={options}></ReactECharts>
      </GraphicContainer>
    </div>
  );
};
