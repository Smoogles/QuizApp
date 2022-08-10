import { Box,Button, Card, CardContent, outlinedInputClasses, TextField, Typography } from '@mui/material'
import { width } from '@mui/system'
import React from 'react'
import Center from './Center'
import useForm from '../hooks/useForm'

const getFreshModel = () =>({
    name:'',
    email:''
})
export default function Login() {

    const {
        values, 
        setValues,
        errors, 
        setErrors, 
        handleInputChange} = useForm(getFreshModel);
    const login = e => {
        e.preventDefault();
        if (validate())
            console.log(values);
    }      
    const validate = () => {
        let temp = {};
        temp.email = (/\S+@\S+\.\S+/).test(values.email) ? "": "Email is not valid";
        temp.name = values.name != "" ? "": "This field is required";
        setErrors(temp);
        return Object.values(temp).every(x => x =="")
    }
  return (
    <Center>
        <Card sx={{width:400}}>
            <CardContent sx={{textAlign:"center"}}>
                <Typography variant="h3" sx={{my:3}}>
                    Quiz App
                </Typography>
                <Box sx={{
                    '& .MuiTextField-root':{
                        margin:1,
                        width:'90%'
                    }
                }}>
                    <form noValidate autoComplete='off' onSubmit={login}>
                    <TextField label ="Email"
                        name="email"
                        variant="outlined" 
                        values={values.email}
                        onChange={handleInputChange}
                        {...(errors.email && {error:true, helperText:errors.email})}/>
                    <TextField label ="Name"
                        name="name"
                        variant="outlined"
                        values={values.name}
                        onChange={handleInputChange}
                        {...(errors.name && {error:true, helperText:errors.name})}/>
                    <Button type="submit"
                        variant="contained"
                        size="medium"
                        sx={{width:'90%'}}>Start</Button>
                    </form>
                </Box>
            </CardContent>
        </Card> 
    </Center>


  )
}
