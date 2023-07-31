import { Box, Button, Container, IconButton, TextField, Typography } from "@mui/material";
import React from "react";
import testSvg from "../png/logo-no-background.png"
import {  ArrowRightAltOutlined} from "@mui/icons-material";
import { useNavigate } from "react-router";

function Signup() {
    const [form, setForm]= React.useState({email:"", password:"",firstName:"", lastName:""})
    const [error,setError] = React.useState(false)
    const [page,setPage] = React.useState(1)
    const navigate = useNavigate()
    

    function handleChange(e){
        const {id} = e.target
        setForm(current=>({
            ...current,
            [id]: e.target.value
        }))
    }

    let email = (<Box textAlign={"center"}><TextField label="Email" variant="filled" sx={window.innerWidth> 500 ? {width:400, mb:"20px", mx:"auto"}:{width:"100%", mb:"20px"}} fullWidth id="email"
    onChange={handleChange}
    value={form.email}
    error={error}
    required
    /></Box>)
    let password = (<Box textAlign={"center"}>
    <TextField
    label="Password"
    variant="filled"
    type="password"
    
    sx={window.innerWidth> 500 ? {width:400, mb:"10px"}:{width:"100%", mb:"10px"}}
    id="password"
    onChange={handleChange}
    value={form.password}
    error={error}
    required
    />
    </Box>)
    let submitButton = (<Box textAlign={"center"}>
    <Button 
    onClick={submit}
    type="submit" 
    variant="contained"
    fillWidth
    sx={window.innerWidth> 500 ? {width:400}:{width:"100%"}}
    >
   Sign Up
    </Button>
    </Box>)
        let firstName = (<Box textAlign={"center"}><TextField label="First Name" variant="filled" sx={window.innerWidth> 500 ? {width:400, mb:"20px", mx:"auto"}:{width:"100%", mb:"20px"}} fullWidth id="firstName"
        onChange={handleChange}
        value={form.firstName}
        error={error}
        required
        /></Box>)
        let lastName = (<Box textAlign={"center"}><TextField label="Last Name" variant="filled" sx={window.innerWidth> 500 ? {width:400, mb:"20px", mx:"auto"}:{width:"100%", mb:"20px"}} fullWidth id="lastName"
        onChange={handleChange}
        value={form.lastName}
        error={error}
        required
        /></Box>)

    let submitArray = [[firstName,lastName],email,[password,submitButton]]
    
    function submit(e){

        e.preventDefault()
        fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/user/signup`, {
        method: "POST",
        
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        body: JSON.stringify({firstname: form.firstName,lastname: form.lastName,email:form.email.toLowerCase(), password: form.password}),
        })
        .then(res => {console.log(res.status); return res.json()})
        .catch(err => {navigate("/login");return err})
        .then(res => {console.log(res.token);document.cookie = `jwt=${res.token}`})
        .catch(setError(true))
        .then(()=> navigate("/notes"))
    }
    return ( 
        
            <Container  sx={{display:"flex", flexDirection:"column",pt:20}} >
                
            <Box textAlign={"center"}>
                <img src={testSvg} color="white" alt="svg" height={100}/>

            </Box>
            
            <Typography
            noWrap
            gutterBottom
            color="text" 
            variant="h4"
            component="h2"
            fontWeight={600}
            letterSpacing={2}
            
            
            sx={{textAlign:"center"}}
            >
             Sign Up
            </Typography>
            <form noValidate autoComplete="off"  >
                {
                    submitArray[page - 1]
                }
 
                    <Box textAlign={page <submitArray.length &&"end"} sx={window.innerWidth> 500 ? {width:400, mb:"20px", mx:"auto",pt:1}:{width:"100%", mb:"20px",pt:1}} >
                        { page>1 &&<IconButton size="large" v  onClick={()=>setPage(current => current - 1)}>
                            <ArrowRightAltOutlined sx={{rotate:"180deg"}}/>
                        </IconButton>}
                        {page <submitArray.length &&<IconButton size="large" color="main"  onClick={()=>setPage(current => current +1)}>
                            <ArrowRightAltOutlined />
                        </IconButton>}

                    </Box>
                
              
                     
                </form>
            </Container>
     );
}

export default Signup;