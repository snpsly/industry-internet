import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "/api/electric-power-construction/industryModel",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `/api/electric-power-construction/industryModel/${id}`,
    method: "delete"
  })
}
export function getTableDataApiId(id: string) {
  return request({
    url: `/api/electric-power-construction/industryModel/${id}`,
    method: "get"
  })
}

/** 改 */
export function updateTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: `/api/electric-power-construction/industryModel/${data.id}`,
    method: "put",
    data
  })
}

/** 查 */
export function getTableDataApi(params?: any) {
  return request<Table.GetTableResponseData>({
    url: "/api/electric-power-construction/industryModel",
    method: "get",
    params
  })
}
export function getTableDataApi123(params?: any) {
  return request<Table.GetTableResponseData>({
    url: "/api/electric-power-construction/industryModel",
    method: "get",
    params
  })
}
export function indexgetTableDataApi(params?: any) {
  return request<any>({
    url: "/api/electric-power-construction/industryModelStatistics/GetIndustryModelClassificationStatistics",
    method: "get",
    params
  })
}
