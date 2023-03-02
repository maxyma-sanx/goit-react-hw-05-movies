import styled from 'styled-components';

export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  padding: 0 0 30px;
`;

export const CastItem = styled.li`
  width: 220px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.card};

  transition: transform ${({ theme }) => theme.animation.default};

  :hover {
    transform: scale(1.05);
  }
`;

export const CastImg = styled.img`
  min-height: 330px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const CastDescr = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
