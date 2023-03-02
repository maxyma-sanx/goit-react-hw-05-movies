import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

export const Form = styled.form`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  max-width: 600px;
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 10px;
`;

export const SearchIcon = styled(BsSearch)`
  position: absolute;
  left: 10px;
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.animation.default};

  :hover,
  :focus {
    opacity: 0.8;
  }
`;

export const FormInput = styled.input`
  padding: 10px 40px;
  border: none;
  border-radius: 10px;
  background-color: inherit;
  outline: none;
`;

export const FormBtn = styled.button`
  padding: 10px 20px;
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.accent};
  cursor: pointer;
  transition: opacity ${({ theme }) => theme.animation.default};

  :hover,
  :focus {
    opacity: 0.8;
  }
`;
