import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect } from "react";
import testSvg from "../png/logo-no-background.png"
import { useNavigate } from "react-router";
import { NoteContext } from "../Context/NoteContext";


function Login() {
    const {loggedIn, setLoggedIn} = React.useContext(NoteContext)


    //state
    const navigate = useNavigate()
    const [form, setForm]= React.useState({email:"randomreview@gmail.com", password:"random123"})
    const [error,setError] = React.useState(false)
    
    
    //events
    function handleChange(e){
        const {id,value} = e.target
        setForm(current=>({
            ...current,
            [id]: value
        }))
    }
    function submit(e){
        if(loggedIn ===true){
            return navigate("/notes")
        }

      

        e.preventDefault()
        
       fetch(`https://note-task-backend.onrender.com/user/login`, {
        method: "POST",
        
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
        body: JSON.stringify({email: form.email.toLowerCase(), password: form.password}),
        })
        .then(res => res.json())
        .then(res => {
            if(res.error){
                console.log(res)
                setError(res.error)
                throw new Error("Couldn't login")
            };
            document.cookie = `jwt=${res.token}`
            console.log(document.cookie)
            if(res.token){
            setLoggedIn(true)}
        })
        .then(()=> navigate("/notes"))
        .catch(err=> {
        
            alert(err)
            // setError(err)
        })
    }
    React.useEffect(()=>{
        

    },[])


    return ( 
        
            <Container  sx={{display:"flex", flexDirection:"column",pt:15}} >
                
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
             Log In
            </Typography>
            <form noValidate autoComplete="off"  >
                <Box textAlign={"center"}>
                <TextField
                    label="Email"
                    variant="filled"
                    sx={window.innerWidth> 500 ? {width:400, mb:"20px", mx:"auto"}:{width:"100%", mb:"20px"}}
                    
                    fullWidth
                    id="email"
                    onChange={handleChange}
                    value={form.email}
                    error={error}
                    required
                    />
                    </Box>
                    <br/>
                    <Box textAlign={"center"}>
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
                    </Box>
                     <br/>
                     <Box textAlign={"center"}>
                    <Button 
                    onClick={submit}
                    type="submit" 
                    variant="contained"
                    fillWidth
                    sx={window.innerWidth> 500 ? {width:400}:{width:"100%"}}
                    
                   >
                    Log In
                </Button>
                </Box>
                </form>
            </Container>

       
     );
}

export default Login;