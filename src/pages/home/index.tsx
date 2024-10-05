import planets from "../../data/home/data.json"

export default function Init(){
  return(
    <>
      <div className="h-full bg-black">
        <div className="flex">
          {planets.map((planet: {name: string, image: string}) => (
              <img src={planet.image} alt="" className="w-full h-full rounded-full"/>
          ))}
        </div>  
      </div>
    </>
  )
}