import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";

export const Register = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [pass, setPass] = useState("");
	const [redirect, setRedirect] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		if (email === "" || pass === "") {
			alert("correo y contraseña son requeridos");
		}
		console.log(email, pass);

		const data = { email: email, password: pass, username: username };

		fetch("https://3000-yellow-armadillo-foo75dkb.ws-us03.gitpod.io/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(data)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Success:", data);
				setRedirect(true);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	};

	return (
		<div className="text-center mt-5 d-flex justify-content-center align-items-center">
			<form style={{ width: "400px" }} onSubmit={e => handleSubmit(e)}>
				<div className="form-floating">
					<input
						type="User"
						className="form-control"
						id="floatingPassword"
						placeholder="User"
						onChange={e => setUsername(e.target.value)}
					/>
					<label htmlFor="floatingPassword" id="floatingPassword">
						User
					</label>
				</div>
				<div className="form-floating mb-3">
					<input
						type="email"
						className="form-control"
						id="floatingInput"
						placeholder="name@example.com"
						onChange={e => setEmail(e.target.value)}
					/>
					<label htmlFor="floatingInput" id="floatingPassword">
						Email address
					</label>
				</div>
				<div className="form-floating">
					<input
						type="password"
						className="form-control"
						id="floatingPassword"
						placeholder="Password"
						onChange={e => setPass(e.target.value)}
					/>
					<label htmlFor="floatingPassword" id="floatingPassword">
						Password
					</label>
				</div>
				<input type="submit" className="btn btn-warning" value="Register" id="registro" />
			</form>
			{redirect ? <Redirect to="/login" /> : ""}
		</div>
	);
};
