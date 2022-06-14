import { Box, Typography, TextField, Button } from '@mui/material'
import { useState } from 'react'
import { createLock } from '../../apis/locks'

const AddNewUserModalContent = () => {
    const [name, setName] = useState('');
    const [surName, setSurName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('')

    const [status, setStatus] = useState('ready');

    const handleChange = (event) => {
      setName(event.target.value);
    };

    const handleSubmit = async () => {
        const response = await createLock({name})
        if(response.data.status === 'success') {
            setStatus('success')
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
    
    return (
        
                  <Box sx={style}>
                       <Typography sx={{m: 1}} id="modal-modal-title" variant="h6" component="h2">
                     Create a new User
                    </Typography>
                     {/*  {status === 'ready' ? 
                      (
                          <>
                    <Box sx={{m:1}}>
                        <TextField 
                            value={name}
                            onChange={handleChange} 
                            id="outlined-basic" 
                            label="Name" 
                            variant="outlined" />
                        <TextField 
                            value={surName}
                            onChange={(event) => setSurName(event.target.value)} 
                            id="outlined-basic" 
                            label="Surname" 
                            variant="outlined" />
                        <TextField 
                            value={email}
                            onChange={(event) => setEmail(event.target.value)} 
                            id="outlined-basic" 
                            label="Email" 
                            variant="outlined" />
                        <TextField 
                            value={password}
                            onChange={(event) => setPassword(event.target.value)} 
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined" />
                         <TextField 
                            value={phone}
                            onChange={(event) => setPhone(event.target.value)} 
                            id="outlined-basic" 
                            label="Password" 
                            variant="outlined" />
                    </Box>
                    <Box sx={{marginTop: 3}}>
                        <Button onClick={()=> handleSubmit()} fullWidth variant="contained">Create</Button>
                    </Box>
                    </>

                      )
                      : 
                      (
                        <Box sx={{m:1}}>
                            <Typography>New user created successfully.</Typography>
                        </Box>
                      )
                    } */}
                  </Box>
    )
}

export default AddNewUserModalContent