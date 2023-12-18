import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [result, setResult] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [checkButtonClicked, setCheckButtonClicked] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setResult(null);
    setCheckButtonClicked(false);
  };

  const handleCheckPassword = () => {
    fetch('http://localhost:5000/api/checkPassword', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setResult(data);
        setCheckButtonClicked(true);
      })
      .catch((error) => console.error('Error checking password:', error));
  };

  const renderErrorMessage = (condition, message) =>
    condition && <p className="flex gap-2 items-center text-white font-light">{message}{<FaTimes color="red" className='mt-1' />}</p>;

  const renderResultMessage = () => {
    if (!checkButtonClicked) {
      return null;
    }

    if (password.length < 6) {
      return <p className="flex gap-2 items-center text-white font-light">Includes at least 6 characters{<FaTimes color="red" className='mt-1' />}</p>;
    }

    if (result.steps) {
      return (
        <p className="mb-2 text-lg font-normal text-red-500">
          Steps required to make the password strong: {result.steps}
        </p>
      );
    }

    return <p className="rounded-md px-4 py-2 bg-green-700 mb-2 text-lg font-medium text-white">Nice Job, Your Password is strong <span>👌</span></p>;
  };

  const renderCheckButtonClasses = () =>
    `w-2/4 px-4 py-2 text-white ${password ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500'} rounded-md focus:outline-none`;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-backgrounda  bg-cover backdrop-blur-md backdrop-brightness-200">
      <div className="flex flex-col w-full h-full px-4 py-10 items-center shadow-lg  sm:p-24 bg-clip-padding border border-gray-700" style={{ backdropFilter: "blur(20px)" }}>
        <div className="w-2/4 items-center justify-center mb-4 px-3 py-2 text-lg text-gray-700 placeholder-gray-500 bg-white   rounded-md focus:outline-none focus:border-blue-500 ">
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={handlePasswordChange}
            placeholder='Password'
            maxLength="20"
            className="w-11/12 border-none focus:outline-none"
          />
          <button
            className="absolute items-center pt-1.5 text-gray-600"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <FaEyeSlash className="text-gray-500" /> : <FaEye className="text-gray-500" />}
          </button>
        </div>
        <button onClick={handleCheckPassword} disabled={!password} className={renderCheckButtonClasses()}>
          Check
        </button>

        {result !== null && (
          <div className="w-2/4 mt-5 ">
            {renderResultMessage()}
            {renderErrorMessage(result?.checks?.noLowerCase, 'Includes lowercase letter')}
            {renderErrorMessage(result?.checks?.noUpperCase, 'Includes uppercase letter')}
            {renderErrorMessage(result?.checks?.noDigit, 'Includes a digit')}
            {renderErrorMessage(result?.checks?.hasConsecutiveCharacters, "Have consecutive characters")}
            {renderErrorMessage(result.checks.hasThreeRepeatingCharacters, 'Have repeating characters')}
          </div>
        )}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
