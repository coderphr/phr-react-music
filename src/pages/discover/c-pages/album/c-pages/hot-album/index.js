import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getHotAlbumAction } from '../../store/actionCreator'

import HRAlbumCover from '@/components/album-cover';
import HRThemHeaderNormal from '@/components/them-header-normal'
import { HotAlbumWrap } from './style'

export default memo(function HRHotAlbum() {
  //state and props

  //redux hooks
  const dispatch = useDispatch();
  const { hotAlbum } = useSelector( state => {
    return state.album;
  },shallowEqual)

  //other hooks
  useEffect(() => {
    dispatch(getHotAlbumAction())
  },[dispatch])
  const album = hotAlbum || [];
  return (
    <HotAlbumWrap>
      <HRThemHeaderNormal title="热门新碟" />
      <div className="list">
        {
          album.map(item => {
            return (<HRAlbumCover info={item}
                                  size={130}
                                  width={153}
                                  bgImg={130}
                                  bgp="-846px"
                                  key={item.id}/>)
          })
        }
      </div>
    </HotAlbumWrap>
  )
})
