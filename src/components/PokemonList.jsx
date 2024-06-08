import shortid from "shortid";

function PokemonList({ pokemon }) {
  return (
    <>
      {pokemon.map((p) => (
        <div key={shortid.generate()}>{p.name}</div>
      ))}
    </>
  );
}

export default PokemonList;
