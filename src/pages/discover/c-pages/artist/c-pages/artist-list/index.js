import React, { memo } from 'react';
import { useSelector, shallowEqual } from 'react-redux';


import HRThemeHeaderNormal from '@/components/them-header-normal';
import HRAlphaList from './c-pages/alpha-list';
import HRArtistItem from './c-pages/artist-item';
import {
  ArtistListWrapper
} from './style';

export default memo(function HRArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(state => {
    return state.artist
  }, shallowEqual);

  return (
    <ArtistListWrapper>
      <HRThemeHeaderNormal title={currentType.name} />
      <HRAlphaList/>
      <div className="artist-list">
        {
          artistList.map((item, index) => {
            return <HRArtistItem key={item.id} info={item} index={index} />
          })
        }
      </div>
    </ArtistListWrapper>
  )
})
