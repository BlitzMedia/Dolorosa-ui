import React from 'react'
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Email from "@material-ui/icons/Email";
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";





import loginPageStyle from "assets/jss/material-kit-pro-react/views/loginPageStyle.jsx";

import image from "assets/img/bg7.jpg";

class Login extends React.Component {
	alEnviar = (e) => {
		e.preventDefault()
	}
	render() {
		const { classes } = this.props
		
		return (
			<div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent:"center" }}>
				<GridContainer justify="center">
					<GridItem xs={12} sm={12} md={6}>
						<Card>
							<form onSubmit={this.alEnviar}>
								<CardHeader color="primary" signup className={classes.cardHeader}>
									<h4>Login</h4>
								</CardHeader>
								<CardBody signup>
									<CustomInput
										id="first"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											placeholder: "First Name...",
											type: "text",
											startAdornment: (
												<InputAdornment position="start">
													<Face className={classes.inputIconsColor} />
												</InputAdornment>
											)
										}}
									/>
									<CustomInput
										id="email"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											placeholder: "Email...",
											type: "email",
											startAdornment: (
												<InputAdornment position="start">
													<Email className={classes.inputIconsColor} />
												</InputAdornment>
											)
										}}
									/>
									<CustomInput
										id="pass"
										formControlProps={{
											fullWidth: true
										}}
										inputProps={{
											placeholder: "Password",
											type: "password",
											startAdornment: (
												<InputAdornment position="start">
													<Icon className={classes.inputIconsColor}>
													lock_utline
													</Icon>
												</InputAdornment>
											)
										}}
									/>
								</CardBody>
								<div className={classes.textCenter}>
									<Button simple color="primary" size="lg" onClick={() => { console.log(classes) }}>
										Vámonos!
									</Button>
								</div>
							</form>
						</Card>	
					</GridItem>
				</GridContainer>
			</div>
		)
	}
}

export default withStyles(loginPageStyle)(Login);

