import { Box, Typography, Tooltip } from '@mui/material'
import { useState, useEffect } from 'react'
import { getAllUsers } from '../../../apis/users'
import { addUserToLock } from '../../../apis/locks'

const CreateUserModalContent = (props) => {
    const [allUsers, setAllUsers] = useState([])

    const { lock } = props

    const handleAddUserOnclick = async(user) => {
        const response = await addUserToLock(lock.id, user._id)
        if(response.data.status==="success"){
            setAllUsers(allUsers.filter(item => item !== user))
        }
    }

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      p: 4,
    };

    useEffect(() => {
        const getData = async () => {
            const response = await getAllUsers()
            setAllUsers(response.data.customers)
        };
        getData();
    }, [])

    return (
         <Box sx={style}>
          <Typography sx={{ p:1}}id="modal-modal-title" variant="h6" component="h2">
            Add New User To {lock.name} 
          </Typography>
          {allUsers.map((user, index) => {
              if(!lock.users.includes(user._id)){
                  return(
                        <Tooltip title="Authorize user for this lock">
                             <Box sx={{
                                 m:1, 
                                 p:1, 
                                 borderRadius: '8px', 
                                 border: '1px solid', 
                                 borderColor: '#b2bec3',
                                 display: 'flex', 
                                 justifyContent: 'space-between', 
                                 cursor: 'pointer', 
                                 '&:hover': {
                                   backgroundColor: '#d9fce3'                        }, 
                             }}
                             onClick={() => handleAddUserOnclick(user)}
                             >
                                <Typography >{user.name} {user.surname}</Typography>
                            </Box>
                        </Tooltip>
                    )
              }
              else {
                  return <></>
              }
          })}
        </Box>
    )
}

export default CreateUserModalContent;