import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "/api/electric-power-construction/TDpublicCloudEquipmentActiveDay",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `/api/electric-power-construction/TDpublicCloudEquipmentActiveDay/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateTableDataApi(data: any) {
  return request({
    url: `/api/electric-power-construction/TDpublicCloudEquipmentActiveDay/${data.id}`,
    method: "put",
    data
  })
}

export function getTableDataApiId(data: any) {
  return request({
    url: `/api/electric-power-construction/TDpublicCloudEquipmentActiveDay/${data.id}`,
    method: "get",
    data
  })
}

/** 查 */
export function getTableDataApi(params: any) {
  return request<any>({
    url: "/api/electric-power-construction/TDpublicCloudEquipmentActiveDay",
    method: "get",
    params
  })
}
export function getqy(params?: any) {
  return request<any>({
    url: `/api/electric-power-construction/TDpublicCloudEquipmentActiveDay/GetManufacturerList`,
    method: "get",
    params
  })
}
export function getById(params?: any) {
  return request<any>({
    url: `/api/identity/users/list/${params.id}`,
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
export function getTableDataApi123() {
  return request({
    url: "/api/identity/organization-unit-lookup/all",
    method: "get"
  })
}
export function getfl(params?: any) {
  return request<any>({
    url: `/api/electric-power-construction/monitorProductStatistics/GetTDpublicCloudEquipmentActiveDayStatistics`,
    method: "get",
    params
  })
}
export function getfltotal(params?: any) {
  return request<any>({
    url: `/api/electric-power-construction/monitorProductStatistics/GetTDpublicCloudEquipmentActiveDayCount`,
    method: "get",
    params
  })
}
