import axios from '../../src/index'

axios({
  method: 'post',
  url: '/base/post',
  responseType: 'json',
  headers:{'Content-Type':'application/json;charset=utf-8'},
  data: {
    a: 3,
    b: 4
  }
}).then((res) => {
  console.log(res)
})