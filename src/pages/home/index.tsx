import PlanetSlider from "../../components/home/planetsSlider";

export default function Init() {
  return (
    <>
      <div className="w-full h-full flex justify-center bg-[url('../../assets/images/backgrounds/starrySky.jpeg')] bg-cover">
        <div className="container px-6 py-24">
          <PlanetSlider />
        </div>
      </div>
    </>
  );
}
