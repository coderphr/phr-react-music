import request from './request';

export function getAllTopList() {
  return request({
    url:"/toplist"
  })
}

export function getListDetail(id) {
  return request({
    url:"/playlist/detail",
    params:{
      id
    }
  })
}