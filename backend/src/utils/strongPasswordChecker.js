function hasConsecutiveCharacters(password) {
  let consecutiveCount = 0;

  for (let i = 0; i < password.length - 2; i++) {
    const currentCharCode = password.charCodeAt(i);
    const nextCharCode = password.charCodeAt(i + 1);
    const secondNextCharCode = password.charCodeAt(i + 2);

    if (
      nextCharCode === currentCharCode + 1 &&
      secondNextCharCode === currentCharCode + 2
    ) {
      consecutiveCount++;
    }
  }

  return consecutiveCount;
}

function hasThreeRepeatingCharacters(password) {
  let repeatingCount = 0;

  for (let i = 0; i < password.length - 2; i++) {
    const currentChar = password[i];
    const nextChar = password[i + 1];
    const thirdChar = password[i + 2];

    if (currentChar === nextChar && nextChar === thirdChar) {
      repeatingCount++;
    }
  }
  return repeatingCount;
}

const strongPasswordChecker = (password) => {
  const hasLowerCase = (str) => /[a-z]/.test(str);
  const hasUpperCase = (str) => /[A-Z]/.test(str);
  const hasDigit = (str) => /\d/.test(str);

  const minStepsToStrong = (password) => {
    let steps = 0;
    let repeatingCount = 0;

    if (password.length < 6) {
      steps += 6 - password.length;
    }
    let checks = {};
    if (password.length !== 1) {
      if (!hasLowerCase(password)) {
        steps++;
        checks.noLowerCase = true;
      }
      if (!hasUpperCase(password)) {
        steps++;
        checks.noUpperCase = true;
      }
      if (!hasDigit(password)) {
        steps++;
        checks.noDigit = true;
      }
      const loweredPass = password.toLowerCase();
      const consecutiveCount = hasConsecutiveCharacters(loweredPass);
      if (consecutiveCount > 0) {
        steps += consecutiveCount;
        checks.hasConsecutiveCharacters = true;
      }
      repeatingCount = hasThreeRepeatingCharacters(loweredPass);
      if (repeatingCount > 0) {
        steps += repeatingCount;
        checks.hasThreeRepeatingCharacters = true;
      }

    }
    return {
      steps,
      checks,
      isStrong: steps ? false : true,
    };
  };

  return minStepsToStrong(password);
};

module.exports = strongPasswordChecker;
