import request from './request'

export function getDjRadioCateList() {
  return request({
    url:"/dj/catelist"
  })
}

export function getDjradioRecomend(type) {
  return request({
    url:"/dj/recommend/type",
    params:{
      type
    }
  })
}

export function getDjradios(cateId, limit, offset) {
  return request({
    url:"/dj/radio/hot",
    params:{
      cateId,
      limit,
      offset
    }
  })
}