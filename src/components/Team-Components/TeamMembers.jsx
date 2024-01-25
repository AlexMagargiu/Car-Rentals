export default function TeamMembers({ image, name, position }) {
  return (
    <div className="flex flex-col max-w-xs mx-8 shadow-2xl lg:mx-0">
      <img src={image}></img>
      <div className="flex flex-col items-center py-6">
        <p className="text-xl font-bold">{name}</p>
        <p className="text-lg opacity-70">{position}</p>
      </div>
    </div>
  );
}
