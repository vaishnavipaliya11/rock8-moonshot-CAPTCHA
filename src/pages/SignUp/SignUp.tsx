import { Button } from "../../components/button/Button";
import { Input } from "../../components/Input/Input";
import "../../styles.css"
import "./signUp.css"

const SignUp = () => {
  const feildsArr = [
    {
      name: "Name",
      placeholder: "Enter your name",
    },
    {
      name: "Email",
      placeholder: "Enter your email",
    },
    {
      name: "Password",
      placeholder: "Enter your password",
    },
  ];
  return (
    <div className="sign-up-container common-col j-center a-center">
      {feildsArr.map(({ name, placeholder }) => {
        return (
          <Input
            
            label={name}
            placeholder={placeholder}
            name={name}
            onChange={() => "void"}
          />
        );
      })}
      <Button  onClick={()=> "btn"}> Submit </Button>
    </div>
  );
};
export { SignUp };
