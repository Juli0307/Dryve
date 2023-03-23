import styled from 'styled-components';

export const Card = styled.div`
  width: 100%;
  height: 110px;
  padding: 15px 20px 13px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.theme['white-two']};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Oval = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${(props) => props.theme['ice-blue']};
`;

export const Icons = styled.div`
  color: ${(props) => props.theme['bright-blue']};
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-left: 10px;
`;

export const FooterCard = styled.div`
  font-size: 11px;
  font-weight: normal;
  line-height: 1.45;
  letter-spacing: normal;
  display: flex;
`;
export const ArrowContainer = styled.div`
  width: 10px;
  height: 5px;
  color: ${(props) => props.theme['bright-blue']};
  margin-right: 10px;
  margin-top: 2px;
`;

export const Description = styled.div`
  color: ${(props) => props.theme['black-87']};
  opacity: 0.5;
  margin-top: 4px;
`;

export const PercentContainer = styled.div`
  margin-right: 5px;
  margin-top: 4px;
`;
