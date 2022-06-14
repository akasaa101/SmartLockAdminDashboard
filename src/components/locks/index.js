import { Box, Button, Modal, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllLocks } from '../../apis'
import LocksAcordion from './acordion'
import AddNewLockModalContent from './addNewLock'
    
const Locks = () => {
    const [open, setOpen] = useState(false)
    const [doors, setDoors] = useState([])
    
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        async function fetchData() {
            const response = await getAllLocks()
             const rows = response.data.doors.map((door, index) => {
                return {
                    id: door.id,
                    name: door.name,
                    status: door.status,
                    users: door.users
                }
            })  
            setDoors(rows)
        }
        fetchData()
    
    }, []);

    const addNewLockOnClickHandler = () => {
        alert("add new lock")
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

    return (
        <Box> 
            {
            doors.map((door, index) => 
                 {
                     return(
                        <LocksAcordion door={door}/>
                    )
                 }
            )
            } 
             <Button sx={{m:3}} variant="contained" onClick={() => handleOpen()}>Add new Lock</Button>
                 <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                    <AddNewLockModalContent />
                </Modal>
        </Box>
    )
}

export default Locks