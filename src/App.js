
import {  Button, ButtonGroup, CircularProgress, Container,  Typography } from '@mui/material';
import './App.css';
import {  Search, Work } from '@mui/icons-material';
import React from "react"
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Layout from './components/layout';
import { NoteContext } from './Context/NoteContext';
import Notes from './pages/Notes';
import Create from './pages/Create';
import LandingPage from './pages/Landing';
import { ThemeProvider, createTheme } from '@mui/material';
import Signup from './pages/Signup';
import Login from './pages/Login';
import getCookie from './functions/getCookie';
import Settings from './pages/settings';
import Group from './pages/group';


const theme2 = createTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#ce151b',
    },
    secondary: {
      main: '#303030',
    },
  },
  typography:{
    fontFamily: 'Noto Sans Georgian',
    
    fontWeightRegular: 400,
    
    fontWeightBold: 700,

  }

})
function App() {


  //current filter

  const [filter,setFilter]=React.useState({
    search:"",
    completion:null,
    alphabetical:null,
    reverseAlphabetical:null,
    sortBy:"",
    noteType:"",
    work:true,
    todos:true,
    reminder:true,
    money:false


  })


  function alerttext(text){
    alert(text)
  }
  

  //App states for other data
  const [notes,setNotes] = React.useState([])
  const [groups,setGroup] = React.useState([])
  const [groupNotes, setGroupNotes] = React.useState([])
  console.log(groupNotes)
  console.log(notes)

  const [newNote,setNewNote] = React.useState({
    title:"",details: "", error: false, groupNote: false, group:"",completed: false,due:"", time:""

})
const[createGroup,setCreateGroup] = React.useState({
  groupName:"",
  groupPassword:""
})




const [category,setCategory]= React.useState("todos")
React.useEffect(()=>{
  try{
  
  // fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/tasks/get`,{
  //       method: "GET", 
  //       headers:{
  //           Authorization: `Bearer ${getCookie("jwt")}`
  //       }
  //   }).then(res => res.json())
  //   .then((res)=> {
  //       if(res.error){
  //           console.log(res.error)
  //          throw new Response("Couldn't get task")
  //       }
  //       console.log(res)
  //       return setNotes(res)
  //   })
  
  }catch(e){
    console.log("couldnt get data")

    }

    try{
      // fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/group/get`, {
      //       method: "GET",
            
      //       headers: {
      //           Accept: "application/json, text/plain, */*",
      //           "Content-Type": "application/json",
      //           Authorization: `Bearer ${getCookie('jwt')}`
      //       },
      //       })
      //       .then(res => res.json())
      //       .then(res => setGroup(res))
      //       console.table(groups)
      //       console.log("the groups")
            

    }
    catch(e){
      console.log("couldnt get data")

    }
    try{
    //   fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/group/getTask`,{
    //     method: "GET", 
    //     headers:{
    //         Authorization: `Bearer ${getCookie('jwt')}`
    //     }
    // })
    // .then(res => res.json())
    // .then((res)=> {
    //     if(res.error){
    //         console.log(res.error)
    //        throw new Response("Couldn't get task")
    //     }
    //     return res
    // }).then(result=> setGroupNotes(result))

    }catch(e){
      console.log("couldnt get group data")
     
    
    }
    

},[])

  return (

  
    <BrowserRouter>
    <NoteContext.Provider value={{newNote,setNewNote,groupNotes,setGroupNotes, category,setCategory, notes, setNotes, groups,setGroup, createGroup, setCreateGroup,filter,setFilter}}>
        
          <Routes>
              <Route
                path="/notes"
                element={
                  <Layout><Notes/></Layout>
                  
                }
              />
              <Route path="/create" element={<Layout><Create/></Layout>} />
              <Route path="/settings" element={<Layout><Settings/></Layout>} />
              <Route path="/group" element={<Layout><Group/></Layout>} />
              
              <Route path="/" element={<ThemeProvider theme={theme2}><LandingPage/></ThemeProvider>} />
              <Route path="/login" element={<ThemeProvider theme={theme2}><Login/></ThemeProvider>} />
              <Route path="/signup" element={<ThemeProvider theme={theme2}><Signup/></ThemeProvider>} />
              
            </Routes>


          
          
        </NoteContext.Provider>
    </BrowserRouter>
      
    
  );
}

export default App;
