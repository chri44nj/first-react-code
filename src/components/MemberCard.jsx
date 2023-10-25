import Avatar from "./Avatar";
import Button2 from "./Button2";

export default function MemberCard(props) {
  return (
    <div className="member-card">
      <div className="avatar-details">
        <Avatar img={props.img}></Avatar>
        <div className="name-title">
          <h4>{props.name}</h4>
          <p>{props.title}</p>
        </div>
      </div>
      <div className="icon-btn">
        <p>+</p>
        <Button2 btnText="Invite"></Button2>
      </div>
    </div>
  );
}
