import React, { memo, useEffect } from 'react'

import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { getDjradioRecomendAction } from '../../store/actionCreator';
import { getSizeImg } from '@/utils/format-utils';

import HRThemHeaderNormal from '@/components/them-header-normal';
import {
  RadioStation
} from './style'

export default memo(function HRRadioStation() {
  //props and state

  //redux hook
  const dispatch = useDispatch();
  const {currentId, recomend} = useSelector(state => {
    return state.djradio;
  }, shallowEqual)
  //other hoook
  useEffect(() => {
    const type = currentId || 3;
    dispatch(getDjradioRecomendAction(type))
  }, [dispatch, currentId])

  //other handler 
  const recomendList = recomend || [];
  return (
    <RadioStation>
      <HRThemHeaderNormal title="优秀电台"/>
      <div className="list">
        {
          recomendList.slice(0,5).map(item => {
            return (
              <div className="list-item" key={item.id}>
                <img src={getSizeImg(item.picUrl, 150)} alt=""></img>
                <span className="name text-nowrap">{item.name}</span>
                <span className="desc text-nowrap">{item.desc}</span>
              </div>
            )
          })
        }
      </div>
    </RadioStation>
  )
})
