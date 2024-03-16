import { defHttp } from '@/utils/http/axios';
import { LoginParams } from './model/userModel';
import { LoginInfo, UserInfo } from '#/store';
import { getRoleListResultModel, RoleSearchParams } from './model/roleModel';

import { ErrorMessageMode } from '#/axios';

enum Api {
  GetList = '/Role/GetList',
}

export function getRoleList(params: RoleSearchParams) {
  return defHttp.get<getRoleListResultModel>({ url: Api.GetList, params });
}

// export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
//   return defHttp.post<LoginInfo>(
//     {
//       url: Api.Login,
//       params,
//     },
//     {
//       errorMessageMode: mode,
//       joinParamsToUrl: true,
//     },
//   );
// }
