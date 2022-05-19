import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { articulosList } from '../../store/articulos/thunk'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Dashboard() {
const articulos = useSelector((state) => state.articulos)
const dispatch = useDispatch()
useEffect(() => {
    dispatch(articulosList())
}, [])

return (
<div>
    <div>                
        
        <TableContainer component={Paper}>
        <Table size='small' name="table-articulos" aria-label="table">
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Title</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {articulos.list.map((row) => (
                <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                        {row.id}
                    </TableCell>
                    <TableCell align="right">{row.titulo}</TableCell>              
                </TableRow>
            ))}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
    
</div>
)
}
export default Dashboard