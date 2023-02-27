import { ContactListItem } from '../ContactListItem/ContactListItem';
import css from './ContactList.module.css';

import PropTypes from 'prop-types';

export const ContactList = ({ removeContact, filteredContacts }) => {
  return (
    <ul>
      { filteredContacts.map(({ id, name, number }) => {
          return (
            <li className={css.item} key={id}>
              <ContactListItem
                name={name}
                number={number}
                id={id}
                removeContact={removeContact}
              />
            </li>
          );
        })}
    </ul>
  );
};

ContactList.propTypes = {
filteredContacts: PropTypes.array,
id: PropTypes.string,
name: PropTypes.string,
number: PropTypes.string,
}