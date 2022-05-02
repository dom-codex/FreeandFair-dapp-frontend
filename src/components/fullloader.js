import React from 'react';
import Loader from './loader.js';
const styles = {
  main: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    backdropFilter: 'blur(3px)',
    zIndex: 1000,
  },
  container: {
    width: '100%',
    height: '100%',
    display: 'grid',
    placeItems: 'center',
  },
};
const FullScreenLoader = () => {
  return (
    <section style={styles.main}>
      <div style={styles.container}>
        <Loader />
      </div>
    </section>
  );
};
export default FullScreenLoader;
