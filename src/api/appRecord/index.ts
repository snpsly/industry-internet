import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "/api/electric-power-construction/apprecord",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `/api/electric-power-construction/apprecord/${id}`,
    method: "delete"
  })
}
/** 删 */
export function getTableDataApiId(id: string) {
  return request({
    url: `/api/electric-power-construction/apprecord/${id}`,
    method: "get"
  })
}

/** 改 */
export function updateTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: `/api/electric-power-construction/apprecord/${data.id}`,
    method: "put",
    data
  })
}

/** 查 */
export function getTableDataApi(params?: any) {
  return request<Table.GetTableResponseData>({
    url: "/api/electric-power-construction/apprecord",
    method: "get",
    params
  })
}
