import { KeyboardArrowRightTwoTone } from "@mui/icons-material";
import { Box, Button, Container, FormControl, FormControlLabel, FormGroup, FormLabel, Input, Radio, RadioGroup, Switch, TextField, Typography } from "@mui/material";
import React from "react"
import { useNavigate } from "react-router";
import { NoteContext } from "../Context/NoteContext";
import getCookie from "../functions/getCookie";

function Create() {
    const navigate = useNavigate();
    const {newNote, setNewNote, category,setCategory,setNotes, notes,groups} = React.useContext(NoteContext)

    // const selectedGroup = React.useState("")
    console.table(newNote)
    console.log(newNote.due === String)
    
  


    
    function handleChange(e){
        const {id,value} = e.target
        setNewNote(current =>({
            ...current,
            [id]: value,
            error: false
        }))      
    }
    function setNoteGroup(e){
        const{value} = e.target
        if(newNote.group === e.target.value){
            setNewNote(current =>({
                ...current,
                group:""
            }))

        }else{
        setNewNote(current =>({
            ...current,
            group:value
        }))}
        
    }




    

    async function handleSubmit(event){
        event.preventDefault()
           try{     console.log("submitting task")
            fetch(`https://hu6xuodi40.execute-api.us-east-1.amazonaws.com/dev/tasks/create`, {
                method: "POST",
                
                headers: {
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${getCookie('jwt')}`
                },
                body: JSON.stringify({title:newNote.title, details: newNote.details, category: category, completion: newNote.completed, due: newNote.due, time:newNote.time, owner:"random"}),
                })
                .then(res=> res.json())
                .then(res=> setNotes(current=>([
                    ...current,res
                ])))
                
                .then(()=> navigate("/notes"))
                .catch(error=> console.log(error))
                .catch(()=> navigate("/"))}
                catch(e){
                    alert("Error trying to submit task to send task!")

                }
        setNotes(current=>([
            ...current,
            {title:newNote.title,
                details: newNote.details,
                category: category,
                completion: newNote.completed,
                due: newNote.due,
                time:newNote.time,
                owner:"random"
            }
        ])
            );
        
        navigate("/notes");
       
           
    }

        
           async function handleGroup(){

            try
              {  console.log("creating group task")
              if(newNote.group === ""){
                throw new Error("No group selected")
              }
                fetch(`https://hu6xuodi40.execute-api.us-east-1.amazonaws.com/dev/group/createTask`,{
                method: "POST",
                headers:{
                    Accept: "application/json, text/plain, */*",
                    "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie('jwt')}`

                },
                body:JSON.stringify({_id: newNote.group,title:newNote.title, details: newNote.details, category: newNote.category, completion: newNote.completed, date: newNote.due, time:newNote.time})


            })
            .then(res=> console.log(res))}
            catch(e){
                alert(e)

            }
            }
            
       function switchToGroup(e){
        setNewNote(current=>({
            ...current,
            groupNote: !current.groupNote
        }))
       }
       function switchCompleted(e){
        setNewNote(current=>({
            ...current,
            completed: !current.completed
        }))}
       
    
        return ( 
            <Container sx={{ width:"80vw", height:"90vh", mb:8}}>
                <Typography
                noWrap
                gutterBottom
                color="text" 
                variant="h5"
                component="h2"
                
                sx={{textAlign:"center"}}
                >
                 Create a New Note
                </Typography>
                <form noValidate autoComplete="off">
                    <TextField
                    label="Note Title"
                    variant="outlined"
                    sx={{mb:"20px"}}
                    fullWidth
                    id="title"
                    onChange={handleChange}
                    value={newNote.title}
                    error={newNote.error === true}
                    required
                    />
                    <TextField
                    label="Details"
                    variant="outlined"
                    sx={{mb:"20px"}}
                    fullWidth
                    multiline
                    id="details"
                    rows={6}
                    onChange={handleChange}
                    value={newNote.details}
                    error={newNote.error === true}
                    required
                    />
                    
                        <FormGroup sx={{display:"flex"}}>
                            <FormControlLabel control={ 
                            <Switch
                            checked={newNote.groupNote}
                            onChange={switchToGroup}
                            inputProps={{ 'aria-label': 'controlled' }}
            
                            />} label="Group" />
                            </FormGroup>
                            <FormGroup>
                                <FormControlLabel control={ 
                            <Switch
                            checked={newNote.completed}
                            onChange={switchCompleted}
                            inputProps={{ 'aria-label': 'controlled' }}
                            />} label="Completed" />
                            </FormGroup>
                            <br/>
                        <Box>
                        <Input type="date" sx={{width:200}} id="due" onChange={handleChange} value={newNote.due}></Input>
                        <Input type="time" id="time" onChange={handleChange} value={newNote.time} sx={{width:200}} ></Input>
    
    
                        </Box>
                        
    
                   
    
                        
                    { <FormControl sx={{mb:"20px",mt:2, mr: 4}}>
                        <FormLabel>Note Category</FormLabel>
                        <RadioGroup value={category} onClick={(e)=> setCategory(e.target.value)}>
                            <FormControlLabel value="Money" control={<Radio/>} label="Money"/>
                            <FormControlLabel value="todos" control={<Radio/>} label="Todos"/>
                            <FormControlLabel value="reminders" control={<Radio/>} label="Reminder"/>
                            <FormControlLabel value="work" control={<Radio/>} label="Work"/>
                        </RadioGroup>
                        
                    </FormControl>}
                    {newNote.groupNote && <FormControl sx={{mb:"20px",mt:2}}>
                        <FormLabel>Group</FormLabel>
                        <RadioGroup value={newNote?.group} onClick={setNoteGroup}>
                    
                            {groups.map(group=>(
                                <FormControlLabel value={group._id} control={<Radio/>} label={group.Name}/>
                            )) || <Typography>You have no groups</Typography>}
                        </RadioGroup>
                        
                    </FormControl>}
                    <br></br>
                    <Button 
                        onClick={newNote.groupNote ? handleGroup :handleSubmit}
                        type="submit" 
                        variant="contained"
                        endIcon={<KeyboardArrowRightTwoTone/>}>
                        Submit
                    </Button>
                </form>
    
                    
               
                
    
            </Container>
         );
    
}

export default Create;