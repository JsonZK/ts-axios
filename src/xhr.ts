
import {AxiosPromise,AxiosResponse, AxiosRequestConfig} from './types/index'
import {parseHeaders} from './helpers/headers'
import {transformResponse} from './helpers/data'
export default function xhr(config:AxiosRequestConfig):AxiosPromise{
  return new Promise((resolve,reject)=>{
    const {data = undefined,url,method = 'get',async = true,headers,responseType} = config
    const request = new XMLHttpRequest()
    if (responseType) {
      request.responseType = responseType
    }

    request.onreadystatechange = function handleLoad() {
      if (request.readyState !== 4) {
        return
      }
      const responseHeaders = parseHeaders(request.getAllResponseHeaders())
      const responseData = responseType && responseType !== 'text' ? request.response : request.responseText
      const response: AxiosResponse = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config,
        request
      }
      resolve(response)
    }

    request.open(method.toUpperCase(),url,async)
  
    Object.keys(headers).forEach((name) => {
      if (data === null && name.toLowerCase() === 'content-type') {
        delete headers[name]
      } else {
        request.setRequestHeader(name, headers[name])
      }
    })
    request.send(data)


  })

}