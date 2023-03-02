import { MdArrowBackIos } from 'react-icons/md';
import { GoBackLink } from './GoBack.styled';

export const GoBack = ({ goBackLink }) => {
  return (
    <GoBackLink to={goBackLink}>
      <MdArrowBackIos size={20} />
      Go back
    </GoBackLink>
  );
};
