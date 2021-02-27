import React from 'react';
import PropTypes from 'prop-types';

import ContactsItem from './ContactItem';

import styles from './ContactsList.module.css';

const ContactsList = ({ contacts, deleteOnClick }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <ContactsItem name={name} number={number} />
          <button className={styles.button} id={id} onClick={deleteOnClick}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  deleteOnClick: PropTypes.func.isRequired,
};

export default ContactsList;
