import PropTypes from 'prop-types';
import { Wrapper } from './Container.styled';

const Container = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
