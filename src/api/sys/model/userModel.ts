/**
 * @description: Login interface parameters
 */
export interface LoginParams {
  userName: string;
  password: string;
}

export interface RoleInfo {
  roleName: string;
  value: string;
}

/**
 * @description: Login interface return value
 */
// export interface LoginResultModel {
//   UserId: string | number;
//   UserName: string;
//   Token: string;
//   ProjectName: string;
//   PhoneNumber: string;
//   LoginTime: string;
//   IsNewUser: boolean;
//   IP: string;
//   CuID: number;
//   Client: number;
//   BaseUserID: number;
//   roles: RoleInfo[];
// }

/**
 * @description: Get user information return value
 */
// export interface GetUserInfoModel {
//   Adress: string | null;
//   BaseID: number;
//   Email: string | null;
//   IDCard: string | null;
//   ImgUrl: string | null;
//   LastTime: string;
//   LoginIP: string;
//   NickName: string;
//   PhoneNumber: string;
//   Pwd: string;
//   Role: string;
//   Sex: string;
//   UserName: string;
// }
