import {
    Avatar,
    Box,
    Button,
    Container,
    createTheme,
    CssBaseline,
    FormControl,
    Grid,
    InputLabel,
    Link,
    MenuItem,
    Select,
    TextField,
    ThemeProvider,
    Typography
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import { createUser } from '../../redux/users/operators';
import { UsersState } from '../../redux/users/states';


const theme = createTheme();

export default function SignUp() {
    const dispatch = useDispatch();
    const { isCreatingUser, isCreatingUserSuccess, isCreatingUserFailure }: UsersState = useSelector((state: RootStateOrAny) => state.users);

    const [role, setRole] = useState('');

    const handleChange = (e: any) => {
        setRole(e.target.value as string);
    };
    const [currentUser, setCurrentUser] = useState({
        email: '',
        password: '',
        name: '',
    })
    const { email, name, password } = currentUser
    const handleSubmit = (e: any) => {
        e.preventDefault();
        try {
            // dispatch(createUser(email, password, name,));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isCreatingUserSuccess) {
            history.push('/blogs');
        }
    }, [isCreatingUserSuccess])

    useEffect(() => {
        if (isCreatingUserFailure) {
            alert("Something went wrong")
        }
    }, [isCreatingUserFailure])

    const handleInputChange = (e: any) => {
        setCurrentUser(prev => {
            return { ...prev, [e.target.name]: e.target.value }
        })
    }

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        border: '1px solid gray',
                        borderRadius: '2px',
                        padding: '30px',
                        marginTop: '80px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar style={{ margin: '10px', backgroundColor: 'lightRed' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField onClick={handleInputChange} required fullWidth id="Name" label="Name" name="name" autoComplete="name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField onClick={handleInputChange} required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    onClick={handleInputChange}
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid style={{ marginTop: "5px" }} item xs={12}>
                                <FormControl fullWidth variant="outlined" >
                                    <InputLabel required >
                                        Role
                                    </InputLabel>
                                    <Select
                                        value={role}
                                        onChange={handleChange}
                                        label="Role"
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={20}>Admin</MenuItem>
                                        <MenuItem value={30}>Content-Writer</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{
                                marginTop: '20px',
                                marginBottom: '20px',
                                backgroundColor: 'lightblue',
                                padding: '3px',
                            }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signIn" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
