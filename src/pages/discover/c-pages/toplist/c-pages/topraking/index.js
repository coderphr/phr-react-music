import React, { memo, useEffect, useState } from 'react'

import classnames from 'classnames';
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getAllTopListAction, getListDetailAction } from '../../store/actionCreator';
import { getSizeImg } from '@/utils/format-utils';


import { TopRankingWrap } from "./style";

export default memo(function HRTopRaking() {
  //state and prps
  const [current, setcurrent] = useState(0)
  //redux hook
  const dispatch = useDispatch();
  const { topList } = useSelector(state => {
    return state.toplist
  }, shallowEqual)
  //oohter hook
  useEffect(() => {
    dispatch(getAllTopListAction())
  }, [dispatch])

  //other handler 
  const handleClick = index => {
    setcurrent(index);
    dispatch(getListDetailAction(topList[index].id))
  }

  return (
    <TopRankingWrap>
      {
        topList.map((item, index) => {
          let header;
          if(index === 0 || index ===4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          } 
          return (
            <div key={item.id}>
              {header}
              <div className={classnames("item",{ "active" : index === current })}
                    onClick={e => handleClick(index)}>
                <img src={getSizeImg(item.coverImgUrl, 40)} alt={item.name}></img>
                <div className="info">
                  <span className="name">{item.name}</span>
                  <span className="update">{item.updateFrequency}</span>
                </div>
              </div>
            </div>
          )
        })
      }
    </TopRankingWrap>
  )
})
