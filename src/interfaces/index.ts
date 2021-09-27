export type Map = {
  [key: string]: unknown
}

export interface ResponseType {
  status: number
  statusText: string
  data: {
    code: number
    msg?: string
    data?: Map
  }
}
