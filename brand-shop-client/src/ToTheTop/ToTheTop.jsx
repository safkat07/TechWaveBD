import { FiArrowUp } from 'react-icons/fi';
import  { useState, useEffect } from 'react';


const ToTheTop = () => {
   
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Add an event listener to track the scroll position
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight / 2) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Remove the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleTop = () => {
    window.scrollTo(0, 0);
    
  };

  return (
    <div  className={`fixed bottom-5  right-10 ${showButton ? 'block' : 'hidden'}`}>
      <button onClick={handleTop} className="btn btn-success hover:btn-warning">
        <FiArrowUp className="text-2xl" />
      </button>
    </div>
  );
};

export default ToTheTop;
