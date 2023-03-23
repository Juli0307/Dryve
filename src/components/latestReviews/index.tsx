import {
  ImageCar,
  ItemPlate,
  ItensContainer,
  ListHeader,
  ListWrapper,
  ListColumn,
  TitleTable,
  HeaderContainer,
  PricingContainer,
  CustomRow,
  ScrollbarContainer,
  TableBody,
  Divider,
  SeeAllLink,
} from './styles';

import { useEffect } from 'react';
import { Iproduct } from '../../store/types';
import { Select } from 'antd';

import { Col } from 'react-grid-system';
import Space from '../Space';
import Text from '../Text';
import { MdOutlineArrowRight } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../store';
import { useDispatch } from 'react-redux';
import { getCatalogInformationAction } from '../../store/actions/action';
import { formatToMoney } from '../../utils/numbers';

export const Catalog: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch();

  const catalogInformation = useSelector(
    (state: ApplicationState) => state.catalogInformation
  );

  useEffect(() => {
    dispatch(getCatalogInformationAction());
  }, []);

  const CustomTitle = () => {
    return (
      <div>
        <TitleTable>Últimas avaliações</TitleTable>
      </div>
    );
  };

  return (
    <ListWrapper>
      <HeaderContainer>
        <CustomTitle />
        <Select
          style={{ width: 120 }}
          defaultValue="Hoje"
          bordered={false}
          onChange={(value) => value}
          options={[
            { value: 'today', label: 'Hoje' },
            { value: 'yesterday', label: 'Ontem' },
            { value: 'week', label: 'Esta semana' },
          ]}
        />
      </HeaderContainer>
      <div>
        <ListHeader>
          <ListColumn align="initial">
            <Text
              color="black-87"
              component="h4"
              fontSize="10px"
              opacity={0.5}
              textAlign="end"
            >
              DADOS DO VEÍCULO
            </Text>
          </ListColumn>
          <ListColumn align="initial">
            {' '}
            <Text
              color="black-87"
              component="h4"
              fontSize="10px"
              opacity={0.5}
              textAlign="end"
            >
              VALOR
            </Text>
          </ListColumn>
          <ListColumn align="initial">
            {' '}
            <Text
              color="black-87"
              component="h4"
              fontSize="10px"
              opacity={0.5}
              textAlign="end"
            >
              STATUS
            </Text>
          </ListColumn>
        </ListHeader>
        <ScrollbarContainer>
          <TableBody>
            <Divider />

            {catalogInformation.map((product: Iproduct) => (
              <article key={product.version_uuid}>
                <CustomRow>
                  <Col xs={1.5}>
                    <ImageCar>
                      <img src={product.image} alt="" />
                    </ImageCar>
                  </Col>
                  <Col xs={4.5}>
                    <Text
                      fontSize="12px"
                      component="span"
                      fontWeight="bold"
                      textAlign="initial"
                      color="dark-blue-grey"
                    >
                      {`${product.brand_name} ${product.model_name}`}
                    </Text>

                    <ItemPlate>GDL8019</ItemPlate>
                    <Space mT={4} />
                    <Text
                      fontSize="10px"
                      component="span"
                      textAlign="initial"
                      color="steel"
                    >
                      {product.model_year} - {product.fuel_type.toUpperCase()}{' '}
                    </Text>
                    <Space mT={4} />
                    <Text
                      fontSize="10px"
                      component="span"
                      textAlign="initial"
                      color="steel"
                    >
                      {product.transmission_type.toUpperCase()} -{' '}
                      {product.mileage} KM
                    </Text>
                  </Col>
                  <Col xs={2}>
                    <Text
                      fontSize="10px"
                      component="span"
                      textAlign="initial"
                      color="steel"
                    >
                      ANÚNCIO
                    </Text>
                    <Space mT={4} />
                    <Text
                      fontSize="12px"
                      component="span"
                      fontWeight="bold"
                      textAlign="initial"
                      color="dark-blue-grey"
                    >
                      {formatToMoney(product.ad_selling_price)}
                    </Text>
                    <Space mT={4} />
                    <Text
                      fontSize="10px"
                      component="span"
                      textAlign="initial"
                      color="steel"
                    >
                      MÍNIMO ACEITO
                    </Text>
                    <Space mT={4} />
                    <Text
                      fontSize="10px"
                      component="span"
                      textAlign="initial"
                      color="steel"
                    >
                      {formatToMoney(product.ad_selling_price)}
                    </Text>
                  </Col>
                  <Col xs={4}>
                    <ItensContainer>
                      <div>
                        <PricingContainer>
                          <Text
                            fontSize="12px"
                            component="span"
                            textAlign="center"
                            color="steel"
                          >
                            Aguardando Precificação
                          </Text>
                        </PricingContainer>
                      </div>

                      <Space mT={18} />
                      <div>
                        <Text
                          fontSize="11px"
                          component="span"
                          textAlign="center"
                          color="grey-back"
                        >
                          18/04/2020 às 14:35
                        </Text>
                      </div>
                    </ItensContainer>
                  </Col>
                </CustomRow>
                <Divider />
              </article>
            ))}
          </TableBody>
        </ScrollbarContainer>
        <SeeAllLink>
          <Text component="span" fontSize="14px" color="bright-blue">
            Ver Tudo
          </Text>
          <MdOutlineArrowRight color={theme['bright-blue']} size={20} />
        </SeeAllLink>
      </div>
    </ListWrapper>
  );
};
