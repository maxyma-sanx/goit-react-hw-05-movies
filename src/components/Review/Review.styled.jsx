import { FaUserSecret } from 'react-icons/fa';
import styled from 'styled-components';

export const ReviewList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 0 30px;
`;

export const ReviewItem = styled.li`
  display: grid;
  grid-template-columns: min-content 1fr;
  width: 100%;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.card};
`;

export const ReviewImg = styled(FaUserSecret)`
  align-self: center;
  height: 150px;
  width: 150px;
  padding: 10px;
`;

export const ReviewDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
  max-height: 200px;
  overflow-y: scroll;
`;

export const ReviewDescrInfo = styled.div`
  display: flex;
  gap: 30px;
`;
