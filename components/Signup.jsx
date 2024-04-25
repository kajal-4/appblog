import { Button, Grid, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
    const[inputs,setInputs]=useState({});

    const inputHandler=(e)=>{
        setInputs({...inputs,[e.target.name]:e.target.value});
        console.log(inputs);
    }
    const SubmitHandler=()=>{
            console.log("btn click",inputs)
        }
  return (
    <div style={{margin:'8%'}}>
      <Typography varient='h6' style={{color:"purple"}} >
        Signup Form
      </Typography>
      <br/><br/>
      <Grid container spacing={2}>
      <Grid item xs={ 12} sm={6} md={6}>
            <TextField
                variant='outlined'
                label='Name'
                name='name'
                onChange={inputHandler}
                fullWidth
            />
            </Grid>
              
        <Grid item xs={ 12} sm={6} md={6}>
            <TextField
                variant='outlined'
                label='Email'
                name='email'
                onChange={inputHandler}
                fullWidth
              
                
                />
        </Grid>
        <Grid item xs={ 12} sm={12} md={12}>
            <TextField
                variant='outlined'
                label='Address'
                name='address'
                onChange={inputHandler}
                fullWidth
                multiline rows={5}
                />
        </Grid>
        <Grid item xs={ 12} sm={6} md={6}>
            <TextField
                variant='outlined'
                label='Username'
                name='username'
                onChange={inputHandler}
                fullWidth
                />
        </Grid>
        <Grid item xs={ 12} sm={6} md={6}>
            <TextField
                variant='outlined'
                label='Pasword'
                fullWidth
                name='password'

                />
        </Grid>
        <Grid item xs={ 12} sm={12} md={12}>
            <Button variant='contained' color='secondary' onClick={SubmitHandler}>Submit</Button>
            </Grid>
<br/>
            <Grid item xs={ 12} sm={12} md={12}>
                <Link to={'/'}>Back to login</Link>
                </Grid>

      </Grid>
    </div>
  )
}

export default Signup
