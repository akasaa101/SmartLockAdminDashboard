import { Box, Typography, Button, Tooltip, Modal } from '@mui/material'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { activeLockStatus, passiveLockStatus, removeUserFromLock, getSingleLock } from '../../../apis/locks' 
import { useState, useEffect } from 'react'
import  CreateUserModalContent  from './createUserModalContent'

const DetailsNew = (props) => {
    const [isUpdated, setIsUpdated] = useState(false)
    const [status, setStatus] = useState(props.lock.status)
    const [open, setOpen] = useState(false);
    const [users, setUsers] = useState(props.lock.users)

    const handleModalOpen = () => setOpen(true);
    const handleModalClose = () => setOpen(false);

    const addUserOnclickHandler = async ({ lock }) => {
        setOpen(true)
    }
    const removeUserOnclickHandler = async ({ user, lock} ) => {
        const response = await removeUserFromLock(lock, user)
        if(response.data.status==="success"){
            setUsers(users.filter(item => item !== user))
        }
    }
    const activeLockOnclickHandler = async ({lock}) => {
        const response = await activeLockStatus(lock)
        
        if(response.status === 200) {
            setIsUpdated(true)
            setStatus(response.data.lock.status)
        }
    }
    const passiveLockOnclickHandler = async ({lock}) => {
        const response = await passiveLockStatus(lock)
         if(response.status === 200) {
           setIsUpdated(true)
            setStatus(response.data.lock.status)

        }
    }
   
    useEffect(()=> {
        async function fetchData() {
            const response = await getSingleLock(props.lock.id)
            setUsers(response.data.door.users)
        }
       fetchData()
    } , [open])
    return (
        <Box sx={{display: 'flex',}}>
            <Box sx={{m:1, p:1, display: 'flex', textAlign: 'left' , flex:1, flexDirection:'column'}}>               
                <Box sx={{m:1}}>
                    <Typography>Authenticated Users</Typography>
                </Box>
                {users.map((user, index) => {
                    return ( 
                        <Tooltip title="Remove User">
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
                                  backgroundColor: '#ffe7e6'                        }, 
                                }}
                                onClick={() => removeUserOnclickHandler({ user , lock: props.lock.id})}
                                >
                                <Typography key={index}>{user}</Typography>
                                 <RemoveCircleOutlineIcon />
                            </Box>
                        </Tooltip>
                    )
                })}
            </Box>
            {isUpdated ? <></> : <></>}
            <Box sx={{m:1, p:1,display: 'flex', flex: 1, flexDirection: 'column' }}>
                <Box sx={{m:1, textAlign: 'left'}}>
                    <Typography>Actions</Typography>
                </Box>
                {status  === 'active'  ?
                        (
                            <Box fullWidth sx={{m:1}}>
                                <Button fullWidth variant="contained" color="error" onClick={() => passiveLockOnclickHandler({lock: props.lock.id})}>Disable Lock </Button>
                            </Box>
                        )   
                        : 
                        (
                            <Box fullWidth sx={{m:1}}>
                                <Button fullWidth variant="contained" color="success" onClick = {() => activeLockOnclickHandler({lock: props.lock.id})}>Enable Lock </Button>    
                            </Box>
                        )
                }
                <Box sx={{m:1}}>
                    <Button fullWidth variant="contained" color="info"  onClick={() => addUserOnclickHandler({lock: props.lock.id})}>
                        Add New User
                    </Button>
                    <Modal
                      open={open}
                      onClose={handleModalClose}
                      aria-labelledby="modal-modal-title"
                      aria-describedby="modal-modal-description"
                    >   
                      
                        <CreateUserModalContent  lock={props.lock}/>
                    </Modal>
                </Box>
               
            </Box>
        </Box>
    )
}
export default DetailsNew