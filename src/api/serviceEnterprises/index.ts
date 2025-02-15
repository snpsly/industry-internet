import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "/api/electric-power-construction/serviceEnterprise",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `/api/electric-power-construction/serviceEnterprise/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: `/api/electric-power-construction/serviceEnterprise/${data.id}`,
    method: "put",
    data
  })
}

/** 查 */
export function getTableDataApi(params: any) {
  return request<any>({
    url: "/api/electric-power-construction/serviceEnterprise",
    method: "get",
    params
  })
}
