export default function CarStatsLine(props) {
  return (
    <div className="flex justify-between text-center border-b-2 border-primary_text">
      <p className="w-36 border-l-2 border-primary_text py-2">{props.text}</p>
      <div className="border-r-2 border-primary_text h-6 self-center"></div>
      <p className="w-36 border-r-2 border-primary_text py-2">
        {props.information}
      </p>
    </div>
  );
}
