import React, { useContext } from "react";
import "../../styles/home.scss";
import { Context } from "../store/appContext";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
export const Character = () => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	console.log(store.people[params.id]);
	return (
		<div>
			<div className="jumbotron row">
				<img
					className="cardImg col-6"
					src="https://www.tonica.la/__export/1583623659973/sites/debate/img/2020/03/07/baby_yoda_2.jpg_1902800913.jpg"
					width="400px"
					height="200"
					padding="5px"
					alt="..."
				/>
				<div className="lead col-6">
					<h1 className="nombres">{store.people[params.id].name}</h1>
					<p>
						La nave en la que viaja la princesa Leia es capturada por las tropas imperiales al mando del
						temible Darth Vader. Antes de ser atrapada, Leia consigue introducir un mensaje en su robot
						R2-D2, quien acompañado de su inseparable C-3PO logra escapar. Tras aterrizar en el planeta
						Tattooine son capturados y vendidos al joven Luke Skywalker, quien descubrirá el mensaje oculto
						que va destinado a Obi Wan Kenobi, maestro Jedi a quien Luke debe encontrar para salvar a la
						princesa.
					</p>
				</div>
				<hr className="linea" />
				<div className="caracteristicas">
					<ul className="list row">
						<li className="charaster col-3">Birth year: {" " + store.people[params.id].birth_year}</li>
						<li className="charaster col-3">Height: {" " + store.people[params.id].height}</li>
						<li className="charaster col-3">Mass: {" " + store.people[params.id].mass}</li>
						<li className="charaster col-3">Height: {" " + store.people[params.id].height}</li>
					</ul>
					<Link to={"/"}>
						<span href="#" className="btn btn-warning btn-lg btn-block" id="back">
							Back
						</span>
					</Link>
				</div>
			</div>
		</div>
	);
};
