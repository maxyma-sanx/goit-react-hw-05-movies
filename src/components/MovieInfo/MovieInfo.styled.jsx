import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: auto min-content auto;
  grid-template-rows: min-content min-content min-content min-content min-content min-content min-content 1fr;
  grid-template-areas:
    'img button title'
    'img score score'
    'img overview overview'
    'img overviewDesc overviewDesc'
    'img genres genres'
    'img genresDesc genresDesc'
    'img cast review'
    'img . .';
  gap: 15px;
  padding: 30px 0;
`;

export const MovieImg = styled.img`
  grid-area: img;
  max-height: 400px;
`;

export const MovieTitle = styled.h2`
  grid-area: title;
  align-self: center;
`;

export const Score = styled.p`
  grid-area: score;
`;

export const OverviewTitle = styled.h3`
  grid-area: overview;
`;

export const OverviewDesc = styled.p`
  grid-area: overviewDesc;
`;

export const GenresTitle = styled.h3`
  grid-area: genres;
`;

export const GenresDesc = styled.p`
  grid-area: genresDesc;
`;

export const CastLinkStyled = styled(NavLink)`
  grid-area: cast;
  justify-self: start;
  padding: 8px 25px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: 500;
  border: 1px solid black;
  border-radius: 10px;

  transition: color ${({ theme }) => theme.animation.default};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

export const ReviewLinkStyled = styled(NavLink)`
  grid-area: review;
  justify-self: start;
  padding: 8px 25px;
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.size.medium};
  font-weight: 500;
  border: 1px solid black;
  border-radius: 10px;

  transition: color ${({ theme }) => theme.animation.default};

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.colors.accent};
  }

  &.active {
    color: ${({ theme }) => theme.colors.accent};
  }
`;
