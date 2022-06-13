import { Box, Typography, Grid, Button, ListItemText, ListItem, Paper, List, Checkbox,ListItemIcon } from '@mui/material'
import { useState, useEffect } from 'react'
import { getAllUsers } from '../../../apis'

function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
const AcordionDetailsContent = (props) => {
    const { lock } = props
    console.log("lock:",lock)
    const [ users, setUsers ] = useState([])
    const [checked, setChecked] = useState([]);
    const [left, setLeft] = useState(lock.users);
    const [right, setRight] = useState(["4e", "5e", "6e", "7e"]);

    const leftChecked = intersection(checked, left);
    const rightChecked = intersection(checked, right);

    const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    setRight(right.concat(left));
    setLeft([]);
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items) => (
    <Paper sx={{ width: 200, height: 230, overflow: 'auto', backgroundColor: '#ecf0f1'}}>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `transfer-list-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`${value }`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );


    useEffect(() => {
        async function fetchData() {
            const response = await getAllUsers()

            const users = response.data.customers
            console.log("users: ",users)
            setUsers(users)
            const right = users.map((user, index) => {
                return user.name + " " + user.surname
            })
            setRight(right)
            /*  const rows = response.data.users.map((door, index) => {
                return {
                    id: index,
                    name: door.name,
                    number: 1,
                    status: door.status,
                    users: door.users
                }
            })   */
            
        }
        fetchData()
    
    }, []);
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around'}}>
            <Box sx={{borderRadius: '5px',width: '80%', p:2, textAlign: 'left'}}>
          {/*       <Typography>ID {JSON.stringify(lock.id)}</Typography>
                <Typography>Users: {JSON.stringify(lock.users)}</Typography>
            </Box>
             <Box sx={{borderRadius: '5px', backgroundColor: 'gray', width: '45%', p:2, textAlign: 'left'}}> */}
                <Grid container spacing={2} justifyContent="center" alignItems="center" >
                    <Grid item >{customList(left)}</Grid>
                    <Grid item >
                      <Grid container direction="column" alignItems="center">
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleAllRight}
                          disabled={left.length === 0}
                          aria-label="move all right"
                        >
                          ≫
                        </Button>
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleCheckedRight}
                          disabled={leftChecked.length === 0}
                          aria-label="move selected right"
                        >
                          &gt;
                        </Button>
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleCheckedLeft}
                          disabled={rightChecked.length === 0}
                          aria-label="move selected left"
                        >
                          &lt;
                        </Button>
                        <Button
                          sx={{ my: 0.5 }}
                          variant="outlined"
                          size="small"
                          onClick={handleAllLeft}
                          disabled={right.length === 0}
                          aria-label="move all left"
                        >
                          ≪
                        </Button>
                      </Grid>
                    </Grid>
      <Grid item >{customList(right)}</Grid>
    </Grid>
            </Box>
        </Box>
    )
}
export default AcordionDetailsContent