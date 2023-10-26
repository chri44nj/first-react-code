export default function Button2(props) {
  return (
    <button className="rounded border-2 border-transparent bg-transparent px-3 py-1 hover:bg-gray-300">
      {props.btnText}
    </button>
  );
}
