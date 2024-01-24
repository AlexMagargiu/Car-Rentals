export default function AboutHeroIcons({ image, number, text }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 sm:gap-6">
      <img src={image}></img>
      <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-4">
        <p className="text-5xl font-bold">{number}</p>
        <p className="opacity-60 sm:max-w-[12px]">{text}</p>
      </div>
    </div>
  );
}
