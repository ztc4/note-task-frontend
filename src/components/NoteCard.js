import { DeleteOutline, Edit} from "@mui/icons-material";
import { Card, CardHeader, IconButton, Typography,CardContent, Avatar, CardActionArea, CardActions, Button, ButtonGroup, Box } from "@mui/material";
import React from "react";




function NoteCard({note, deleteTask, group}) {


    return ( 

        <Card elevation={3}>
            <CardHeader
            avatar={
                <Avatar sx={note?.completion ? {bgcolor:"green"} : {bgcolor:"red"}}>
                    {!note.hasOwnProperty("owner") ?"G" + note?.category[0].toUpperCase() :   note?.category[0].toUpperCase() }
                </Avatar>
            }
            action={
                <IconButton onClick={()=>deleteTask(note._id)}>
                    <DeleteOutline/>
                </IconButton>
            }
            title={note?.title}
            subheader={note?.category}
            />
            <CardContent>
                <Typography color="textSecondary">
                    {note?.details}
                </Typography>

            </CardContent>
            <CardActionArea >
                <Box sx={{display:"flex",justifyContent:"center"}}>
                    <Typography textAlign={"start"} fontWeight={700} fontSize={14} color="subtitle">
                        {`${note?.date}  ${note?.time || "no time added"} `}   
                    </Typography>


                </Box>

 

                <CardActions sx={{display:"flex",justifyContent:"center"}}>
                    <ButtonGroup size="small">

                    
                   {/* <Button
                   color="secondary"
                   variant="outlined"
                   endIcon={
                    <Edit/>
                   }
                   children={"Edit"}/>
                   <Button
                   variant="contained"
                   color="success"
                   children={"Complete"}/> */}
                   </ButtonGroup>

                </CardActions>


            </CardActionArea>
            

        </Card>
     );
}

export default NoteCard;