import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectVisibleContacts);

  const deleteBtn = e => dispatch(deleteContact(e.target.id));
  return (
    <>
      <ul className="contacts">
        {contacts.map(contact => (
          <li key={contact.id}>
            <span className="contacts-name">{contact.name}:</span>
            <span className="contacts-number">{contact.phone}</span>
            <button
              id={contact.id}
              className="contacts-del-btn"
              onClick={deleteBtn}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
