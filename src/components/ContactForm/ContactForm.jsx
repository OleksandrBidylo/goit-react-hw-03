import { ErrorMessage, Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("required!"),
    number: Yup.string()
      .min(3, "Too short!")
      .max(50, "Too long!")
      .required("required!"),
  });

  const handleSubmit = (values, { resetForm }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    onAddContact(newContact);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className={s.form}>
          <span>
            Name
            <Field className={s.field} name="name" />
            <ErrorMessage
              name="name"
              component="span"
              className={s.ErrorMessage}
            />
          </span>
          <span>
            Number
            <Field className={s.field} name="number" />
            <ErrorMessage
              name="number"
              component="span"
              className={s.ErrorMessage}
            />
          </span>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
