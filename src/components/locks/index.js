import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllLocks } from '../../apis'
import LocksAcordion from './acordion'
    
const Locks = () => {
    const [doors, setDoors] = useState([])
   const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


    useEffect(() => {
        async function fetchData() {
            const response = await getAllLocks()
             const rows = response.data.doors.map((door, index) => {
                return {
                    id: index,
                    name: door.name,
                    number: 1,
                    status: door.status,
                    users: door.users
                }
            })  
            setDoors(rows)
        }
        fetchData()
    
    }, []);

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
        </Box>
    )
}

export default Locks