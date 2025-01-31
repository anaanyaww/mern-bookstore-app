import { Link } from 'react-router-dom'; //Link component is used for client-side navigation in a React app.Link changes the URL without refreshing the page, maintaining a smooth user experience.
import { BsArrowLeft } from 'react-icons/bs';// an icon (a leftward arrow) imported from the react-icons library, specifically from the Bootstrap Icons collection (bs).

const BackButton = ({ destination = '/' }) => { //takes a single destination prop,specifies where the button should navigate when clicked.
  return (
    <div className='flex'>
      <Link
        to={destination}
        className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit'
      >
        <BsArrowLeft className='text-2xl' />
      </Link>
    </div>
  );
};

export default BackButton;


/*
className='bg-sky-800 text-white px-4 py-1 rounded-lg w-fit':

Tailwind CSS classes are used here to style the button:

bg-sky-800: Background color (dark sky blue).
text-white: White text color.
px-4: Horizontal padding (space inside the button).
py-1: Vertical padding.
rounded-lg: Rounded corners for the button.
w-fit: Width adjusts to fit the content (the arrow).


*/