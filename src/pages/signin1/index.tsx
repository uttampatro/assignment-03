import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import { login } from '../../redux/users/operators';
import { UsersState } from '../../redux/users/states';

const theme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();

    const { isLoggingIn, isLoggingInSuccess, isLoggingInFailure }: UsersState = useSelector((state: RootStateOrAny) => state.users);
    const [currentUser, setCurrentUser] = useState({
        email: '',
        password: ''
    })
    const { email, password } = currentUser

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            if (!email || !password) {
                return alert("Please provide all fields")
            }
            dispatch(login(email, password));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isLoggingInSuccess) {
            history.push('/blogs');
        }
    }, [isLoggingInSuccess])

    useEffect(() => {
        if (isLoggingInFailure) {
            alert("Something went wrong")
        }
    }, [isLoggingInFailure])

    const handleChange = (e: any) => {
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
                        marginTop: '80px',
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar style={{ margin: '10px', backgroundColor: 'lightRed' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign In
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={email}
                                    onChange={handleChange}
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    value={password}
                                    onChange={handleChange}
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={isLoggingIn}
                            onClick={handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ marginTop: '30px', padding: '3px', marginBottom: '20px', backgroundColor: 'lightblue' }}
                        >
                            {isLoggingIn ? "Singing In..." : "Sign In"}

                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/signUp" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
