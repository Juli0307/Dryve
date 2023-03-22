import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 110px;
`;

export const Card = styled.div`
  width: 387px;
  height: 110px;
  margin-right: 20px;
  margin-top: 30px;
  padding: 15px 20px 13px;
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: ${(props) => props.theme['white-two']};
`;

export const CardTitle = styled.div`
  opacity: 0.5;
  font-family: 'Inter', sans-serif;
  font-size: 10px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.6;
  letter-spacing: 1.5px;
  color: ${(props) => props.theme['black-87']};
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 34px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.06;
  letter-spacing: normal;
  color: ${(props) => props.theme['black-87']};
  margin-top: 6px;
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
  font-family: 'Inter', sans-serif;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: normal;
  display: flex;
`;
export const ArrowUp = styled.div`
  width: 10px;
  height: 5px;
  color: ${(props) => props.theme['bright-blue']};
  margin-right: 10px;
  margin-top: 2px;
`;

export const ArrowDown = styled.div`
  width: 10px;
  height: 5px;
  color: ${(props) => props.theme.coral};
  margin-right: 10px;
  margin-top: 2px;
`;

export const Description = styled.div`
  color: ${(props) => props.theme['black-87']};
  opacity: 0.5;
  margin-top: 4px;
`;

export const UpPercent = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: ${(props) => props.theme['blue-violet']};
  margin-right: 5px;
  margin-top: 4px;
`;

export const DownPercent = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  letter-spacing: 0.4px;
  color: ${(props) => props.theme.coral};
  margin-right: 5px;
  margin-top: 4px;
`;
