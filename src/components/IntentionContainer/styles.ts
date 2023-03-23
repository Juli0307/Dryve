import styled from 'styled-components';
import { Avatar, List } from 'antd';

export const IntentionContainer = styled.div`
  width: 100%;
  height: 384px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  margin-top: 30px;
  background-color: ${(props) => props.theme['white-two']};
  padding: 24px 0;

  h4 {
    margin: none !important;
  }
`;

export const AvatarProps = styled(Avatar)`
  background-image: ${(props) => props.theme['white-two']};
`;

export const ListContainer = styled(List)`
  margin-top: 15px;

  .ant-list-item-meta-content {
    display: flex;
    align-items: center;
    transform: translateY(4px);
  }
`;
