
export function Button({ buttonText, width, height }){
  const buttonStyle = {
    width: width || 'auto',
    height: height || 'auto',
  };

  return (
    <button
      className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
      style={buttonStyle}
    >
      {buttonText || 'Submit'}
    </button>
  );
};

