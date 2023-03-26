import { useState } from "react";
import { toast } from "react-toastify";
import { Button } from "../../components/button/Button";
import { Captcha } from "../../components/captcha/Captcha";
import { Input } from "../../components/Input/Input";
import "../../styles.css";
import "./signUp.css";

const SignUp = () => {
  const [isCaptchaValidated, setIsCaptchaValidated] = useState(false);

  const [captchaRefreshCount, setCaptchaRefreshCount] = useState(0);

  const [formFeilds, setFormFeilds] = useState({
    Name: "",
    Email: "",
    Password: "",
  });

  const feildsArr = [
    {
      name: "Name",
      placeholder: "Enter your name",
      type: "text",
      accessor: formFeilds.Name,
    },
    {
      name: "Email",
      placeholder: "Enter your email",
      type: "email",
      accessor: formFeilds.Email,
    },
    {
      name: "Password",
      placeholder: "Enter your password",
      type: "password",
      accessor: formFeilds.Password,
    },
  ];

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormFeilds((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitHandler = () => {
    const { Name, Email, Password } = formFeilds;

    if (Name !== "" && Email !== "" && Password !== "") {
      if (isCaptchaValidated) {
        toast.success("Form Submitted");
        setCaptchaRefreshCount((prevData) => ++prevData);
        setFormFeilds({
          Name: "",
          Email: "",
          Password: "",
        });
      } else {
        toast.error("Enter Valid Captcha");
      }
    } else {
      toast.error("Enter form fields correctly!");
    }
  };

  return (
    <div className="sign-up-container common-col j-center a-center">
      {feildsArr.map(({ name, placeholder, type, accessor }) => {
        return (
          <Input
            label={name}
            placeholder={placeholder}
            name={name}
            type={type}
            value={accessor}
            onChange={inputChangeHandler}
          />
        );
      })}
      <Captcha
       
        setIsCaptchaValidated={setIsCaptchaValidated}
        refresh={captchaRefreshCount}
      />
      <Button onClick={submitHandler}> Submit </Button>
    </div>
  );
};
export { SignUp };
