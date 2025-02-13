export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
  return passwordRegex.test(password);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phone);
};
export const validate = (name: string, value: string): string => {
    switch (name) {
      case "name":
        return !value
          ? "Name is required"
          : value.length < 2
          ? "Name must be at least 2 characters long"
          : "";
      case "email":
        return !value
          ? "Email is required"
          : !validateEmail(value)
          ? "Please enter a valid email"
          : "";
      case "phone":
        return !value
          ? "Phone number is required"
          : !validatePhone(value)
          ? "Please enter a valid 10-digit phone number"
          : "";
      case "password":
        return !value
          ? "Password is required"
          : !validatePassword(value)
          ? "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
          : "";
      default:
        return "";
    }
  };
