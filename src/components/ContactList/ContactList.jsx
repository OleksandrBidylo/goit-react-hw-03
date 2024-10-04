import s from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ arr, handleDelete }) => {
  return (
    <div className={s.wrap}>
      {arr.map(({ id, name, number }) => (
        <Contact
          id={id}
          key={id}
          name={name}
          number={number}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default ContactList;
