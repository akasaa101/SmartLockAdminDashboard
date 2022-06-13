import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { getAllUsers } from '../../apis'
import UserItem from './userItem'
import { useDispatch } from 'react-redux';
import { Modal } from '../../store'
    
const Users = () => {
    const [users, setUsers] = useState([])
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };


    useEffect(() => {
        async function fetchData() {
            const response = await getAllUsers()
            const users = response.data.customers
            setUsers(users)
            dispatch(Modal.actions.setUsers(users))
        }
        fetchData()
    
    }, []);

    return (
        <Box> 
            {
            users.map((user, index) => 
                 {
                     return(
                         <UserItem user={user}/>
                    )
                 }
            )
            }
        </Box>
    )
}

export default Users