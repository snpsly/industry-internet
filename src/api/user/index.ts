import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "/api/identity/users/create",
    method: "post",
    data: {
      ...data,
      dataFilterSettingId: "3a0dc3c0-8e63-79aa-835c-c6580e4b95be"
    }
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `/api/identity/users/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: `/api/identity/users/update/${data.id}`,
    method: "put",
    data: {
      ...data,
      dataFilterSettingId: "3a0dc3c0-8e63-79aa-835c-c6580e4b95be"
    }
  })
}

/** 查 */
export function getTableDataApi(params: Table.GetTableRequestData) {
  return request<Table.GetTableResponseData>({
    url: "/api/identity/users/list",
    method: "get",
    params
  })
}
export function getBMApi() {
  return request<Table.GetTableResponseData>({
    url: "/api/identity/organization-unit-lookup/all",
    method: "get"
  })
}
