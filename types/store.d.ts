import { ErrorTypeEnum } from '@/enums/exceptionEnum';
import { MenuModeEnum, MenuTypeEnum } from '@/enums/menuEnum';
import { RoleInfo } from '@/api/sys/model/userModel';

// Lock screen information
export interface LockInfo {
  // Password required
  pwd?: string | undefined;
  // Is it locked?
  isLock?: boolean;
}

export interface ApiAddress {
  key: string;
  val: string;
}

// Error-log information
export interface ErrorLogInfo {
  // Type of error
  type: ErrorTypeEnum;
  // Error file
  file: string;
  // Error name
  name?: string;
  // Error message
  message: string;
  // Error stack
  stack?: string;
  // Error detail
  detail: string;
  // Error url
  url: string;
  // Error time
  time?: string;
}

export interface UserInfo {
  Adress: string | null;
  BaseID: number;
  Email: string | null;
  IDCard: string | null;
  ImgUrl: string | null;
  LastTime: string;
  LoginIP: string;
  NickName: string;
  PhoneNumber: string;
  Pwd: string;
  Role: string;
  Sex: string;
  UserName: string;
}

export interface LoginInfo {
  UserId: string | number;
  UserName: string;
  Token: string;
  ProjectName: string;
  PhoneNumber: string;
  LoginTime: string;
  IsNewUser: boolean;
  IP: string;
  CuID: number;
  Client: number;
  BaseUserID: number;
  roles: RoleInfo[];
}

export interface BeforeMiniState {
  menuCollapsed?: boolean;
  menuSplit?: boolean;
  menuMode?: MenuModeEnum;
  menuType?: MenuTypeEnum;
}

export interface TableSetting {
  size: Nullable<SizeType>;
  showIndexColumn: Recordable<Nullable<boolean>>;
  columns: Recordable<Nullable<Array<ColumnOptionsType>>>;
  showRowSelection: Recordable<Nullable<boolean>>;
}
