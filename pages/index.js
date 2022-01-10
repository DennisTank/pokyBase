import Layout from "../components/Layout";
import Link from "next/link";

export default function Home({ mainData }) {
  return (
    <Layout title="PokyBase">
      <div className="grid grid-cols-2 gap-2">
        {mainData.map((pokemon, index) => {
          return (
            <div key={index} className="">
              <Link href={`/pokemon?id=${index + 1}`}>
                <a className="border w-auto h-fit p-3 my-2 flex rounded-md capitalize bg-white drop-shadow-xl">
                  <img
                    className=" w-40 h-40 mr-2"
                    src={pokemon.image}
                    alt={pokemon.name}
                  />
                  <div className="flex flex-col">
                    <span className=" text-black font-bold ">{`#${
                      index + 1
                    }`}</span>
                    <h3 className="text-2xl font-bold">{pokemon.name}</h3>
                  </div>
                </a>
              </Link>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=20`);
    const resData = await res.json();
    const mainData = resData.results.map((i, index) => {
      const urlIndex = ("00" + (index + 1)).slice(-3);
      const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${urlIndex}.png`;
      return {
        ...i,
        image,
      };
    });

    return {
      props: { mainData },
    };
  } catch (err) {
    console.log(err.message);
  }
};
