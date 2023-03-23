import {
  Description,
  ContentContainer,
  FooterCard,
  Oval,
  Icons,
  ArrowContainer,
  PercentContainer,
} from './styles';
import { Card } from './styles';
import {
  MdOutlineArrowDropUp,
  MdOutlineArrowDropDown,
  MdImportantDevices,
  MdAttachMoney,
} from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';
import { Col, Row } from 'react-grid-system';
import Text from '../Text';
import Space from '../Space';

export function Cards() {
  return (
    <>
      <Row gutterWidth={20}>
        <Col xs={12} lg={4}>
          <Card>
            <Text
              fontSize="10px"
              fontWeight="500"
              component="h4"
              textAlign="initial"
              color="black-87"
              opacity={0.5}
            >
              AVALIAÇÕES HOJE
            </Text>

            <ContentContainer>
              <Text
                fontSize="34px"
                fontWeight="normal"
                component="span"
                textAlign="initial"
                color="black-87"
              >
                <Space mT={6} /> 29
              </Text>

              <Oval>
                <Icons>
                  <IoMdCar size={30} />
                </Icons>
              </Oval>
            </ContentContainer>
            <FooterCard>
              <ArrowContainer>
                <MdOutlineArrowDropUp size={22} />
              </ArrowContainer>
              <PercentContainer>
                <Text fontSize="12px" color="blue-violet" component="span">
                  36%
                </Text>
              </PercentContainer>
              <Description>desde ontem</Description>
            </FooterCard>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card>
            <Text
              fontSize="10px"
              fontWeight="500"
              component="h4"
              textAlign="initial"
              color="black-87"
              opacity={0.5}
            >
              CARROS PUBLICADOS
            </Text>
            <ContentContainer>
              <Text
                fontSize="34px"
                fontWeight="normal"
                component="span"
                textAlign="initial"
                color="black-87"
              >
                <Space mT={6} /> 397
              </Text>
              <Oval>
                <Icons>
                  <MdImportantDevices size={30} />
                </Icons>
              </Oval>
            </ContentContainer>
            <FooterCard>
              <ArrowContainer>
                <MdOutlineArrowDropUp size={22} />
              </ArrowContainer>
              <PercentContainer>
                <Text fontSize="12px" color="blue-violet" component="span">
                  4%
                </Text>
              </PercentContainer>
              <Description>este mês</Description>
            </FooterCard>
          </Card>
        </Col>
        <Col xs={12} lg={4}>
          <Card>
            <Text
              fontSize="10px"
              fontWeight="500"
              component="h4"
              textAlign="initial"
              color="black-87"
              opacity={0.5}
            >
              TICKET MÉDIO DO ESTOQUE
            </Text>
            <ContentContainer>
              <Text
                fontSize="34px"
                fontWeight="normal"
                component="span"
                textAlign="initial"
                color="black-87"
              >
                <Space mT={6} /> R$42.567
              </Text>
              <Oval>
                <Icons>
                  <MdAttachMoney size={30} />
                </Icons>
              </Oval>
            </ContentContainer>
            <FooterCard>
              <ArrowContainer>
                <MdOutlineArrowDropDown size={22} />
              </ArrowContainer>
              <PercentContainer>
                {' '}
                <Text fontSize="12px" color="coral" component="span">
                  6%
                </Text>
              </PercentContainer>
              <Description>este mês</Description>
            </FooterCard>
          </Card>
        </Col>
      </Row>
    </>
  );
}
