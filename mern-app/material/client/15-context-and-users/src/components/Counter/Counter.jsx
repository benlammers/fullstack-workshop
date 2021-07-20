import { useState } from "react";

import "./Counter.scss";

const Counter = () => {
   const [count, setCount] = useState(0);

   const handleAdd = () => {
      setCount(count + 1);
      console.log("Count: ", count);
   };

   const handleSubtract = () => {
      setCount(count - 1);
      console.log("Count: ", count);
   };

   return (
      <div className='counter'>
         <h3>Count: {count}</h3>
         <div className='counter-buttons'>
            <button onClick={handleAdd}>Add 1</button>
            <button onClick={handleSubtract}>Subtract 1</button>
         </div>
         {count > 10 ? <span>The count is greater than 10!</span> : <span>The count is less than or equal to 10</span>}
         {count === 10 && <span>The count is at 10!</span>}
      </div>
   );
};

export default Counter;
