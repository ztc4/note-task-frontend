import { Box, Checkbox, FilledInput, FormControlLabel, FormGroup, FormLabel, Modal, Radio, RadioGroup } from "@mui/material";

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
                <Box style={style} elevation={6} sx={{bgcolor:"white", borderRadius:2, pl:2}}>
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
                    <Box
                    sx={{display:"flex", my:4}}
                    >
                        <Box sx={{mr:4}}>
                            <FormLabel>Completed</FormLabel>
                            <RadioGroup sx={{display:"flex"}} value={filter.completion} onClick={changeCompletion}>
                                <FormControlLabel value="true" control={<Radio/>} label="true"/>
                                <FormControlLabel value="false" control={<Radio/>} label="false"/>
                            </RadioGroup>
                        </Box>
                        <Box>
                            <FormLabel>Sorting by Time</FormLabel>
                            <RadioGroup value={filter.sortBy} onClick={changeSort}>
                                <FormControlLabel value={"closest"}  id="sortByClosest" control={<Radio/>} label="Sort by Closest"/>
                                <FormControlLabel value={"farthest"} control={<Radio/>} id="sortByFarthest" label="Sort by Farthest"/>
                            </RadioGroup>
                        </Box>
                        
                    </Box>
                    <Box sx={{display:"flex"}}>
                        <Box sx={{mr:4}}>
                        <FormLabel>Sort Alphabetically</FormLabel>
                            <RadioGroup value={filter.alphabetical} onClick={changeAlphabet}>
                                <FormControlLabel value={"true"}  id="alphabetical" control={<Radio/>} label="A - Z"/>
                                <FormControlLabel value={"false"} control={<Radio/>} id="reverseAlphabetical" label="Z - A"/>
                            </RadioGroup>    
                        </Box>
                        <Box sx={{mr:4}}>
                        <FormLabel>Note Type</FormLabel>
                        <FormGroup>
                            <FormControlLabel    control={<Checkbox checked={filter.money} id="money" onChange={noteCategory} />} label="Money" />
                            <FormControlLabel control={<Checkbox  checked={filter.todos} id="todos"  onChange={noteCategory}/>} label="Todos" />
                            <FormControlLabel control={<Checkbox checked={filter.reminder} id="reminder"  onChange={noteCategory}/>} label="Reminder" />
                            <FormControlLabel control={<Checkbox checked={filter.work} id="work" onChange={noteCategory}/>} label="Work" />
                        </FormGroup>


                        </Box>
                    </Box>
                </Box>

            </Modal>
     );
}

export default FilterModal;