import React, { memo, useEffect,useRef,useState,useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreator";

import { Carousel } from 'antd'
import {
  BannerWrap,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style'

export default memo(function HRTopBanner(props) {

  //state
  const [current, setcurrent] = useState(0);

  //与redux关联的hooks
  const { topBanners } = useSelector(state => ({
    topBanners: state.recomend.topBanner
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopBannerAction())
  }, [dispatch])

  //其他hooks
  const bannerRef = useRef();
  const indexChange = useCallback((from,to) => {
    setTimeout(() => {
      setcurrent(to);
    }, 0);
  }, [],
  )

  //其他业务逻辑
  const bgImg = topBanners.length && (topBanners[current].imageUrl + "?imageView&blur=40x20");

  return ( 
    <BannerWrap bgImg={bgImg}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel className="" effect="fade" autoplay ref={bannerRef} beforeChange={indexChange}>
            {
              topBanners.map((item,index) => {
                return (
                  <div className="banner-item" key={item.imageUrl}>
                    <img className="img" src={item.imageUrl} alt={item.targetId}></img>
                  </div>
                )
              })
            }
          </Carousel>,
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button onClick={ e => { bannerRef.current.prev() }} className="pre"></button>
          <button onClick={ e => { bannerRef.current.next() }} className="next"></button>
        </BannerControl>
      </div>
    </BannerWrap>
  )
})
