import { AppBar, Typography,Avatar,IconButton , Toolbar, Button, Divider, ButtonGroup, Container, Box, Grid, Card, CardHeader, CardContent} from "@mui/material";
import testSvg from "../png/logo-no-background.png"
import { Cloud, Filter, Group, Login, Sort, Timeline, Translate } from "@mui/icons-material";
import { useNavigate } from "react-router";
import homepic from "../png/home picture.jpg"
function LandingPage() {
    const navigate = useNavigate();
    const links={
        login:"/login",
        signup:"/signup"
    }

    const abilities = [
        {
            title:"Cloud",
            icon: <Cloud />,
            description:""
        },
        {
            title:"Sort, Note Note",
            icon: <Sort />,
            description:""
        },
        {
            title:"Group",
            icon: <Group />,
            description:""
        },
        {
            title:"Date",
            icon: <Timeline/>,
            description:""
        },
    ]

    return ( 
        <Box sx={{width:"100vw", overflow:"hidden"}}>
            <AppBar color="secondary" elevation={4} >
                <Container>
                    <Toolbar sx={{display:"flex"}}>
                        
                        <img src={testSvg} color="white" alt="svg" height={40}/>
                        

                        <ButtonGroup sx={{ml:"auto"}}>
                            <Button variant="text" onClick={()=> navigate(links.login)}>Log In</Button>
                            <Button variant="outlined" onClick={()=> navigate(links.signup)}>Sign Up</Button>    
                        </ButtonGroup>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box sx={{pt:20}}>
                <Typography variant="h4" fontSize={30} fontWeight={700}  sx={{
                    textAlign:"center",
                    display:{
                        xs:{},
                        md:{},
                        }}} >
                    Simple way to keep notes
                </Typography>
                <Typography variant="subtitle1" mt={1}    sx={{
                    textAlign:"center",
                    display:{
                        xs:{},
                        md:{},
                        }}} >
                    All your daily notes put into cloud, and allowed access at anytime, anywhere on any device
                </Typography>
                <Box textAlign={"center"} mt={3}>
                    <Button variant="contained" sx={{mx:"auto"}} onClick={()=> navigate(links.signup)}>Sign Up now</Button>
                </Box>

               <img src={homepic} alt="landing page pic" className={"landingPic"}/>
                
            </Box>
            <Box  >

                <Container>
                <Typography variant="h4" fontSize={30} fontWeight={700}  sx={{
                    textAlign:"center",
                    display:{
                        xs:{},
                        md:{},
                        },
                        mt:8}} >
                    What features are offered on this website?
                </Typography>
                <Grid container spacing={0.5}>
                 {abilities.map(ability=>(
                        <Grid item xs={12} sm={6}  md={3}
                        sx={{mt:10}}>
                            <Card elevation={0}>
                                <CardHeader
                                avatar={
                                    ability.icon

                                }
                                title={ability.title}
                                />
                                <CardContent>
                                <Typography color="textSecondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam lacinia ex ante, nec viverra libero egestas eu. Quisque semper feugiat orci, sit amet maximus dui pulvinar vel. In luctus in dolor eget dapibus.
                                </Typography>

                                </CardContent>

                                
                            </Card>
                            

                            
                            
                        </Grid>

                    ))}

                    </Grid>

                </Container>
                

            </Box>
        </Box>
     );
}

export default LandingPage
;