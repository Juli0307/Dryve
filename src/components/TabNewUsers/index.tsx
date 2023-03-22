import { Tabs } from 'antd';
import {
  AdressContainer,
  AdressDetailsContainer,
  CascaderState,
  CEPContainer,
  CityContainer,
  EmailContainer,
  FooterContainer,
  InputAdress,
  InputAdressDetails,
  InputCEP,
  InputCity,
  InputEmail,
  InputName,
  InputNeighborhood,
  InputPhone,
  NameContainer,
  NeighborhoodContainer,
  PhoneContainer,
  TabContainer,
  TabTitle,
} from './styles';
import { CustomLabel } from './styles';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'São Paulo',
    label: 'São Paulo',
  },
  {
    value: 'Minas Gerais',
    label: 'Minas Gerais',
  },
  {
    value: 'Rio de Janeiro',
    label: 'Rio de Janeiro',
  },
  {
    value: 'Espirito Santo',
    label: 'Espirito Santo',
  },
];

const onChange = (value: string[], selectedOptions?: Option[]) => {
  console.log(value);
};

export const TabNewUsers: React.FC = () => (
  <div>
    <TabTitle>OPA</TabTitle>
    <TabContainer>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: <CustomLabel> DADOS DO CLIENTE</CustomLabel>,
            key: '1',
            children: (
              <form>
                <NameContainer>
                  <InputName placeholder="Nome" />
                  <InputName placeholder="Sobrenome" />
                </NameContainer>
                <EmailContainer>
                  <InputEmail placeholder="Email" />
                </EmailContainer>
                <PhoneContainer>
                  <InputPhone placeholder="Telefone" />
                </PhoneContainer>
                <CEPContainer>
                  <InputCEP placeholder="CEP" />
                </CEPContainer>
                <AdressContainer>
                  <InputAdress placeholder="Endereço" />
                </AdressContainer>
                <AdressDetailsContainer>
                  <InputAdressDetails placeholder="Número" />
                  <InputAdressDetails placeholder="Complemento" />
                </AdressDetailsContainer>
                <NeighborhoodContainer>
                  <InputNeighborhood placeholder="Bairro" />
                </NeighborhoodContainer>
                <CityContainer>
                  <InputCity placeholder="Cidade" />
                  <CascaderState
                    options={options}
                    onChange={onChange}
                    placeholder="Estado"
                  />
                </CityContainer>
              </form>
            ),
          },
          {
            label: <CustomLabel>DADOS DO VEÍCULO</CustomLabel>,
            key: '2',
            children: 'Tab 2',
            disabled: true,
          },
          {
            label: <CustomLabel>ITENÇÃO DE COMPRA</CustomLabel>,
            key: '3',
            children: 'Tab 3',
            disabled: true,
          },
        ]}
      />
    </TabContainer>
    <FooterContainer></FooterContainer>
  </div>
);
