import { Box, Button, Container, List, ListItem, ListItemIcon, ListItemText, TextField, Typography } from "@mui/material";
import React, { useContext } from "react";
import { NoteContext } from "../Context/NoteContext";
import getCookie from "../functions/getCookie";
import { Add, JoinRight } from "@mui/icons-material";

function Group() {
    const {groups,setGroup, createGroup,setCreateGroup}= useContext(NoteContext)
    console.log(groups)


    function handleChange(e){
        const {id,value} = e.target
        setCreateGroup(current=> ({
            ...current,
            [id]:value

        }))
    }

    async function LeaveGroup(current){
        console.log("Leave Group")
        fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/groups/leave`,{
            method: "DELETE",
        
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie('jwt')}`
            },
            body: JSON.stringify({_id: current._id}),
            })
            .then(setGroup(groups=> groups.filter( current._id === groups._id)))

    }

    const [join,setJoin] = React.useState({
        groupId: '',groupPassword: ""
     })

     function handleJoin(e){
        const {id,value} = e.target
        setJoin(current=> ({
            ...current,
            [id]:value

        }))
    }
    async function handleAdd(event){
        event.preventDefault()

    fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com//group/join`, {
        method: "POST",
        
        headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
            Authorization: `Bearer ${getCookie('jwt')}`
        },
        body: JSON.stringify({_id:join.groupId, password: join.groupId}),
        })
        .then(res => {console.log(res); return res})
        .then( res=>{return res.json()})



    }


    async function handleSubmit(event){
        event.preventDefault()
        fetch(`https://note-backend-zachary-9a350c884dc1.herokuapp.com/group/create`, {
            method: "POST",
            
            headers: {
                Accept: "application/json, text/plain, */*",
                "Content-Type": "application/json",
                Authorization: `Bearer ${getCookie('jwt')}`
            },
            body: JSON.stringify({name: createGroup.groupName, password: createGroup.groupPassword}),
            })
            .then(res =>{
                if(res.ok === false){
                    throw new Error(res.error)
                }
                return res.json()
            })
            .then(res => setGroup(current=> ([
                ...current,
                res

            ])))
    

    }



    return ( 
        <Container sx={{ width:"80vw", height:"90vh"}}>

        <Box textAlign={"center"}>
            <Typography noWrap variant="h4" textAlign={"center"} fullWidth>
                Groups
            </Typography>
        </Box>
        <Box textAlign={"center"}>
            <Typography noWrap variant="h6" textAlign={"start"} fullWidth>
            Current
            </Typography>
            <List>

            
                {groups.map(current=> (
                <ListItem key="logout" alignItems="end" button>
                            <ListItemIcon></ListItemIcon>
                            <ListItemText>{current.Name}</ListItemText>
                            <ListItemText sx={{ml:'auto'}}>Id: 
                            <Typography variant="subtitle2" fontSize={13}>
                            {current._id}
                                </Typography>
                                </ListItemText>

                </ListItem>))}
                {groups.length === 0 &&<Typography textAlign={"start"}>You are currently not in a group</Typography>}
            </List>
        </Box>
        <Box mt={4}>
        <Typography noWrap variant="h6" mb={2} textAlign={"start"} fullWidth>
            Create Group
        </Typography>
        <form>
            <TextField
            fullWidth
            label="Enter Group Name"
            id="groupName"
            value={createGroup.groupName}
            onChange={handleChange}
            required
            sx={{mb:"20px"}}
            />
            <TextField
            fullWidth
            label="Enter Password"
            id="groupPassword"
            value={createGroup.groupPassword}
            onChange={handleChange}
            required
            />
            <Button 
            onClick={handleSubmit}
            type="submit"
            startIcon={<Add/>}>
                Add Group
            </Button>
        </form>
        </Box>
        <Box mt={4}>
        <Typography noWrap variant="h6" mb={2} textAlign={"start"} fullWidth>
            Join Group
        </Typography>
        <form>
            <TextField
            fullWidth
            label="Group id"
            id="groupId"
            value={join.groupId}
            onChange={handleJoin}
            required
            sx={{mb:"20px"}}
            />
            <TextField
            fullWidth
            label="Enter Group Password"
            id="groupPassword"
            value={join.groupPassword}
            onChange={handleJoin}
            sx={{mb:"10px"}}
            required
            />
            <Button 
            onClick={handleAdd}
            type="submit"
            
            startIcon={<JoinRight/>}
            variant="outlined">
                
                Join Group
            </Button>
        </form>
        </Box>


        
            

    
        </Container>
        
     );
}

export default Group;