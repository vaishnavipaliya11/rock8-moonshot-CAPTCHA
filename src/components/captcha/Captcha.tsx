import { useEffect, useState } from "react";
import { generateCaptcha } from "../../utils/generateCaptcha";
import { Input } from "../Input/Input";
import "./captcha.css";
const Captcha = ({
  setIsCaptchaValidated,
  refresh,
}: {
  setIsCaptchaValidated: (status: boolean) => void;
  refresh: number;
}) => {
  const [captchaStr, setCaptchaStr] = useState("");
  const [inputCaptcha, setInputCaptcha] = useState("");

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputCaptcha(e.target.value);
  };

  useEffect(() => {
    setCaptchaStr(generateCaptcha(5));
    setInputCaptcha("");
  }, [refresh]);

  useEffect(() => {
    if (inputCaptcha === captchaStr && captchaStr !== "") {
      setIsCaptchaValidated(true);
    }
  }, [inputCaptcha, captchaStr]);

  return (
    <div className="captcha-container ">
      <div className="captcha-sub-container ">
        <svg
          height="30"
          width="140"
          className="captcha"
          xmlns="http://www.w3.org/1999/xlink"
        >
          <text x="45" y="20">
            {captchaStr}
          </text>
        </svg>

        <button
          className="captch-refresh"
          onClick={() => setCaptchaStr(generateCaptcha(5))}
        >
          <i className="fas fa-sync-alt"></i>
        </button>
      </div>
      <Input
        value={inputCaptcha}
        placeholder="Enter the above CAPTCHA"
        onChange={inputHandler}
      />
    </div>
  );
};

export { Captcha };
