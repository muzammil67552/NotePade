
import { MdDelete } from "react-icons/md";

const AddNote = (props) => {
    const deleteNote = () => {
        props.onDelete(props.id);
    };

    return (
        <div className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto mt-6 mb-6 p-4 shadow-2xl border-b overflow-hidden'>
            <div className='flex flex-col'>
                <h1 className='font-bold text-lg sm:text-xl md:text-2xl break-words'>{props.title}</h1>
                <p className='mt-2 text-sm sm:text-base md:text-lg break-words'>{props.content}</p>
                <button
                    onClick={deleteNote}
                    className='mt-4 text-2xl sm:text-3xl md:text-4xl text-blue-900 hover:text-blue-700 flex justify-between'
                >
                    <MdDelete />
                </button>
            </div>
        </div>
    );
};

export default AddNote;
