import React, { memo } from 'react'

import { Pagination } from 'antd';

import {
  PaginationWrap
} from './style'

export default memo(function HRPagination(props) {
  //state and props
  const {total, currentPage, pageSize, onPageChange} = props;
  const itemRender = (current, type, originalElement) => {
    if(type === "prev") {
      return  <button className="control prev"> &lt; 上一页</button>;
    }
    if(type === "next") {
      return  <button className="control next"> 下一页  &gt;</button>;
    }

    return originalElement
  }


  return (
    <PaginationWrap>
      <Pagination total={total} className="pagination"
                  current={currentPage}
                  defaultCurrent={1}
                  pageSize={pageSize}
                  showSizeChanger={false}
                  itemRender={itemRender}
                  onChange={onPageChange}/>
    </PaginationWrap>
  )
})
