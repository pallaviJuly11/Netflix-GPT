/** @format */

export const checkValidEmail = (email) => {
  const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  let errMessage = "";

  if (!isEmailValid) {
    errMessage = "Enter Valid Email";
  }
  return errMessage;
};
export const checkValidPassword = (password) => {
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  let errMessage = "";

  if (!isPasswordValid) {
    errMessage = "Enter Valid Password";
  }
  return errMessage;
};
