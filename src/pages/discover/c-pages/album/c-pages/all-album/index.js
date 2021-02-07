import React, { memo, useEffect, useState } from 'react'

import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { getAllAlbumAction } from '../../store/actionCreator';

import HRAlbumCover from '@/components/album-cover';
import HRThemHeaderNormal from '@/components/them-header-normal';
import HRPagination from '@/components/pagination';
import {
  AllAlbumWrap
} from './style'

export default memo(function HRAllAlbum() {
  //state and props
  const [currentPage, setcurrentPage] = useState(1)
  //redux hooks
  const dispatch = useDispatch();
  const { allAlbum, total } = useSelector(state => {
    return state.album;
  }, shallowEqual)
  //other hooks
  useEffect(() => {
    dispatch(getAllAlbumAction(0))
  }, [dispatch]);

  function onPageChange(page,pageSize) {
    setcurrentPage(page);
    dispatch(getAllAlbumAction(page * 30))
  }
  return (
    <AllAlbumWrap>
      <HRThemHeaderNormal title="全部新碟" />
      <div className="list">
        {
          allAlbum.map(item => {
            return (<HRAlbumCover info={item}
              size={130}
              width={153}
              bgImg={130}
              bgp="-846px"
              key={item.id} />)
          })
        }
      </div>
      <HRPagination total={total}
                    currentPage={currentPage}
                    pageSize={30}
                    onPageChange={onPageChange}/>
    </AllAlbumWrap>
  )
})
