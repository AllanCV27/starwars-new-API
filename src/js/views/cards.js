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
									src="https://i.pinimg.com/originals/43/47/53/4347539e1e4d8cc9b2e4d755c908a415.jpg"
									width="400"
									height="200"
									padding="5px"
									className="card-img-top"
									alt="..."
								/>
								<ul className="carac">
									<li>
										<i className="fab fa-jedi-order" />
										Gender: {element.gender}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Eye color: {element.eye_color}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Hair color: {element.hair_color}
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
									src="https://static.wikia.nocookie.net/esstarwars/images/7/73/Eaw_Ralltiir.jpg/revision/latest/top-crop/width/360/height/450?cb=20080427195351"
									width="400"
									height="200"
									padding="5px"
									className="card-img-top"
									alt="..."
								/>
								<ul className="carac">
									<li>
										<i className="fab fa-jedi-order" />
										Diameter: {element.diameter}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Gratity: {element.gravity}
									</li>
									<li>
										<i className="fab fa-jedi-order" />
										Terrain: {element.terrain}
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
