import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  margin-top: 40px;
  margin-left: 100px;
  margin-right: 100px;
`;

export const BackLink = styled(Link)`
  display: block;
  margin-bottom: 20px;
  width: 50px;
  font-size: 12px;
  padding: 10px;
  border: 1px solid black;
  border-radius: 7px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  gap: 50px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 700px;
`;
