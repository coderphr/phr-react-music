import React, { memo, useCallback  } from 'react'
import { shallowEqual,  useSelector, useDispatch } from 'react-redux'

import {
  changeCurrentCategoryAction,
  getSongListAction
} from '../../store/actionCreator';

import {
  SongCategoryWrap
} from './style'

export default memo(function HRSongCategory() {
  //state and props
  //redux hooks
  const dispatch = useDispatch()
  const {category} = useSelector( state => {
    return state.playlist
  }, shallowEqual)

  const changeCurrentCategory = useCallback((name) => {
    dispatch(changeCurrentCategoryAction(name))
    dispatch(getSongListAction(0))
  }, [dispatch])

  return (
    <SongCategoryWrap>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link">全部风格</span>
      </div>
      <div className="category">
        {
          category.map((item, index) => {
            return (
              <dl key={item.name} className={"item"+index}>
                <dt>
                  <i className="icon sprite_icon2"></i>
                  <span>{item.name}</span>
                </dt>
                <dd>
                  {
                    item.sub.map((sItem,index) => {
                      return (
                        <div className="item" key={sItem.name}>
                          <span className="link"
                                onClick={e => changeCurrentCategory(sItem.name)}>{sItem.name}</span>
                          <span className="divider">|</span>
                        </div>
                      )
                    })
                  }
                </dd>
              </dl>
            )
          })
        }
      </div>
    </SongCategoryWrap>
  )
})
