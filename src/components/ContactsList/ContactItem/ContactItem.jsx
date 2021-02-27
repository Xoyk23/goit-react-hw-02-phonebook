import React from 'react';
import PropTypes from 'prop-types';

import styles from './ContactItem.module.css';

const ContactItem = ({ name, number }) => {
  return (
    <div className={styles.contact}>
      <span>{name}</span>
      <span>{number}</span>
    </div>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactItem;
