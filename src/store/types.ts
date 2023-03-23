export enum CatalogTypes {
  GET_CATALOG_INFORMATION = 'GET_CATALOG_INFORMATION',
  FETCH_USER_SUCCESS = 'FETCH_USER_SUCCESS',
  FETCH_USER_ERROR = 'FETCH_USER_ERROR',
}

export interface Iproduct {
  model_year: number;
  brand_name: string;
  model_name: string;
  name: string;
  ad_selling_price: number;
  mileage: number;
  transmission_type: string;
  fuel_type: string;
  image: string;
  version_uuid: number;
}

export interface ICartState {
  items: Iproduct[];
}

export interface User {
  key: string;
  name: string;
  status: string;
  phone: string;
  email: string;
}

export interface EditableCellProps extends React.HTMLAttributes<HTMLElement> {
  editing: boolean;
  dataIndex: string;
  title: any;
  inputType: 'number' | 'select' | 'text';
  record: User;
  index: number;
  children: React.ReactNode;
}

export interface Review {
  id: number;
  date: Date;
}

export interface Option {
  value: string | number;
  label: string;
  children?: Option[];
}
