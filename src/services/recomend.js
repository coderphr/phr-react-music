import request from './request'

export function getBanner() {
  return request({
    url:"/banner"
  })
}

export function getHotRecomend(limit) {
  return request({
    url:'/personalized',
    params:{
      limit
    }
  })
}

export function getNewAlbum(limit = 10) {
  return request({
    url:"/album/new",
    params:{
      limit
    }
  })
}

export function getRecomendRanking(id) {
  return request({
    url:"/playlist/detail",
    params:{
      id
    }
  })
}

export function getHomeSongers(limit) {
  return request({
    url:"/top/artists",
    params:{
      limit
    }
  })
}