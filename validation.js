let required = property => {
    return v => !!v || `${property} is required`;
  };
  
  let numberOnly = () => {
    return v => /^[\d]+$/.test(v) || `Must be number only`;
  };
  
  let maxStart = propertyFinished => {
    return v => parseInt(v) < parseInt(propertyFinished) || `${propertyFinished}`;
  };
  
  let minFinished = propertyStart => {
    return v => parseInt(v) > parseInt(propertyStart) || `${propertyStart}`;
  };
  
  let minValue = (property, minValue) => {
    return v =>
      (v && parseFloat(v) >= minValue) ||
      `${property} must be greater than ${minValue}`;
  };
  
  let maxValue = (property, maxValue) => {
    return v =>
      (v && parseFloat(v) <= maxValue) ||
      `${property} must be less than ${maxValue}`;
  };
  
  let engLangOnly = () => {
    return v =>
      /^[a-zA-Z\s]+$/.test(v) || `Must be character in english language only`;
  };
  
  let thaiLangOnly = () => {
    return v =>
      /^[ก-ฮะ-์\s]+$/.test(v) || `Must be character in thai language only`;
  };
  
  let thai_engLanguage = property => {
    return v =>
      /^[a-zA-Zก-ฮะ-์\s]+$/.test(v) ||
      `${property} must be characters in thai language and english language only`;
  };
  
  let password = () => {
    return v =>
      /^([a-zA-Z0-9@$!%*?&%#._-]{8,})$/.test(v) ||
      `Password must have least 8 characters and mustn't have characters in thai language`;
  };
  
  let Length = property => {
    return v => (v && v.length == 5) || `${property} required just 5 characters`;
  };
  
  let checkLength = property => {
    return v =>
      (v && v.length >= 5) ||
      `${property} must be more than or equal 5 characters`;
  };
  
  let inLength = property => {
    return v =>
      (v && v.length >= 5 && v && v.length <= 15) ||
      `${property} must have least 5 characters and mustn't be more than 15 characters`;
  };
  
  let email = () => {
    return v =>
      /^([a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?)+$/.test(
        v
      ) || `Email must be valid`;
  };
  
  let phoneNumber = () => {
    return v =>
      /^([02]*-([0-9]{3})*-([0-9]{4})+$|^([0-9]{3})*-([0-9]{3})*-([0-9]{4}))+$|^(([02]+[0-9]{7})+$|^([0-9]{10}))+$/.test(
        v
      ) ||
      `Phone number must be valid (02XXXXXXX / 08XXXXXXXX / 09XXXXXXXX / 06XXXXXXXX)`;
  };
  
  let creditCard = () => {
    return v => /^([0-9]{16})+$/.test(v) || `Credit Card must have 16 numbers`;
  };
  
  let idCard = () => {
    return v =>
      /^(([0-9])*-([0-9]{4})*-([0-9]{5})*-([0-9]{2})*-([0-9]{1}))+$|^([0-9]{13})+$/.test(
        v
      ) || `Id Card must have 13 numbers (XXXXXXXXXXXXX)`;
  };
  
  let car_license_plate = () => {
    return v =>
      /^([ก-ฮ]{2})(\s)([0-9]{4})+$|^(([0-9])([ก-ฮ]{2}))(\s)([0-9]{4})+$/.test(
        v
      ) || `Car license plate must be valid (กข 1234) or (1กข 1234)`;
  };
  
  let idcard = property => {
    if (property != null && property.length == 13) {
      var result = idcard2(property);
      if (result === false) {
        return `Your Id Card is wrong`;
      } else {
        return true;
      }
    }
    return true;
  };
  
  let idcard2 = property => {
    if (property.substring(0, 1) == 0) {
      return false;
    } 
    for (var i = 0, sum = 0; i < 12; i++) {
      sum += parseInt(property.charAt(i)) * (13 - i);
    }
    if (11 - (sum % 11) != parseInt(property.charAt(12))) {
      return false;
    }
  };
  
  let fixNumber = (property1, property2, value1, value2) => {
    if (parseInt(value2) <= parseInt(value1)) {
      return `${property1} field must be more than ${property2} field`;
    } else {
      return true;
    }
  };

  let text = () => {
    return v =>
      /^[a-zA-Zก-ฮะ-์-/;.,_()\s]+$/.test(v) ||
      `Must be character in thai and english language and have special character is - / ; . , _ ()`;
  };

  let text_num = () => {
    return v =>
      /^[a-zA-Z0-9ก-ฮะ-์-/;.,_()\s]+$/.test(v) ||
      `Must be character in thai and english language, number and special character is - / ; . , _ ()`;
  };
  
  module.exports = {
    required,
    numberOnly,
    minValue,
    maxValue,
    minFinished,
    maxStart,
    engLangOnly,
    thaiLangOnly,
    thai_engLanguage,
    password,
    Length,
    checkLength,
    inLength,
    email,
    phoneNumber,
    creditCard,
    car_license_plate,
    idCard,
    idcard,
    idcard2,
    fixNumber,
    text,
    text_num
  };