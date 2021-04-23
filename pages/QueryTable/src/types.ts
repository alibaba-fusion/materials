export interface IListConfig {
  uri?: string;
  formatter?: (res: any) => IResponse;
  querySchema?: IQueryItem[];
  actionSchema?: IActionItem[];
  dataSchema?: IDataItem[];
  paginationParams?: IPaginationParams;
}

export interface IQueryItem {
  title: string;
  field: string;
  component?: string;
  componentProps?: Record<string, unknown>;
}


export interface IActionItem {
  buttonText: string;
  buttonProps?: Record<string, unknown>;
  onClick: (e) => void;
}

export interface IDataItem {
  title: string;
  field: string;
  cell?: (value, index, record) => React.ReactElement<any> | React.ReactNode | (() => void);
}

export interface IPaginationParams {
  pageSize: number;
  currentPage: number;
  totalCount?: number;
}

export interface IQueryParams extends IPaginationParams {
  [key: string]: any;
}

export interface IResponse {
  data?: IDataModel;
  success?: boolean;
  errorMessage?: string;
}

export interface IDataModel {
  result?: Array<Record<string, unknown>>;
  data?: Array<Record<string, unknown>>;
  currentPage: number;
  pageSize: number;
  totalCount: number;
}
