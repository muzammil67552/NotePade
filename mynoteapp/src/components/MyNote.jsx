import { useState } from 'react';
import { IoIosAdd } from "react-icons/io";

const MyNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const [message, setMessage] = useState(""); // State to track the success message

    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const addEvent = (event) => {
        event.preventDefault(); // Prevents the default form submission behavior
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
        setMessage("Your note has been saved!"); // Set the success message
        setTimeout(() => {
            setMessage(""); // Clear the message after 3 seconds
        }, 3000);
    };

    return (
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
            <form className='w-full max-w-md bg-white p-6 rounded-lg shadow-lg'>
                <h2 className='text-2xl font-bold mb-4 text-gray-800'>Add a New Note</h2>
                <div className='mb-4'>
                    <input
                        type='text'
                        name="title"
                        value={note.title}
                        onChange={InputEvent}
                        placeholder='Title'
                        autoComplete='off'
                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <div className='mb-4'>
                    <textarea
                        name="content"
                        value={note.content}
                        onChange={InputEvent}
                        placeholder='Write Your Note...'
                        rows="4"
                        className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                </div>
                <button
                    onClick={addEvent}
                    className='w-full py-2 px-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-150 ease-in-out flex items-center justify-center'
                >
                    <IoIosAdd className='text-2xl' />
                    <span className='ml-2 text-lg font-semibold'>Add Note</span>
                </button>
                {message && (
                    <p className='mt-4 text-green-600 font-semibold'>{message}</p> // Display the success message
                )}
            </form>
        </div>
    );
};

export default MyNote;
