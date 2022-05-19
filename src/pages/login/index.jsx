import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

import { auth } from '../../store/login/thunk'
import { useSelector, useDispatch } from 'react-redux'


function Copyright(props) {
return (
<Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://mui.com/">
    Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
</Typography>
);
}

const theme = createTheme();

export default function SignIn() {    
    const dispatch = useDispatch()
    const loginState = useSelector((state) => state.login)
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const dataForm = {
            identifier: data.get('email'),
            password: data.get('password'),
        }
        // console.log(dataForm);
        dispatch(auth(dataForm))
    };

    return (
    <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField margin="normal" required fullWidth id="email" label="Email Address" name="email"
                        autoComplete="email" autoFocus />
                    <TextField margin="normal" required fullWidth name="password" label="Password" type="password"
                        id="password" autoComplete="current-password" />
                    {
                    loginState.error &&
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="error" name="alert-error">This is an error alert — check it out!</Alert>            
                    </Stack>
                    }
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                    />
                    <Button type="submit" name="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                            Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="#" variant="body2">
                            {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
    </ThemeProvider>
    );
}