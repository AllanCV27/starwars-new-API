import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
export const Cards = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="">
			<div>
				<h1>Characters</h1>
			</div>
			<div className="row first">
				{!!store.people &&
					store.people.map((element, index) => {
						return (
							<div key={index} className="cards col-2" style={{ width: 18 + "rem" }}>
								<img
									src={element.imagen}
									width="400"
									height="200"
									padding="5px"
									className="card-img-top"
									alt="..."
								/>
								<ul className="carac">
									<li>
										<i className="fab fa-jedi-order" />
										Genero: {element.genero}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Mundo de origen: {element.mundo_origen}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Altura: {element.altura}
									</li>
								</ul>
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<Link to={"/character/" + index}>
										<span href="#" className="btn btn-warning boton">
											Learn more!
										</span>
									</Link>
									<button
										onClick={() => actions.addName(element.name)}
										type="button"
										className="  cajaBoton btn btn-outline-warning float-right">
										<i className="far fa-heart text-center" id="corazon" />
									</button>
								</div>
							</div>
						);
					})}
			</div>
			<div>
				<h1>Planets</h1>
			</div>
			<div className="row second">
				{!!store.planets &&
					store.planets.map((element, index) => {
						return (
							<div key={index} className="cards col-2" style={{ width: 18 + "rem" }}>
								<img
									src={element.imagen}
									width="400"
									height="200"
									padding="5px"
									className="card-img-top"
									alt="..."
								/>
								<ul className="carac">
									<li>
										<i className="fab fa-jedi-order" />
										Diametro: {element.diametro}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Gravedad: {element.gravedad}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Terreno: {element.terreno}
									</li>
								</ul>
								<div className="card-body">
									<h5 className="card-title">{element.name}</h5>
									<Link to={"/planets/" + index}>
										<span href="#" className="btn btn-warning boton">
											Learn more!
										</span>
									</Link>
									<button
										onClick={() => actions.addName(element.name)}
										type="button"
										className="  cajaBoton btn btn-outline-warning float-right">
										<i className="far fa-heart text-center" id="corazon" />
									</button>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};
