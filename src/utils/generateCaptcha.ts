const generateCaptcha = (captchaLength: number) => {
  const randomChar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$@&*!";

  let uniqueCaptchaChar = "";

  for (let i = 0; i < captchaLength; i++) {
    uniqueCaptchaChar += randomChar.charAt(Math.random() * randomChar.length);
  }
  return uniqueCaptchaChar
};
export { generateCaptcha };
