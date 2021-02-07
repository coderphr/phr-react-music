import styled from 'styled-components';

export const RadioRankinCover = styled.div`
width:431px;
height:161px;
display:flex;
justify-content:flex-start;
align-items:center;
border-bottom:1px solid #e7e7e7;
 img {
   width:120px;
   height:120px;
 }

 .info {
   margin-left:20px;
   display:flex;
   flex-direction:column;

  .nickname {
    margin:20px 0 10px 0;
    .left {
      margin-right:2px;
      position:relative;
      top:2px;
      display:inline-block;
      width:14px;
      height:15px;
      background-position:-50px -300px;
    }
  }

  .count {
    color:#666;
    .phase {
      margin-right:10px;
    }
  }
 }
`