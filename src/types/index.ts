
export type Method = "GET"|"get"|"POST"|"post"|"PUT"|"put"|"Delete"|"delete"|"HEAD"|"head"|"OPTIONS"|"options"|"PATCH"|"patch"
export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:any,
  params?:any,
  async?:boolean,
  headers?:any,
  timeout?:number,
  responseType?: XMLHttpRequestResponseType// "" | "arraybuffer" | "blob" | "document" | "json" | "text" 字符串字面量类型
};
export interface AxiosResponse{
  data: any,
  status: number,
  statusText: string,
  headers: any,
  config:AxiosRequestConfig,
  request:any
}
export interface AxiosPromise extends Promise<AxiosResponse> {
}