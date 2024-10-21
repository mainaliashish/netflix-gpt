export const checkValidData = (email, password) => {
    const emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const isEmailValid = emailPattern.test(email);
    const passwordPattern = /^[A-Za-z0-9]{6,}$/;
    const isPasswordValid = passwordPattern.test(password)
    const fullNamePattern = /^[a-zA-Z]+ [a-zA-Z]+$/;
    const isFullNameValid = passwordPattern.test(fullNamePattern)

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";
    if (!isFullNameValid) return "Full Name is not valid";

    return null;
};