import styled from 'styled-components';

export const MovieItem = styled.li`
  width: 200px;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.shadow.card};

  transition: transform ${({ theme }) => theme.animation.default};

  :hover {
    transform: scale(1.05);
  }
`;

export const MovieImg = styled.img`
  min-height: 300px;
  border-radius: 10px 10px 0 0;
  object-fit: cover;
`;

export const MovieDesc = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px;
`;
