import {
  AlingContainer,
  BrandName,
  DataCar,
  FuelType,
  ImageCar,
  ItemPlate,
  ItensContainer,
  Line,
  ListHeader,
  ListWrapper,
  ModelName,
  ModelYear,
  ReviewContainer,
  StatusCar,
  TransmissionType,
  ValueCar,
  UppercaseWrapper,
} from './styles';

import { useEffect, useState } from 'react';
import { Iproduct } from '../../store/types';
import axios from 'axios';

import { AxiosResponse } from 'axios';

export const Catalog: React.FC = () => {
  const [data, setData] = useState<Iproduct[]>([]);

  useEffect(() => {
    axios
      .get('http://www.mocky.io/v2/5eb553df31000060006994a8/data')
      .then((response: AxiosResponse<Iproduct[]>) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <ListWrapper>
      <ListHeader>
        <DataCar>Dados</DataCar>
        <ValueCar>Valor</ValueCar>

        <StatusCar>Status</StatusCar>
      </ListHeader>
      {data.map((product) => (
        <article key={product.version_uuid}>
          <AlingContainer>
            <ImageCar>
              <img src={product.image} alt="" />
            </ImageCar>
            <ItensContainer>
              <BrandName>
                {' '}
                {product.brand_name} <ModelName>{product.model_name}</ModelName>
              </BrandName>

              <ItemPlate>{product.model_year}</ItemPlate>
              <FuelType>{product.fuel_type}</FuelType>
              <ModelYear>{product.model_year}</ModelYear>
              <TransmissionType>{product.transmission_type}</TransmissionType>
            </ItensContainer>
            <ImageCar>
              <img src={product.image} alt="" />
            </ImageCar>
          </AlingContainer>
        </article>
      ))}
    </ListWrapper>
  );
};
