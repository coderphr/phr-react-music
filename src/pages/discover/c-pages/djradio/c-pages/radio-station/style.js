import styled from 'styled-components';

export const RadioStation = styled.div`
.list {
margin-top:20px;
  display:flex;
  justify-content:space-between;
  overflow:hidden;
  .list-item {
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    width:150px;
    height:200px;
    .name {
      font-size: 14px;
      color: #333;
      margin: 5px 0;
    }
    .desc {
      color: #666;
    }
  }
}
`