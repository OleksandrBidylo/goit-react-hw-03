import { useEffect, useState } from "react";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    const savedContacts = localStorage.getItem("contacts");
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  const handleFilterChange = (newText) => {
    setText(newText);
  };

  const handleAddContact = (newContact) => {
    setContacts((prev) => {
      const updatedContacts = [...prev, newContact];

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const handleDelete = (id) => {
    setContacts((prev) => {
      const updatedContacts = prev.filter((contact) => contact.id !== id);

      localStorage.setItem("contacts", JSON.stringify(updatedContacts));
      return updatedContacts;
    });
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(text.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm contacts={contacts} onAddContact={handleAddContact} />
      <SearchBox value={text} onChange={handleFilterChange} />
      <ContactList arr={filteredContacts} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
