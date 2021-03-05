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
			login: false,
			user: null
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
			loadLogout: () => {
				sessionStorage.removeItem("u_token");
				setStore({ user: null });
				setStore({ login: false });
			},

			addName: (id, type) => {
				let data = {};
				if (type == "planeta") {
					data = { planetas_id: id, personajes_id: null };
				} else {
					data = { planetas_id: null, personajes_id: id };
				}
				console.log(data, "data");
				fetch(
					"https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/users/" +
						getStore().user.id +
						"/favorites",
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						},
						body: JSON.stringify(data)
					}
				)
					.then(res => res.json())
					.then(data => {
						console.log(data);
						getActions().loadFav();
					});
			},

			deleteName: id => {
				fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/favorite/" + id, { method: "DELETE" })
					.then(res => res.json())
					.then(data => {
						console.log(data);
						getActions().loadFav();
					});
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
			},
			addUser: user => {
				setStore({ user: user });
			}
		}
	};
};

export default getState;
