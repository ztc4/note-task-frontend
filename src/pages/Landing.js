import { AppBar, Typography,Avatar,IconButton , Toolbar, Button, Divider, ButtonGroup, Container, Box, Grid, Card, CardHeader, CardContent} from "@mui/material";

import { Cloud, Filter, Group, Login, Sort, Timeline, Translate } from "@mui/icons-material";
import { useNavigate } from "react-router";
import homepic from "../png/home picture.jpg"
import React from "react";
function LandingPage() {
    const navigate = useNavigate();
    const links={
        login:"/login",
        signup:"/signup"
    }




    return ( 
        <Box sx={{width:"100vw", overflow:"hidden"}}>
            <AppBar color="secondary"  >
                <Container>
                    <Toolbar sx={{display:"flex"}}>
                        
                        <img src="/logo-no-background.svg" className="white h-12 w-12" alt="svg" height={10} width={10}/>
                        

                        <ButtonGroup sx={{ml:"auto"}}>
                            <Button variant="contained" onClick={()=> navigate(links.login)}>Log In</Button>
                            <Button variant="outlined" onClick={()=> navigate(links.signup)}>Sign Up</Button>    
                        </ButtonGroup>
                    </Toolbar>
                </Container>
            </AppBar>

            <Box sx={{pt:15}} className="px-4 pb-8  dark:bg-black-2  dark:text-white">
                <h3 className="font-martel-extrabold bg- text-center text-3xl sm:text-5xl ">
                    Simple way to keep notes
                </h3>
                <h5 className="font-haskoy text-center text-base sm:text-2xl">
                    All your daily notes put into cloud, and allowed access at anytime, anywhere on any device
                </h5>


               <img src="/task-svg-2-sticky.svg" alt="landing page pic" className=" mx-auto"/>
               <Box  className=" flex justify-center mt-8">
                    <button className="font-haskoy-semibold p-2 px-8 hover:scale-110 duration-1000 md:text-2xl rounded-sm drop-shadow-md text-white bg-red"  
                    onClick={()=> navigate(links.signup)}>SIGNUP NOW</button>
                </Box>
                <p className="text-center font-haskoy-semibold text-black dark:text-white">Guest Count Available, just click login in top right!</p>
                
            </Box>
            <Box className="bg-red-dark  pt-4 -mb-16 min-h-screen" >


                <Container>
                <Typography variant="h4" fontSize={30} fontWeight={700}  sx={{
                    textAlign:"center",
                    color:"white",
                    display:{
                        xs:{},
                        md:{},
                        },
                        my:8}} >
                    WHAT FEATURES ARE OFFERED?
                </Typography>

                <div className="flex flex-row flex-wrap justify-center items-end  sm:flex-nowrap sm:justify-normal  md:flex-row font-haskoy-semibold ">
                    {/* Cloud */}

                    <div className=" hover:cursor-default -translate-x-12 sm:translate-x-0 outline bg-red  h-56 w-56   lg:h-72 lg:w-72 text-white flex items-center 
                    flex-col  p-4 rounded-full
                    hover:scale-125 duration-700 hover:z-10
                    ">
                        <h6 className="mt-8  md:mt-6 lg:mt-12"><Cloud/>CLOUD</h6>
                        <p className="text-center">All of your notes are stored in our database allowing you to accessthem anywhere, at anytime!</p>

                    </div>
                    {/* SORT */}
                    <div className=" hover:cursor-default  -translate-y-12 translate-x-4 sm:-translate-x-8 md:-translate-x-10 outline sm:translate-y-24 bg-red h-56 w-56  lg:h-72 lg:w-72 text-white flex items-center 
                    flex-col  p-4 rounded-full
                    hover:scale-125 duration-700 hover:z-10
                    ">
                        <h6 className="mt-8  md:mt-6 lg:mt-12"><Sort/>SORT</h6>
                        <p className="text-center">Filter and sort your notes in many different ways! You are able to sort by time, Alphabetically completion or even the type of note!</p>

                    </div>

                    {/* GROUP */}
                    <div className=" hover:cursor-default -translate-y-24 -translate-x-10 sm:-translate-x-8 md:-translate-x-20 outline sm:-translate-y-4 bg-red h-56 w-56  lg:h-72 lg:w-72 text-white flex items-center 
                    flex-col  p-4 rounded-full
                    hover:scale-125 duration-700 hover:z-10
                    ">
                        <h6 className=" mt-8  md:mt-6 lg:mt-12"><Group/> GROUP</h6>
                        <p className="text-center text-xs lg:text-sm">Create groups for every sphere of your life - whether it’s family, friends, or colleagues. Within these groups,  you can use them grouping,allow others access to your task, or you can work toward completing these task alongside others!</p>

                    </div>
                    {/* DATE */}
                    <div className=" hover:cursor-default -translate-y-36 translate-x-4 sm:-translate-x-8 md:-translate-x-28 outline sm:translate-y-28 bg-red h-56 w-56    lg:h-72 lg:w-72 text-white flex items-center 
                    flex-col  p-4 rounded-full
                    hover:scale-125 duration-700 hover:z-10
                    ">
                        <h6 className=" mt-8 md:mt-6 lg:mt-12"><Timeline/> DATE</h6>
                        <p className="text-center">Date your notes to keep track of when notes need to be completed! Your allowed to track not only the date,but also the time!</p>

                    </div>

                </div>

                </Container>
            </Box>

            {/* THIRD PAGE/MORE ABOUT US */}
            <Box className="bg-black-2  text-white pt-4 px-4  gap-8 flex justify-center items-center flex-col md:flex-row  min-h-screen" >
                <div className=" md:w-2/6 flex flex-col p-4  md:h-4/6">
                    <h5 className=" font-martel-bold  text-3xl md:text-5xl">MORE ABOUT US</h5>
                    <p className="font-haskoy-semibold">With our user-friendly interface, you can effortlessly create, organize, and prioritize your tasks. Whether it's day-to-day errands, complex project milestones, or personal goals, our system is designed to give you a clear view of your to-do list and the satisfaction of ticking off completed tasks.</p>
                    <button 
                    className="bg-red hidden sm:block text-2xl hover:scale-110 duration-500 font-haskoy-semibold self-end  p-2 mt-8 rounded-full px-8 mx-auto" 
                    onClick={()=> navigate(links.signup)}>GET STARTED</button>

                </div>
                <img 
                src="/task-svg-1.svg" 
                alt="landing page pic" 
                className=" md:w-2/6 md:h-4/6"/>
                    <button 
                    className="bg-red block sm:hidden text-2xl hover:scale-110 duration-500 font-haskoy-semibold self-end  p-2  rounded-full px-8 mx-auto" 
                    onClick={()=> navigate(links.signup)}>GET STARTED</button>


            </Box>
            <Box className="bg-black  text-white py-12 px-12 flex justify-center min-h-fit" >
                <div className="font-haskoy-bold text-xl flex items-center flex-col">
                    <p>ABOUT</p>
                    <p className="mt-8">Creator:Zachary Coats</p>
                    <p>EMAIL: ZACHARY4COATS@GMAIL.COM</p>
                    {/* <link onClick={()=> navigate(links.login)}>GET STARTED</button> */}
                    <div className="flex justify-center my-8 gap-8">
                        <a target="_blank" href="https://github.com/ztc4/note-task-frontend">GITHUB</a>
                        <a target="_blank" href="https://www.figma.com/file/GdkaenHWqSfqz1Cr5DtlPa/note-frontend?type=design&node-id=1%3A77&mode=design&t=mERjd1x9vB6A7MvS-1">FIGMA</a>
                        <a target="_blank" href="https://ztc4-github-io.vercel.app/projects/4">MORE</a>
                    </div>
                    <p className="md:w-3/6 font-haskoy-light text-base md:text-xl text-center">
                    THIS NOTES APPLICATION WAS CREATED USING
                     MATERIAL UI AND REACT FOR FRONTEND, WITH EXPRESS,
                    NODE.JS FOR BACKEND AND IS CURRENTLY DEPLOYED USING
                    VERCEL AND AWS LAMBDA! IT INITIAL USED HEROKU BUT RECENTLY SWITCHED TO AWS!
                    THIS APPLICATION WAS MY FIRST PORTFOLIO PROJECT, AND WAS UPDATED WHEN
                    TRYING TO LEARN MATERIAL UI. THE BACKEND STAYED THE SAME,
                    BUT THE FRONTEND DESIGN CHANGED
                    </p>


                </div>
                


            </Box>
        </Box>
     );
}

export default LandingPage
;