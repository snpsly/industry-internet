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

export type GetTableData = {
  createTime: string
  email: string
  id: string
  phone: string
  roles: string
  status: boolean
  username: string
} & any

export type GetTableResponseData = ApiResponseData<{
  list: GetTableData[]
  total: number
}>
