import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { decrement, increment } from '../store/counterSlice'
import { getPosts } from '../store/miestado/thunk'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Counter() {
const miestado = useSelector((state) => state.miestado)
const counter = useSelector((state) => state.counter)
const dispatch = useDispatch()

useEffect(() => {
    dispatch(getPosts())
}, [])

return (
<div>
    <div>
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            p: 1,
            m: 1,
            bgcolor: 'background.paper',
            borderRadius: 1,
        }}
    >
        <Button variant="contained" aria-label="Increment value" onClick={()=> dispatch(increment())}>
            Increment
        </Button>
        
            {counter.value}
        
        <Button variant="contained" aria-label="Decrement value" onClick={()=> dispatch(decrement())}>
            Decrement
        </Button>     
    </Box>   
    </div>
    <div>                
        <TableContainer component={Paper}>
        <Table size='small' aria-label="table">
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Title</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {miestado.list.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.title}</TableCell>              
                </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
    
</div>
)
}
export default Counter