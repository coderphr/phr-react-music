import React, { memo, useEffect, useRef } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getNewAlbumAction } from "../../store/actionCreator";

import { Carousel } from 'antd';
import HRAlbumCover from "@/components/album-cover";
import HRThemHeader from "@/components/them-header";
import {
  NewAlbumWrap
} from './style'

export default memo(function HRNewAlbum() {

  //redux相关
  const dispatch = useDispatch();
  const { albums } = useSelector(state => {
    return state.recomend
  }, [shallowEqual])

  //其他hooks
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  const albumRef = useRef();

  return (
    <NewAlbumWrap>
      <HRThemHeader title="新碟推荐" />
      <div className="content">
        <div className="arrow arrow_left sprite_02"
             onClick={ e => albumRef.current.prev() }></div>
        <Carousel className="album" ref={albumRef} dots={false} >
          {
            [0,1].map((item,index) => {
              return <div className="page" key={item}>
                {
                   albums.slice(item * 5, (item + 1) * 5).map(iten => {
                    return <HRAlbumCover info={iten} 
                                         key={iten.id}
                                         size={100}
                                         width={118}
                                         bgIMg={100}
                                         bgp="-570px" />
                  }) 
                }
              </div>
            })
          }
        </Carousel>
        <div className="arrow arrow_right sprite_02"
             onClick={ e => albumRef.current.next() }></div>
      </div>
    </NewAlbumWrap>
  )
})
