import Button from "./Button";
export default function SignupForm(props) {
  return (
    <div className="mt-4 flex w-full items-center justify-between gap-4">
      <input
        className="flex-1 rounded border-2 border-solid border-gray-300 px-3 py-1"
        type="email"
        id="email"
        name="email"
        placeholder="Enter an email"
      ></input>
      <Button btnText="Send Invite"></Button>
    </div>
  );
}
