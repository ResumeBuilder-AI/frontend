import { useRef, useState } from "react";


export function TextAreaBox({submit}){
  const [shift, setShift] = useState(false);
  const textAreaRef = useRef();

  const handleEnter = (input) => {
    if(input.key == 'Shift') setShift(true);
    if (!shift && input.key === 'Enter') {
      input.preventDefault();
      submit(input.target.value);
      textAreaRef.current.value = "";
    }

    if(shift){
      setShift(false);
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
        <textarea
            id="ask_ques"
            ref={textAreaRef}
            onSubmit={submit}
            onKeyDown={handleEnter}
            type="text"
            placeholder="Ask Question..."
            className="w-full px-4 py-2 border-none rounded focus:outline-none focus:ring focus:border-blue-300"
        />
    </div>
  );
};
