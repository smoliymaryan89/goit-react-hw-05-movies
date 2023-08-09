import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  align-items: center;
  gap: 20px;

  li {
    height: 210px;
    img {
      text-align: center;
      margin-left: auto;
      margin-right: auto;
    }
    h2 {
      font-size: 15px;
      margin-bottom: 5px;
      text-align: center;
    }
    p {
      font-size: 10px;
      text-align: center;
    }
  }
`;
