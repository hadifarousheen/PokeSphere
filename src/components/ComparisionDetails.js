const ComparisionDetails = ({ pokemondata }) => {
  console.log(pokemondata);
  const types = pokemondata?.types.map((typeObj) => typeObj.type.name);
  const abilities = pokemondata.abilities.map(
    (typeobj) => typeobj.ability.name
  );
  return (
    <div className="mx-2 w-fit p-3 rounded-2xl shadow-2xl shadow-blue-400 mt-8 ">
      <span className="text-xl bg-blue-200 p-0.5 font-bold rounded-lg">
        #{pokemondata.id}
      </span>
      <span className="text-2xl font-bold mx-2 ml-auto text-blue-950">{pokemondata?.name}</span>
      <img className="m-auto h-30" src={pokemondata.sprites.front_shiny} />
      <h1 className="text-xl font-bold underline">Sprites</h1>
      <div className="flex">
        <img className="m-auto h-30" src={pokemondata.sprites.front_default} />
        <img className="m-auto h-30" src={pokemondata.sprites.back_shiny} />
        <img className="m-auto h-30" src={pokemondata.sprites.back_default} />
      </div>
      <h2 className="text-xl text-center">
        <span className="font-bold text-blue-950">Height :</span> {pokemondata.height}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Weight :</span> {pokemondata.weight}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Base Experience : </span>
        {pokemondata.base_experience}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Types :</span> {types.join(" , ")}
      </h2>
      <h2 className="text-xl">
        <span className="font-bold">Abilitiess:</span> {abilities.join(" , ")}
      </h2>
    </div>
  );
};

export default ComparisionDetails;
