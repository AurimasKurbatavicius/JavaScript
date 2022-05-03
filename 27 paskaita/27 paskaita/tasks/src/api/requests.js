const getPokemon = async (url) => {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (err) {
		console.log(err);
	}
};
export { getPokemon };
const n = 5;
n.toString()