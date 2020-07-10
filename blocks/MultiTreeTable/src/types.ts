export interface DataItem {
  id: string;
  email: string;
  gender: string;
  name: string;
  phone: string;
  level: number;
  children?: DataItem[];
}