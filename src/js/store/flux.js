import { Login } from "../views/login";

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
			favorites: [],
			login: false
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			loadPlanets: () => {
				//fetch().then().then(data => setStore({ "foo": data.bar }))
				//fetch('http://example.com/movies.json')
				//.then(response => response.json())
				//.then(data => console.log(data));
				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/planets/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						let arrayResults = data.message;
						setStore({ planets: arrayResults });
					});
			},

			loadPeople: () => {
				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/people/")
					.then(res => res.json())
					.then(data => {
						console.log(data);
						let arrayResults = data.message;
						setStore({ people: arrayResults });
					});
			},

			loadFav: () => {
				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/users/favorites", {
					method: "GET",
					headers: {
						"Content-Type": "application/json",
						Authorization: "Bearer " + sessionStorage.getItem("u_token")
					}
				})
					.then(res => res.json())
					.then(data => {
						console.log("Success:", data);
						let arrayResults = data.message;
						setStore({ favorites: arrayResults });
					});
			},

			addName: name => {
				const store = getStore();
				store.favorites.push(name);
				setStore({ favorites: [...store.favorites] });
			},

			deleteName: id => {
				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/favorite/" + id)
					.then(res => res.json())
					.then(data => {
						console.log(data);
					});
				getActions().loadFav();
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
