import Avatar from "./Avatar";
import Button2 from "./Button2";

export default function MemberCard(props) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <Avatar img={props.img}></Avatar>
        <div className="name-title">
          <h4 className="text-2xl font-bold">{props.name}</h4>
          <p>{props.title}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <p>+</p>
        <Button2 btnText="Invite"></Button2>
      </div>
    </div>
  );
}
