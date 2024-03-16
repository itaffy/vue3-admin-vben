import { defHttp } from '@/utils/http/axios';
import { LoginParams } from './model/userModel';
import { LoginInfo, UserInfo } from '#/store';

import { ErrorMessageMode } from '#/axios';

enum Api {
  GetList = '/Role/GetList',
}

export function getRoleList() {
  return defHttp.get<string[]>({ url: Api.GetList });
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
