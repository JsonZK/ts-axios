
import {AxiosRequestConfig} from './types/index'
export default function xhr(config:AxiosRequestConfig){
  const {data = null,url,method = 'get',async = true} = config
  
  const request = new XMLHttpRequest()

  request.open(method.toUpperCase(),url,async)

  request.send(data)
}