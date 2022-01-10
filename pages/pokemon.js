import Layout from "../components/Layout";

export default function pokeman({ pokemon }) {
  if (!pokemon) {
    return <div>404</div>;
  }
  return (
    <Layout title={pokemon.name}>
      <div className="text-4xl text-center font-extrabold bg-red-500 p-5 mb-5 rounded-md capitalize">
        {pokemon.name}
      </div>
      <div className="flex">
        <img
          className=" w-40 h-40 mr-2 border rounded-md bg-white drop-shadow-lg "
          src={pokemon.image}
          alt={pokemon.name}
        />
        <div className=" w-full flex flex-col border rounded-md bg-black drop-shadow-lg text-white">
          <div className="ml-4 my-2 text-lg font-bold grid grid-cols-2 gap-2 capitalize p-2 border border-white rounded-md w-fit">
            {pokemon.stats.map((i, index) => {
              return (
                <div key={index}>
                  {i.stat.name}:{" "}
                  <span className="text-yellow-300">{i.base_stat}</span>
                </div>
              );
            })}
            <div>
              Weight: <span className="text-yellow-300">{pokemon.weight}</span>
            </div>
            <div>
              Height: <span className="text-yellow-300">{pokemon.height}</span>
            </div>
          </div>

          <div className="ml-4 my-2 text-lg font-bold ">Types</div>
          <div className="grid grid-flow-col auto-cols-max ">
            {pokemon.types.map((i, index) => {
              return (
                <div
                  key={index}
                  className=" ml-4 my-2 p-2 border border-white rounded-md w-fit"
                >
                  {i.type.name}
                </div>
              );
            })}
          </div>

          <div className="ml-4 my-2 text-lg font-bold">Abilities</div>
          <div className="grid grid-flow-col auto-cols-max">
            {pokemon.abilities.map((i, index) => {
              return (
                <div
                  key={index}
                  className=" ml-4 my-2 p-2 border border-white rounded-md w-fit"
                >
                  {i.ability.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { id, name } = query;
  try {
    let res;
    if (id) {
      res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    } else if (name) {
      res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    }
    const resData = await res.json();
    if (!resData) {
      return {
        props: {},
      };
    }
    const urlIndex = ("00" + resData.id).slice(-3);
    const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${urlIndex}.png`;
    resData.image = image;

    return {
      props: {
        pokemon: resData,
      },
    };
  } catch (err) {
    console.log(err.message);
    return {
      props: {},
    };
  }
};
