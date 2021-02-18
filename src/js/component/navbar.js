import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid ">
			<div className="header">
				<nav className="navbar sticky-top navbar-dark bg-dark">
					<div className="container-fluid">
						<a className="navbar-brand ms-5" href="#">
							<img
								src="https://i1.wp.com/gamerfocus.co/wp-content/uploads/2015/07/Star-Wars.png?ssl=1"
								width="90px"
							/>
						</a>

						<div className="dropdown">
							<button
								className="btn btn-warning dropdown-toggle"
								type="button"
								id="dropdownMenuButton"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false">
								Favorites
							</button>
							<div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
								{!!store.favorites &&
									store.favorites.map((element, index) => {
										return (
											<div key={index}>
												<div className="trash">
													<p className="elemen">{element}</p>
													<button
														onClick={() => actions.deleteName(index)}
														className="fas fa-trash"
														id="bote"
													/>
												</div>
											</div>
										);
									})}
							</div>
						</div>
					</div>
				</nav>
			</div>
		</div>
	);
};
