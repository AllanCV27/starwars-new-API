const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			people: null,
			planets: null,
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadPlanets: () => {
				//fetch().then().then(data => setStore({ "foo": data.bar }))

				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/planets/")
					.then(res => res.json())
					.then(async data => {
						console.log(data);
						let arrayResults = data.results;
						let planetsArray = [];

						for (let i = 0; i < arrayResults.length; i++) {
							const res = await fetch(arrayResults[i].url);
							const json = await res.json();
							const data = await json.result.properties;
							planetsArray.push(data);
						}
						console.log(planetsArray);
						setStore({ planets: planetsArray });
					});
			},

			loadPeople: () => {
				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/admin/personajes/")
					.then(res => res.json())
					.then(async data => {
						let arrayResults = data.results;
						let peopleArray = [];

						for (let i = 0; i < arrayResults.length; i++) {
							const res = await fetch(arrayResults[i].url);
							const json = await res.json();
							const data = await json.result.properties;

							peopleArray.push(data);
						}

						console.log(peopleArray);
						setStore({ people: peopleArray });
					});
			},

			addName: name => {
				const store = getStore();
				store.favorites.push(name);
				setStore({ favorites: [...store.favorites] });
			},

			deleteName: index => {
				const favoritos = getStore().favorites;
				favoritos.splice(index, 1);
				setStore({ favorites: [...favoritos] });
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
