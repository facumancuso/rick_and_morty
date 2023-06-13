export const validateForm = (userData) => {
  const { email, password } = userData;
  const newErrors = {};

  if (!email) {
    newErrors.email = "El campo de email no puede estar vacío.";
  } else if (!isValidEmail(email)) {
    newErrors.email = "El email ingresado no es válido.";
  } else if (email.length > 35) {
    newErrors.email = "El email no puede tener más de 35 caracteres.";
  }

  if (!password) {
    newErrors.password = "El campo de contraseña no puede estar vacío.";
  } else if (password.length < 6 || password.length > 10) {
    newErrors.password = "La contraseña debe tener entre 6 y 10 caracteres.";
  } else if (!containsNumber(password)) {
    newErrors.password = "La contraseña debe contener al menos un número.";
  }

  return newErrors;
};
const isValidEmail = (email) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const containsNumber = (str) => {
  const regex = /\d/;
  return regex.test(str);
};
