export interface RoleItem {
  AddTime: string;
  AppBigMenuIds: string;
  AppMenuIds: string;
  BigMenuIds: string;
  CustomerId: number;
  DisableRole: boolean | null;
  Explan: string;
  Id: number;
  MenuIds: string | null;
  Name: string;
  State: boolean;
  Text: string;
}

/**
 * @description: Get menu return value
 */
export type getRoleListResultModel = RoleItem[];

export interface RoleSearchParams {
  name?: string;
}
