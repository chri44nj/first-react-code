import "../App.css";
export default function Header(props) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <p>Icon</p>
      <h3>Add team members</h3>
      <p>
        You haven't added any team members to your project yet. As the owner of
        this project, you can manage team member permissions.
      </p>
      {props.children}
    </div>
  );
}
