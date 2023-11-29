import React, { useState, useEffect } from 'react';

const Factorial = () => {
  const [factorial, setFactorial] = useState(null);

  useEffect(() => {
    const calculateFactorial = (num) => {
      if (num < 0) {
        alert('Factorial is not defined for negative numbers');
        return;
      }

      let result = 1;
      for (let i = 2; i <= num; i++) {
        result *= i;
      }

      alert(`The factorial of ${num} is: ${result}`);
      setFactorial(result);
    };

    calculateFactorial(5); 

  }, []); // 

  return (
    <div className="factorial-container">
    
      {factorial !== null && <p>Factorial: {factorial}</p>}
    </div>
  );
};

export default Factorial;

