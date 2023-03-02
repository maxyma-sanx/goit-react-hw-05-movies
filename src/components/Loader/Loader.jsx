import PropTypes from 'prop-types';
import SyncLoader from 'react-spinners/SyncLoader';

export const Loader = ({ loading }) => {
  return (
    <>
      <SyncLoader
        color="#36d7b7"
        size={20}
        loading={loading}
        cssOverride={{
          position: 'fixed',
          top: '0',
          left: '0',
          bottom: '0',
          right: '0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
          width: '100vw',
          margin: 'auto',
          overflow: 'show',
          zIndex: '999',
        }}
      />
    </>
  );
};

Loader.propTypes = {
  loading: PropTypes.bool,
};
