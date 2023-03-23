import { Button, Tabs } from 'antd';
import { Col, Row } from 'react-grid-system';
import { IoAtOutline } from 'react-icons/io5';
import { Option } from '../../store/types';
import Content from '../Content';
import Text from '../Text';

import {
  ButtonCancel,
  ButtonSave,
  CascaderState,
  CustomInput,
  FooterContainer,
  InputRow,
  PositionInput,
  TabContainer,
  TabTitle,
} from './styles';
import { CustomLabel } from './styles';

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

export const TabNewUsers: React.FC = () => (
  <Content>
    <TabTitle>Adicionar cliente</TabTitle>
    <TabContainer>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: <CustomLabel> DADOS DO CLIENTE</CustomLabel>,
            key: '1',
            children: (
              <form>
                <PositionInput>
                  <Row>
                    <Col xs={12} lg={6}>
                      <InputRow>
                        <Col xs={12} lg={6}>
                          <CustomInput placeholder="Nome" />
                        </Col>
                        <Col xs={21} lg={6}>
                          <CustomInput placeholder="Sobrenome" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12}>
                          <CustomInput placeholder="Email" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12} lg={6}>
                          <CustomInput placeholder="Telefone" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12} lg={6}>
                          <CustomInput placeholder="CEP" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12}>
                          <CustomInput placeholder="Endereço" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12} lg={6}>
                          <CustomInput placeholder="Número" />
                        </Col>
                        <Col xs={12} lg={6}>
                          <CustomInput placeholder="Complemento" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12}>
                          <CustomInput placeholder="Bairro" />
                        </Col>
                      </InputRow>
                      <InputRow>
                        <Col xs={12} lg={6}>
                          <CustomInput placeholder="Cidade" />
                        </Col>
                        <Col xs={12} lg={6}>
                          <CascaderState
                            options={options}
                            placeholder="Estado"
                          />
                        </Col>
                      </InputRow>
                    </Col>
                  </Row>
                </PositionInput>
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

    <FooterContainer>
      <ButtonSave>
        <Text
          component="span"
          fontSize="14px"
          fontWeight="500"
          textAlign="center"
          color="white-two"
        >
          SALVAR
        </Text>
      </ButtonSave>

      <ButtonCancel>
        <Text
          component="span"
          fontSize="14px"
          fontWeight="500"
          textAlign="center"
          color="blue-violet"
        >
          CANCELAR
        </Text>
      </ButtonCancel>
    </FooterContainer>
  </Content>
);
