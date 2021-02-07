import request from './request';

export function getPlayList() {
  return request({
    url:'/playlist/catlist'
  })
}

export function getSongList(cat="全部", offset=0, limit=35) {
  return request({
    url:"/top/playlist",
    params:{
      cat,
      offset,
      limit
    }
  })
}