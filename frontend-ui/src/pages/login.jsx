import React from 'react';
import { Redirect } from "react-router-dom";
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import './login.css';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});


  class Login extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        usernameCurrentValue: "",
        passwordCurrentValue: "",
        submitted: false
      }
      //this.handleSubmit = this.handleSubmit.bind(this)
      this.handleUsernameChange = this.handleUsernameChange.bind(this)
      this.handlePasswordChange = this.handlePasswordChange.bind(this)
    }
    handleSubmit = (event) => {
      let self = this;
      event.preventDefault()
      fetch('http://localhost:4200/users', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          // 'Content-Type': 'application/x-www-form-urlencoded',
          },
        body: JSON.stringify({
          username: this.state.usernameCurrentValue,
          password: this.state.passwordCurrentValue
        })
        
      }).then(function(x){
        return x.text()
      }).then(function(res){
        let ress = JSON.parse(res);
       if (ress.message === "Login Success"){
          self.setState({submitted: true });
        } else {
          alert("login failed. sorry.")
        }
       
      })
     }
     handleUsernameChange(event){
       let newUsername = event.target.value
       this.setState({
         usernameCurrentValue: newUsername
       })
     }
     handlePasswordChange(event){
       let newPassword = event.target.value
       this.setState({
         passwordCurrentValue: newPassword
       })
     }
    render() {
  const { classes } = this.props;
    let redirect = null;
    if(this.state.submitted) {
      redirect = <Redirect to="/dashboard" />
    }

  return (
    <div className="test1">
      
    <main className={classes.main}>
      {redirect}
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={this.handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">User Name</InputLabel>
            <Input name="username" autoFocus onChange={this.handleUsernameChange} value={this.state.usernameCurrentValue} />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input name="password" type="password" onChange={this.handlePasswordChange} value={this.state.passwordCurrentValue} />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
    </div>
  );
}
}
Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);