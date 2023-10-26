export default function MemberList(props) {
  return (
    <div className="my-8 flex flex-col gap-4">
      <p>Team members previously added to projects</p>
      {props.children}
    </div>
  );
}
