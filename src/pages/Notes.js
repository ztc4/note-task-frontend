import {  Box, Container, Grid,  } from "@mui/material";
import React from "react"
import { useNavigate } from "react-router";
import NoteCard from "../components/NoteCard";
import { NoteContext } from "../Context/NoteContext";
import getCookie from "../functions/getCookie";
import sortNotes from "../functions/filter";
function Notes() {
  
    
    const {notes,setNotes,groupNotes,setGroupNotes,filter} = React.useContext(NoteContext)

    let noteGroup = [];
    switch(filter.noteType){
        case "group": noteGroup = groupNotes ;break;
        case "personal": noteGroup = notes ;break
        default: noteGroup = [...notes,...groupNotes];break
    }
    console.log(10,noteGroup)

    let sortedNotes = []
    //filtered notes
    if(noteGroup.length > 0)
    {sortedNotes = sortNotes(noteGroup, filter.search,
        filter.completion,filter.alphabetical,
        filter.sortBy,filter.work,filter.todos, filter.reminder,filter.money)
}

       

      
    //ORIGINAL FETCH TO BACKEND
        // function deleteTask(id){
        //     console.log("deleting task")
        //     fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/tasks/delete`,{
        //         method: "DELETE",
            
        //         headers: {
        //             Accept: "application/json, text/plain, */*",
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${getCookie('jwt')}`
        //         },
        //         body: JSON.stringify({_id:id}),
        //         })
        //         .then(deleteNoteOutOfState(id))
        //         .catch()
                
        // }
        // function deleteGroupTask(id){
        //     fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/group/delete`,{
        //         method: "DELETE",
            
        //         headers: {
        //             Accept: "application/json, text/plain, */*",
        //             "Content-Type": "application/json",
        //             Authorization: `Bearer ${getCookie('jwt')}`
        //         },
        //         body: JSON.stringify({_id: id, completion: true}),
        //         }).then(
        //             deleteGroupNoteOutOfState(id)
        //         )
        // }

    function deleteNoteOutOfState(id){
       
        setNotes(current => current.filter(current=> current._id !== id))

    }    
    function deleteGroupNoteOutOfState(id){
       
        setGroupNotes(current => current.filter(current=> current._id !== id))

    }
    console.log(3,sortedNotes)
    console.log(5,notes)



    return ( 
        <Box  sx={ window.innerWidth < 600 ? {width:"100vw", minHeight:"100vw"}:{ width:"80vw", height:"90vh",pl:12}} >

            
            <Grid container spacing={2}>
                {sortedNotes &&  sortedNotes.map(note=>(
                        <Grid item xs={12} sm={6} margin={1} md={4} key={note.title}>
                            
                            
                            <NoteCard note={note} deleteTask={note.hasOwnProperty("owner") ? deleteNoteOutOfState : deleteGroupNoteOutOfState} group={false}/>
                            
                            
                        </Grid>

                    ))}

            </Grid>

        </Box>
     );
}

export default Notes;