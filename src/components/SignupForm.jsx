import Button from "./Button";
export default function SignupForm(props) {
  return (
    <div className="email-btn">
      <input type="email" id="email" name="email" placeholder="Enter an email"></input>
      <Button btnText="Send Invite"></Button>
    </div>
  );
}
