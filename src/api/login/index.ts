import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 登录并返回 Token */
export function loginApi(data: any) {
  // const formData = new FormData()
  // formData.append("grant_type", "password")
  // formData.append("scope", ["ElectricPowerConstruction"].join(" "))
  // formData.append("username", data.username)
  // formData.append("password", data.password)
  // formData.append("client_id", "ElectricPowerConstruction_App")
  // formData.append("client_secret", "1q2w3e")
  // formData.append("sms_code", "")

  return request({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "/connect/token",
    method: "post",
    data
  })
}
export function loginAccountApi(data: any) {
  return request({
    url: "/api/identity/account/checking-account-password-and-is-need-sms-verification",
    method: "post",
    data
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return request<Login.UserInfoResponseData>({
    url: "api/electric-power-construction/my-profile",
    method: "get"
  })
}
/** 获取用户详情 */
export function importFile(data: any) {
  return request<Login.UserInfoResponseData>({
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: "api/file-management/temporary-file/upload-temporary-file",
    method: "post",
    data
  })
}
/** 获取用户详情 */
export function downloadFile(data: any) {
  console.log("🚀 ~ downloadFile ~ data:", data)
  return request<Login.UserInfoResponseData>({
    url: `api/file-management/file/${data.id}/download`,
    method: "get",
    params: {
      token: data.token
    }
  })
}
