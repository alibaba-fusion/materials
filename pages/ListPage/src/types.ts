export interface IListConfig {
  uri? : string;
  formatter? : (res: any) => IResponse;
  querySchema?: IQueryItem[];
  actionSchema?: IActionItem[];
  dataSchema? : IDataItem[];
  paginationParams? : IPaginationParams;
}

export interface IQueryItem {
  title: string;
  field: string;
  component?: string;
  componentProps?: object;
}


export interface IActionItem {
  buttonText: string;
  buttonProps?: object;
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
  code?: any;
  data?: IDataModel;
  msg?: string;
  success?: boolean;
  message?: string;
  errorMsg?: string;
  errorCode?: string;
  errorMessage?: string;
}

export interface IDataModel {
  result?: object[];
  data?: object[];
  currentPage: number;
  pageSize: number;
  totalCount: number;
}
