
export type Method = "GET"|"get"|"POST"|"PUT"|"put"|"Delete"|"delete"|"HEAD"|"head"|"OPTIONS"|"options"|"PATCH"|"patch"
export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:any,
  params?:any,
  async?:boolean
};