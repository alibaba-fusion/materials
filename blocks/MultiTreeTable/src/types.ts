export interface DataItem {
  id: string;
  email: string;
  gender: string;
  name: string;
  address: string;
  phone: string;
  picture: string;
  children?: DataItem[];
}
