// @ts-nocheck
import { AvatarProps, IntentionContainer, ListContainer } from './styles';
import { List } from 'antd';
import React from 'react';
import Chevrolet from '../../assets/Chevrolet.jpg';
import Hyundai from '../../assets/Hyundai.jpg';
import Jeep from '../../assets/Jeep.jpg';
import Nissan from '../../assets/Nissan.jpg';
import Wolks from '../../assets/Wolks.jpg';
import Text from '../Text';
import Space from '../Space';

const data = [
  {
    title: 'HB20',
    picture: Hyundai,
    content: 197,
  },
  {
    title: 'Onix',
    picture: Chevrolet,
    content: 183,
  },
  {
    title: 'Renegade',
    picture: Jeep,
    content: '125',
  },
  {
    title: 'T-Cross',
    picture: Wolks,
    content: '109',
  },
  {
    title: 'Kicks',
    picture: Nissan,
    content: '86',
  },
];

const CustomHeader = () => {
  return (
    <div>
      <Space mL={20} width="100%">
        <Text
          fontSize="14px"
          fontWeight="500"
          component="span"
          textAlign="initial"
          color="black-87"
        >
          Top intenções de compra
        </Text>
      </Space>
    </div>
  );
};

export const IntentionTable: React.FC = () => {
  return (
    <IntentionContainer>
      <CustomHeader />
      <ListContainer
        itemLayout="horizontal"
        bordered={false}
        size="large"
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<AvatarProps src={item.picture} />}
              title={item.title}
            />
            <div>{item.content}</div>
          </List.Item>
        )}
      />
    </IntentionContainer>
  );
};
