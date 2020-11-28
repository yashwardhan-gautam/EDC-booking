import React, { useState, useEffect} from 'react'
import {Link, useHistory} from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
import TextField from '@material-ui/core/TextField'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './Login.css'
import {db, auth} from '../firebase';

function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const history = useHistory();
    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .then( () => {
                history.push('/');
            })
            .catch( (error) => {
                alert(error.message);
            })
        
    }
    return (
    <Grid container className='form'>
        <Grid item sm />
        <Grid item>
            <div className='collegeLogo'>
                <img className='img' src={require('../images/collegeLogo.png')} alt='monkey'/>  
            </div>    
            <Typography variant='h2' className='pageTitle'>
                Login
            </Typography>
            <Typography>
                If you are admin <Link to='/adminlogin'>login here</Link>
            </Typography>
            <form noValidate > 
                <TextField  id='email'
                            name='email'
                            type='email' 
                            label='Email' 
                            value ={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            className='fields'
                            fullWidth/>
                <TextField  id='password' 
                            name='password' 
                            type='password' 
                            label='Password'
                            value ={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            className='fields'
                            fullWidth/>
                <Button type='submit' 
                        variant='contained' 
                        className='fields'
                        color='primary'
                        onClick={signIn}> <div>Login</div>
                </Button>
                <div>
                    <Typography variant='body2'>Don't have an account ? <Link to='/signup'>Sign up </Link></Typography>
                </div>
            </form>
        </Grid>
        <Grid item sm />
    </Grid>
    )
    
}
export default Login;
