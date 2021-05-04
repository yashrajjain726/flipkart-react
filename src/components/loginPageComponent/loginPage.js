import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";

class LoginPage extends React.Component {
  state = {};
  render() {
    return (
      <div style={{ padding: "0" }}>
        <Container
          style={{
            backgroundColor: "#047BD5",
            height: "7rem",
            width: "100%",
            margin: "0",
            maxWidth: "100%",
          }}
        >
          <a href="/">
          <CloseIcon
            style={{
              position: "absolute",
              top: " 2rem",
              left: "16px",
              color: "#fff",
            }}
          />
          </a>
          <img
            src={
              "https://seeklogo.com/images/F/flipkart-logo-3F33927DAA-seeklogo.com.png"
            }
            style={{ width: "3em", marginTop: "2rem" }}
          ></img>
        </Container>
        <Paper
          style={{
            borderRadius: "20px 20px 0px 0px",
            width: "100%",
            top: "6rem",
            position: "absolute",

          }}
        >
          <Typography style={{ textAlign: "left", margin: "5% 0 0 5%" }}>
            <strong>Login for Best Experience</strong>
          </Typography>

          <Typography
            style={{
              textAlign: "left",
              color: "#bdbdbd",
              fontSize: "12px",
              marginLeft: "5%",
              marginTop: "1%",
            }}
          >
            Enter your Email ID to continue
          </Typography>

          <div style={{ margin: "0 5% 2% 5%" }}>
            <TextField
              id="outlined-basic"
              label="Enter your Email-ID"
              variant="outlined"
              style={{ width: "100%", marginTop: "2%" }}
            />
          </div>
          <div>
            <Button
              style={{ float: "right", color: "#047BD5", marginRight: "5%" }}
            >
              <strong> Use Phone Number</strong>
            </Button>
          </div>
          <Paper>
          <Button style={{backgroundColor:'#ed8b00',width:'100%',marginTop:'95%',color:'#fff'}}>
               Continue
           </Button>
          </Paper>
           </Paper>
      </div>
    );
  }
}
export default LoginPage;
