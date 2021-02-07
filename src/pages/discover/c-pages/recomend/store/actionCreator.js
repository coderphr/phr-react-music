import { 
  getBanner,
  getHotRecomend,
  getNewAlbum,
  getRecomendRanking,
  getHomeSongers
} from "@/services/recomend";
import { 
  CHANGE_BANNER,
  CHANGE_HOT_RECOMEND,
  CHANGE_NEW_ALBUM,
  CHANGE_UP_RANK,
  CHANGE_NEW_RANK,
  CHANGE_ORIGIN_RANK,
  CHANGE_HOME_SINGERS
} from "./constants";

export const changeBannerAction = (banners) => ({
  type: CHANGE_BANNER,
  banner : banners.banners
})

export const changeHotRecomendAction = (res) => ({
  type: CHANGE_HOT_RECOMEND,
  recomend: res.result
})

export const changeNewAlbumAction = (res) => ({
  type: CHANGE_NEW_ALBUM,
  albums: res.albums
})

export const changeUpRankAction = (res) => ({
  type:CHANGE_UP_RANK,
  upranks:res.playlist
})

export const changeNewRankAction = (res) => ({
  type:CHANGE_NEW_RANK,
  newranks:res.playlist
})

export const changeOriginRankAction = (res) => ({
  type:CHANGE_ORIGIN_RANK,
  originranks:res.playlist
})

export const changeHomeSingersAction = (res) => ({
  type:CHANGE_HOME_SINGERS,
  singers:res.artists
})

export const getTopBannerAction = () => {
  return dispatch => {
    getBanner().then(data =>{
    dispatch(changeBannerAction(data))
    })
  }
}

export const getHotRecomendAction = (limit) => {
  return dispatch => {
    getHotRecomend(limit).then(data => {
      dispatch(changeHotRecomendAction(data))
    })
  }
}

export const getNewAlbumAction = (limit) => {
  return dispatch => {
    getNewAlbum(limit).then(data => {
      dispatch(changeNewAlbumAction(data))
    })
  }
}

export const getRecomendRankingAction = (idx) => {
  return dispatch => {
    getRecomendRanking(idx).then(data => {
      switch (idx) {
        case 19723756:
          dispatch(changeNewRankAction(data))
          break;
        case 3779629:
          dispatch(changeOriginRankAction(data))
          break;
        case 2884035:
          dispatch(changeUpRankAction(data))
          break;
        default:
          break;
      }
    })

  }
}


export const getHomeSongersAction = (limit) =>{ 
  return dispatch => {
    getHomeSongers(limit).then(data => {
      dispatch(changeHomeSingersAction(data))
    })
  }
}