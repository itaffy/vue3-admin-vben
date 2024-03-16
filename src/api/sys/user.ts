import { defHttp } from '@/utils/http/axios';
import { LoginParams } from './model/userModel';
import { LoginInfo, UserInfo } from '#/store';

import { ErrorMessageMode } from '#/axios';

enum Api {
  Login = '/Login/CheckLogin',
  Logout = '/Home/Logout',
  GetUserInfo = '/Owner/PersonalCenter',
  GetPermCode = '/getPermCode',
  TestRetry = '/testRetry',
}

/**
 * @description: user login api
 */
export function loginApi(params: LoginParams, mode: ErrorMessageMode = 'modal') {
  return defHttp.post<LoginInfo>(
    {
      url: Api.Login,
      params,
    },
    {
      errorMessageMode: mode,
      joinParamsToUrl: true,
    },
  );
}

/**
 * @description: getUserInfo
 */
export function getUserInfo() {
  return defHttp.post<UserInfo>({ url: Api.GetUserInfo }, { errorMessageMode: 'none' });
}

export function getPermCode() {
  return defHttp.get<string[]>({ url: Api.GetPermCode });
}

export function doLogout() {
  return defHttp.post({ url: Api.Logout });
}

export function testRetry() {
  return defHttp.get(
    { url: Api.TestRetry },
    {
      retryRequest: {
        isOpenRetry: true,
        count: 5,
        waitTime: 1000,
      },
    },
  );
}
