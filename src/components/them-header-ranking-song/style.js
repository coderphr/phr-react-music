import styled from 'styled-components';

export const ThemHeader = styled.div`
  padding:0 40px;
  display:flex;
  justify-content:space-between;
  line-height:28px;
  .left {
    display:flex;
    .title {
      font-size:20px;
      font-weight:normal;
    }
    .songcount {
      margin-left:10px;
      color:#666;
    }
  }

  .right {
    .playcount {
      color:#c20c0c;
      font-weight:bold;
    }
  }
`