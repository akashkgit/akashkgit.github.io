import React from 'react';
import PropTypes from 'prop-types';
import styles from './Python_comp.module.css';
import load from "../../img/load17.gif";

const Python_comp = () => (
  <div className={styles.Python_comp}>
     <center>
    <img src={load} alt="Error" className={styles.i} />
    
    <p className={styles.under}> Under Development. Explore other Routes or visit later!</p>
    </center>
  </div>
);

Python_comp.propTypes = {};

Python_comp.defaultProps = {};

export default Python_comp;
