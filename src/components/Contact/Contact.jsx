import { FaPhoneAlt, FaUser } from "react-icons/fa";
import s from "./Contact.module.css";

const Contact = ({ id, name, number, handleDelete }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.info}>
        <span className={s.wrap}>
          <FaUser />
          {name}
        </span>
        <span className={s.wrap}>
          <FaPhoneAlt />
          {number}
        </span>
      </div>
      <button onClick={() => handleDelete(id)}>Delete</button>
    </div>
  );
};

export default Contact;
