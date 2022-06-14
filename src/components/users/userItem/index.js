import { Typography, Box, Container, Button } from '@mui/material'
import { useEffect, useState } from 'react'
import { getLocksOfUser } from '../../../apis'
import LockIcon from '@mui/icons-material/Lock';

const UserItem = (props) => {
    const [authLocks, setAuthLocks] = useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await getLocksOfUser(props.user._id)
            const locks = response.data.locks
            console.log(locks)
            setAuthLocks(locks)
        }
        fetchData()
    
    }, []);

    return (
        <Box sx={{ m:2, p:2, borderRadius: '5px', boxShadow: 'inset 0px -1px 0px rgba(145, 158, 171, 0.24)',border: '1px solid rgba(145, 158, 171, 0.24)', textAlign: 'left', display: 'flex', flexDirection: 'row', backgroundColor: '#dff9fb'}}>
            <Container sx={{m:1, display: 'flex', flexDirection: 'column', flex:1, backgroundColor: 'white', p:1}}>
                <Typography>Name  : {props.user.name} {props.user.surname}</Typography>
                <Typography>Email : {props.user.email}</Typography>
                <Typography>Phone : {props.user.phone}</Typography>
            </Container>
             <Container sx={{ m:1, p : 1,display: 'flex',  flexDirection: 'column', flex:1, backgroundColor: 'white'}}>
                 {authLocks.map((lockItem, lockIndex) => {
                     return (
                         <Box sx={{display: 'flex', flex: 1, flexDirection: 'row'}}>
                            <LockIcon/>
                            <Typography>- {lockItem.name}</Typography>
                        </Box>
                     )
                 })}
                
            </Container>

            
        </Box>
    )
}

export default UserItem;
