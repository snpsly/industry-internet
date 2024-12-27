export interface CreateOrUpdateTableRequestData {
  id?: string
  username: string
  password?: string
  image?: string | null
}

export interface GetTableRequestData {
  /** 当前页码 */
  currentPage: number
  /** 查询条数 */
  size: number
  /** 查询参数：用户名 */
  username?: string
  /** 查询参数：手机号 */
  phone?: string
}

export interface GetTableData {
  id: string
  name: string
  pictureFieldId: string
  majorFunction: string
  industryModelClassification: number
  isCoreIndustrialModel: boolean
  remark: string
  fileDownloadInfoModel: object
  rate?: number
}

export type GetTableResponseData = {
  items: GetTableData[]
  total: number
}
