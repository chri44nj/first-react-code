export default function MemberList(props) {
  return (
    <div className="member-list">
      <p>Team members previously added to projects</p>
      {props.children}
    </div>
  );
}
