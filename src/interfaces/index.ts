export type Map = {
  [key: string]: any
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
