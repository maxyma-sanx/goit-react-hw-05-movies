import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

export const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};
