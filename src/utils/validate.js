export const checkValid = (email, password) => {
  const isGamil = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);
  const isPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
    password
  );

  if (!isGamil) return "Email ID is not Valid";
  if (!isPassword) return "Password is not Valid";

  return null;
};
