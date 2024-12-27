import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "/api/electric-power-construction/equipmentType",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `/api/electric-power-construction/equipmentType/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: `/api/electric-power-construction/equipmentType/${data.id}`,
    method: "put",
    data
  })
}

/** 查 */
export function getTableDataApi(params?: Table.GetTableRequestData) {
  return request<any>({
    url: "/api/electric-power-construction/equipmentType",
    method: "get",
    params
  })
}
