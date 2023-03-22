import {
  ArrowDown,
  ArrowUp,
  CardContainer,
  CardContent,
  CardTitle,
  Description,
  ContentContainer,
  DownPercent,
  FooterCard,
  Oval,
  UpPercent,
  Icons,
} from './styles';
import { Card } from './styles';
import {
  MdOutlineArrowDropUp,
  MdOutlineArrowDropDown,
  MdImportantDevices,
  MdAttachMoney,
} from 'react-icons/md';
import { IoMdCar } from 'react-icons/io';

export function Cards() {
  return (
    <CardContainer>
      <Card>
        <CardTitle>AVALIAÇÕES HOJE</CardTitle>
        <ContentContainer>
          <CardContent>29</CardContent>
          <Oval>
            <Icons>
              <IoMdCar size={30} />
            </Icons>
          </Oval>
        </ContentContainer>
        <FooterCard>
          {' '}
          <ArrowUp>
            {' '}
            <MdOutlineArrowDropUp size={22} />
          </ArrowUp>
          <UpPercent>36%</UpPercent>
          <Description>desde ontem</Description>
        </FooterCard>
      </Card>
      <Card>
        {' '}
        <CardTitle>CARROS PUBLICADOS</CardTitle>
        <ContentContainer>
          <CardContent>397</CardContent>
          <Oval>
            {' '}
            <Icons>
              <MdImportantDevices size={30} />
            </Icons>
          </Oval>
        </ContentContainer>
        <FooterCard>
          <ArrowUp>
            {' '}
            <MdOutlineArrowDropUp size={22} />
          </ArrowUp>
          <UpPercent>4%</UpPercent>
          <Description>este mês</Description>
        </FooterCard>
      </Card>
      <Card>
        {' '}
        <CardTitle>TICKET MÉDIO DO ESTOQUE</CardTitle>
        <ContentContainer>
          <CardContent>R$42.567</CardContent>
          <Oval>
            <Icons>
              <MdAttachMoney size={30} />
            </Icons>
          </Oval>
        </ContentContainer>
        <FooterCard>
          <ArrowDown>
            {' '}
            <MdOutlineArrowDropDown size={22} />
          </ArrowDown>
          <DownPercent>6%</DownPercent>
          <Description>este mês</Description>
        </FooterCard>
      </Card>
    </CardContainer>
  );
}
