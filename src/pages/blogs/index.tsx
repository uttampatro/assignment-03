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
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import { getAllBlogs } from '../../redux/blogs/operators';
import { BlogsState } from '../../redux/blogs/states';
import { logout } from '../../redux/users/operators';

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

const BlogList = (props: any) => {
    const classes = useStyles();
    const theme = createTheme();
    const dispatch = useDispatch();
    const { blogs, isFetchingAllBlogs, isFetchingAllBlogsSuccess }: BlogsState = useSelector((state: RootStateOrAny) => state.blogs);

    useEffect(() => {
        dispatch(getAllBlogs());
    }, []);

    const onLogout = () => {
        dispatch(logout())
        history.push('/signIn');
    }

    const goToBlog = () => {
        history.push('/blog');
    };

    if (isFetchingAllBlogs) return <>Loading...</>;

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Toolbar style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
                        <Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
                            Blog
                        </Typography>
                        <Grid>
                            <Link href="/users">
                                <Button variant="outlined" size="small">
                                    Users
                                </Button>
                            </Link>
                        </Grid>
                        <Grid>
                            <Button variant="outlined" size="small" onClick={onLogout}>
                                Logout
                                </Button>
                        </Grid>
                    </Toolbar>
                    <main>
                        <Grid style={{ paddingTop: '20px', paddingLeft: '20%' }} container spacing={4}>
                            <form method="post">
                                <div className="home_body">
                                    <Table className={classes.table}>
                                        <TableHead>
                                            <TableRow className={classes.thead}>
                                                <TableCell>ID</TableCell>
                                                <TableCell>Title</TableCell>
                                                <TableCell>Created By</TableCell>
                                                <TableCell>Created At</TableCell>
                                                <TableCell>Delete</TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {blogs?.map(blog => (
                                                <TableRow className={classes.row} >
                                                    <TableCell>1</TableCell>
                                                    <TableCell onClick={goToBlog}>
                                                        <Link>{blog.title}</Link >
                                                    </TableCell>
                                                    <TableCell>{blog.createdBy.name}</TableCell>
                                                    <TableCell>{blog.createdAt}</TableCell>

                                                    <TableCell>
                                                        <Button color="secondary" variant="contained">
                                                            Delete
                                                    </Button>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            </form>
                        </Grid>
                    </main>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default BlogList;
