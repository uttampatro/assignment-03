import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as React from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { UsersState } from '../../redux/users/states';

const theme = createTheme();

export default function SignIn() {
    const dispatch = useDispatch();

    const { user, isAuthenticated }: UsersState = useSelector((state: RootStateOrAny) => state.users);

    // const { email, password } = user;
    // const handleSubmit = async (e: any) => {
    //     e.preventDefault();
    //     try {
    //         const result = await dispatch(login(email, password))
    //         if (email) {
    //             history.push('/blogs')
    //         }
    //         console.log(result)
    //     } catch (error) {
    //         console.log(error)
    //     }

    // };

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
                                <TextField required fullWidth id="email" label="Email Address" name="email" autoComplete="email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
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
                            type="submit"
                            fullWidth
                            variant="contained"
                            style={{ marginTop: '30px', padding: '3px', marginBottom: '20px', backgroundColor: 'lightblue' }}
                        >
                            Sign In
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
