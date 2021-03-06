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
					src={store.people[params.id].imagen}
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
						<li className="charaster col-3">
							Fecha de nacimiento: {" " + store.people[params.id].fecha_nacimiento}
						</li>
						<li className="charaster col-3">Altura: {" " + store.people[params.id].altura}</li>
						<li className="charaster col-3">Peso: {" " + store.people[params.id].masa}</li>
						<li className="charaster col-3">Genero: {" " + store.people[params.id].genero}</li>
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
