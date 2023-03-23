import React from 'react';
import * as echarts from 'echarts';
import ReactECharts from 'echarts-for-react';
import { GraphicContainer } from './styles';

import Text from '../Text';

const graphicData = [
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
];

const CustomTitle = () => {
  return (
    <Text
      fontSize="14px"
      component="h4"
      fontWeight="500"
      textAlign="initial"
      color="black-87"
    >
      Preços - Dryve x KBB
    </Text>
  );
};

export const GraphicIndex: React.FC = () => {
  const options = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      icon: 'circle',
      top: 'center',
      right: '0',
      formatter: (name: string) =>
        `${name} (${graphicData.find((info) => info?.name === name)?.value}%)`,
    },
    series: [
      {
        name: 'Porcentagem',
        type: 'pie',
        radius: ['60%', '70%'],
        center: ['30%', '50%'],
        label: {
          show: false,
          position: 'center',
        },

        labelLine: {
          show: false,
        },
        data: graphicData,
      },
    ],
  };

  return (
    <div>
      <GraphicContainer>
        <CustomTitle />
        <ReactECharts
          echarts={echarts}
          option={options}
          style={{
            width: '100%',
            height: '186px',
            transform: 'translateX(-10%)',
          }}
        ></ReactECharts>
      </GraphicContainer>
    </div>
  );
};
