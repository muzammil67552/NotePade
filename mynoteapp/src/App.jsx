import  { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MyNote from './components/MyNote';
import AddNote from './components/AddNote';

const App = () => {
  const [addItem, setAddItem] = useState([]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };

  const deleteNote = (id) => {
    setAddItem((prevData) =>
      prevData.filter((note, index) => index !== id)
    );
  };

  return (
    <>
      <div>
        <Header />
        <MyNote passNote={addNote} />
        {addItem.map((value, index) => {
          return (
            <AddNote
              key={index}
              id={index}
              title={value.title}
              content={value.content}
              onDelete={deleteNote}
            />
          );
        })}
        <Footer />
      </div>
    </>
  );
};

export default App;
