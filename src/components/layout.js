
import { AddCircleOutline, Filter, Filter2Rounded, Group, Logout, Menu, Search, SearchOffOutlined, SearchOutlined, Settings, Sort, SubjectOutlined } from "@mui/icons-material";
import { AppBar, Avatar, Box, Drawer, FilledInput, FormControlLabel, FormLabel, IconButton, Input, List, ListItem, ListItemIcon, ListItemText, Modal, Radio, RadioGroup, TextField, Toolbar, Typography } from "@mui/material";
import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router";
import {format} from "date-fns"
import getCookie from "../functions/getCookie";
import { NoteContext } from "../Context/NoteContext";
import FilterModal from "./filterModal";


function Layout({children}) {
    //State
    const {filter,setFilter} = React.useContext(NoteContext)
    const navigate = useNavigate();
    const location = useLocation().pathname
    // console.log(location)
    const drawerWidth = 240
    const[menuOpen, setMenu] = React.useState(false)
    const [open, setOpen] = React.useState(false);

    //State Change Events
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    function openMenu(e){
        if(menuOpen){
            setMenu(false)
            console.log("menu close")
        }
        else{
            setMenu(true)
            console.log("menu opened")
        }
    }
    function closeMenu(e){
        if(menuOpen){
            openMenu(e)}
    }

    


    //Items in navigator
    const menuItems = [
        {
            text:"My notes",
            icon: <SubjectOutlined color="primary"/>,
            path:"/notes"
        },
        {
            text:"Create Note",
            icon: <AddCircleOutline color="primary"/>,
            path:"/create"
        },
        {
            text:"Manage Groups",
            icon:<Group/>,
            path:"/group"

        },
        {
            text:"Settings",
            icon:<Settings/>,
            path:"/settings"

        }
    ]



    
    function logout(){
        // fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/user/logout`, {
        //     method: "POST",
            
        //     headers: {
        //         Accept: "application/json, text/plain, */*",
        //         "Content-Type": "application/json",
        //         Authorization: `Bearer ${getCookie('jwt')}`
        //             },
        //     })
        //     .then((res)=>console.log(res))
        //     .then(()=> document.cookie = ``)
        //     .then(()=> navigate("/"))
        navigate("/")
        }


    React.useEffect(()=>{

        
            // fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/user/checklogin`, {
            // method: "POST",
            
            // headers: {
            //     Accept: "application/json, text/plain, */*",
            //     "Content-Type": "application/json",
            //     Authorization: `Bearer ${getCookie('jwt')}`
            //         },
            // })
            // .then((res)=>res)
            // .then(res => {
            //     if(res.error){
                   
            //         throw new Error("Couldn't login")
            //     };
            //     console.log(res)
            //     console.log(document.cookie)
            // })
            // .catch((e)=> alert(e))
        
            
                // alert("Please login")
                 

    },[])


    
    
    
    return ( 
        <div className={window.innerWidth > 600 && "flex"} sx={{width:"100vw"}}>
            <AppBar elevation={0} sx={(window.innerWidth > 600)?{width: `calc(100% - 240px)`, display:"flex"}:{width:"100%"}}>
                <Toolbar sx={{display:"flex"}}>
                    {/* <Typography>
                        Today is the {format(new Date(12/25/2005),"do MMMM Y")}
                    </Typography> */}
                    { window.innerWidth < 600 &&<Avatar srcSet="r" sx={{  mr:1}}></Avatar>}
                    <FilledInput type="search" startAdornment={      
                       <Search sx={{pt:2, mr:1, color:"main"}}/> 
                    } 
                    label="Search"
                    size="small"
                    id="search"
                    sx={ 
                        window.innerWidth <600?
                        {ml:1, pb:2,borderRadius:20, borderBottom:"none", display:"flex",alignItems:"center", height:40}:
                        {ml:"auto", pb:2,borderRadius:20, borderBottom:"none", display:"flex",alignItems:"center", height:40, width:"50%"}
                    }
                    value={filter.search}
                    onChange={(e)=>setFilter(current=>({
                        ...current,
                        search: [e.target.value]
                    }))}
                    fullWidth
                    disableUnderline={true}
                    />
                    <IconButton sx={window.innerWidth > 600 && {mr:"auto"}} onClick={handleOpen}>
                        <Sort/>
                    </IconButton>
                    

                   
                    
                    { window.innerWidth > 600 &&<Avatar srcSet="r" sx={{ justifySelf:"end", ml:"auto"}}></Avatar>}
                    { window.innerWidth <600 && (<IconButton onClick={openMenu}><Menu sx={{ml:0}}/></IconButton>) }
                    
                </Toolbar>

            </AppBar>
            
            
            <Drawer
        sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
            },
          }}
            
            variant={window.innerWidth< 600?"persistent" :"permanent"}
            anchor={window.innerWidth< 600?"right" :"left"}
            open={menuOpen}
            >
                <Box>
                    <Typography variant="h5" textAlign={"center"}>
                        Notes

                    </Typography>
                </Box>

                {/*List items in the menu*/}
                <List>
                    {menuItems.map( item=>(
                        <ListItem key={item.text} button 
                        onClick={()=> navigate(item.path)}
                        sx={(item.path == location) && {background:"#ce151b"}}
                        
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText>{item.text}</ListItemText>

                        </ListItem>
                    ))}
                    <ListItem key="logout" alignItems="end" onClick={logout} button>
                        <ListItemIcon><Logout/></ListItemIcon>
                        <ListItemText>Logout</ListItemText>

                    </ListItem>

                </List>

            </Drawer>
           
            <div onClick={closeMenu} style={{marginTop: "80px"}}>
                
                {children}
            </div>

            <FilterModal open={open} handleClose={handleClose}/>
                
            
            
        </div>
     );
}

export default Layout
;