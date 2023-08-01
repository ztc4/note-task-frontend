import { Box, Button, Checkbox, FilledInput, FormControlLabel, FormGroup, FormLabel, Grid, Modal, Radio, RadioGroup } from "@mui/material";

import React, { useContext } from "react";
import { NoteContext } from "../Context/NoteContext";
import { Search } from "@mui/icons-material";


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    height:"50%",
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
    overflow: "scroll"
   
  }
  const style2 = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "100%",
    height:"100%",
    bgcolor: 'background.paper',
   
    boxShadow: 24,
    p: 4,
    overflow: "scroll"
   
  }
function FilterModal({open,handleClose}) {
   

    const{filter,setFilter}= React.useContext(NoteContext)
    console.log(filter)
    function changeSort(e){

        const {id,value} = e.target
        setFilter(current=>({
            ...current,
            sortBy: current.sortBy !== value? value: "null"
        }))

        }
        function changeAlphabet(e){

            const {id,value} = e.target
            setFilter(current=>({
                ...current,
                alphabetical: current.alphabetical !== value ? value: "null"
            }))
    
            }
        
        function changeCompletion(e){

            const {id,value} = e.target
            setFilter(current=>({
                ...current,
                completion: current.completion !== value ? value: "null"
            }))
    
            }


        function noteCategory(e){
            const id = e.target.id
            setFilter(current=>({
                ...current,
                [id]: !current[id]
            }))
    

        }
    return ( 
        <Modal
                open={open}
                onClose={handleClose}>
                <Box style={window.innerWidth > 600 ? style :style2} elevation={6} sx={{bgcolor:"white", borderRadius:2, pl:2}}>
                   <Box textAlign={"center"}> 
                    <FilledInput type="search" startAdornment={      
                        <Search sx={{pt:2, mr:1, color:"main"}}/> 
                        } 
                        label="Search"
                        size="small"
                        id="search"
                        sx={ 
                            {mx:"auto", pb:2,borderRadius:20, borderBottom:"none", display:"flex",alignItems:"center", height:40, width:"50%",mt:2}
                        }
                        value={filter.search}
                        onChange={(e)=>setFilter(current=>({
                            ...current,
                            search: [e.target.value]
                        }))}
                        fullWidth
                        disableUnderline={true}
                        />
                    </Box>
                    <Grid container sx={{width:"100%"}}>

                        
 
                            <Grid item sx={{mr:4}} xs={12} sm={6}  md={3}>
                                <FormLabel>Completed</FormLabel>
                                <RadioGroup sx={{display:"flex"}} value={filter.completion} onClick={changeCompletion}>
                                    <FormControlLabel value="true" control={<Radio/>} label="true"/>
                                    <FormControlLabel value="false" control={<Radio/>} label="false"/>
                                </RadioGroup>
                            </Grid>
                            <Grid item sx={{mr:4}} xs={12} sm={6}  md={3}>
                                <FormLabel>Sorting by Time</FormLabel>
                                <RadioGroup value={filter.sortBy} onClick={changeSort}>
                                    <FormControlLabel value={"closest"}  id="sortByClosest" control={<Radio/>} label="Sort by Closest"/>
                                    <FormControlLabel value={"farthest"} control={<Radio/>} id="sortByFarthest" label="Sort by Farthest"/>
                                </RadioGroup>
                            </Grid>
                            
                    
                        
                        
                            <Grid item 
                        xs={12} sm={6}  md={3}>
                                <FormLabel>Sort Alphabetically</FormLabel>
                                    <RadioGroup value={filter.alphabetical} onClick={changeAlphabet}>
                                        <FormControlLabel value={"true"}  id="alphabetical" control={<Radio/>} label="A - Z"/>
                                        <FormControlLabel value={"false"} control={<Radio/>} id="reverseAlphabetical" label="Z - A"/>
                                    </RadioGroup>    
                            </Grid>
                            <Grid item sx={{display:"flex", flexDirection:"column"}}
                        xs={12} sm={6}  md={4}>
                            <FormLabel>Note Type</FormLabel>
                            <FormGroup>
                                <FormControlLabel    control={<Checkbox checked={filter.money} id="money" onChange={noteCategory} />} label="Money" />
                                <FormControlLabel control={<Checkbox  checked={filter.todos} id="todos"  onChange={noteCategory}/>} label="Todos" />
                                <FormControlLabel control={<Checkbox checked={filter.reminder} id="reminder"  onChange={noteCategory}/>} label="Reminder" />
                                <FormControlLabel control={<Checkbox checked={filter.work} id="work" onChange={noteCategory}/>} label="Work" />
                            </FormGroup>


                            </Grid>
                        </Grid>
                        { window.innerWidth <600 && <Button variant="contained" sx={{width:"100%"}}  onClick={handleClose}>Close</Button>}
                    
                </Box>

            </Modal>
     );
}

export default FilterModal;