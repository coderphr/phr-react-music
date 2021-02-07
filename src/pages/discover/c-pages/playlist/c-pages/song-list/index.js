import React, { memo, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { getSongListAction } from '../../store/actionCreator';

import HRPagination from '@/components/pagination'
import HRCoverImage from '@/components/cover-image'
import {
  SongListWrap
} from './style'

export default memo(function HRSongList() {
  //state and props
  const [currentPage, setcurrentPage] = useState(1)
  //redux hook
  const { categorySongs } = useSelector(state => {
    return state.playlist
  })
  const songLlist = categorySongs.playlists || [];
  const total = categorySongs.total || 0;
  const dispatch = useDispatch();

  //other handle
  function onPagesChange(page, pageSize) {
    setcurrentPage(page)
    dispatch(getSongListAction(page))
  }
  return (
    <SongListWrap>
      <div className="song-list">
        {
          songLlist.map(item => {
            return (
              <HRCoverImage info={item} key={item.id} className="list-item"></HRCoverImage>
            )
          })
        }
      </div>
      <HRPagination total={total} 
                    currentPage={currentPage}
                    pageSize={35}
                    onPageChange={onPagesChange}/>
    </SongListWrap>
  )
})
