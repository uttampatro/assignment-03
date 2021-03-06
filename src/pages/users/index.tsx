import {
    Button,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Link,
    makeStyles,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    ThemeProvider,
    Toolbar,
    Typography
} from '@material-ui/core';
import { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import { deleteUser, getAllUsers, logout } from '../../redux/users/operators';
import { UsersState } from '../../redux/users/states';


const useStyles = makeStyles({
    table: {
        width: '100%',
        margin: '50px',
        paddingLeft: '50px',
    },
    thead: {
        '& > *': {
            fontSize: 20,
            background: '#000000',
            color: '#FFFFFF',
        },
    },
    row: {
        '& > *': {
            fontSize: 18,
            cursor: 'pointer',
        },
    },
});

const Users = (props: any) => {
    const classes = useStyles();
    const theme = createTheme();

    const dispatch = useDispatch();
    const { allUsers, isFetchingAllUsers, isDeletingUser }: UsersState = useSelector((state: RootStateOrAny) => state.users);

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])

    const deletingUser = async (id: any) => {
        const data = await dispatch(deleteUser(id))
        window.location = window.location;
        history.push('/users');
    }

    const onLogout = () => {
        dispatch(logout());
    };

    if (isFetchingAllUsers) return <>Loading...</>

    // TODO: Show users table
    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
                        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
                            Users
                        </Typography>
                        <Grid>
                            <Link href="/blogs">
                                <Button variant="outlined" size="small">
                                    Blogs
                                </Button>
                            </Link>
                        </Grid>
                        <Grid>
                            <Link href="/signIn">
                                <Button variant="outlined" size="small" onClick={onLogout}>
                                    Logout
                                </Button>
                            </Link>
                        </Grid>
                    </Toolbar>
                    <main>
                        <Grid style={{ paddingTop: '20px' }} container spacing={4}>
                            <form method="post">
                                <div className="home_body">
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow className={classes.thead}>
                                                <TableCell>ID</TableCell>
                                                <TableCell>Name</TableCell>
                                                <TableCell>Email</TableCell>
                                                <TableCell>Role</TableCell>
                                                <TableCell>Delete</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {allUsers.map(user => {
                                                return (
                                                    <TableRow className={classes.row}>
                                                        <TableCell>{user._id}</TableCell>
                                                        <TableCell>{user.name}</TableCell>
                                                        <TableCell>{user.email}</TableCell>
                                                        <TableCell>{user.role}</TableCell>
                                                        <TableCell>
                                                            <Button onClick={() => deletingUser(user._id)} color="secondary" variant="contained">
                                                                Delete
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}

                                        </TableBody>
                                    </Table>
                                </div>
                            </form>
                        </Grid>
                    </main>
                </Container>
            </ThemeProvider>
        </div >
    );
};

export default Users;
