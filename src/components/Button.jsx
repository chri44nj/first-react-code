export default function Button(props) {
  return (
    <button className="rounded border-2 border-blue-600 bg-blue-600 px-3 py-1 text-white hover:border-transparent hover:bg-gray-300">
      {props.btnText}
    </button>
  );
}
