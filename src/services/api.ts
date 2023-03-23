import axios from 'axios';
import { Iproduct } from '../store/types';

const BASE_URL = 'http://www.mocky.io/v2';

export const CatalogService = { getCatalogInformation };

export function getCatalogInformation() {
  return axios.get<Iproduct, Iproduct>(`${BASE_URL}/5eb553df31000060006994a8`);
}
