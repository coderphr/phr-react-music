import request from './request';

export function getHotAlbum(limit = 30, type = "hot", offset = 0) {
  return request({
    url:"/top/album",
    params:{
      limit,
      type,
      offset
    }
  })
}

export function getAllAlbum(limit,offset) {
  return request({
    url:"/album/new",
    params:{
      limit,
      offset
    }
  })
}