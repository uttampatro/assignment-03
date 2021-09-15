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
    Typography,
} from '@material-ui/core';
import React from 'react';
import history from '../../history';

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

const blogs = [
    {
        title: 'Featured post',
        date: 'Nov 12',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
    {
        title: 'Post title',
        date: 'Nov 11',
        description: 'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
    },
];

const Blogs = (props: any) => {
    const classes = useStyles();
    const theme = createTheme();
    // const dispatch = useDispatch();
    // const { blogs, isFetchingAllBlogs }: BlogsState = useSelector((state: RootStateOrAny) => state.users);

    // useEffect(() => {
    //     dispatch(getAllBlogs());
    // }, []);

    // if (isFetchingAllBlogs) return <>Loading...</>;

    // TODO: Show blogs table
    // <>{blogs.map(blog => blog.id)}</>

    const goToBlog = () => {
        history.push('/blog');
    };

    return (
        <div>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="lg">
                    <Toolbar style={{display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray'}}>
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
                    </Toolbar>
                    <main>
                        <Grid style={{paddingTop: '20px', paddingLeft: '20%'}} container spacing={4}>
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
                                            {blogs.map(blog => (
                                                <TableRow className={classes.row} onClick={goToBlog}>
                                                    <TableCell>1</TableCell>
                                                    <TableCell>{blog.title}</TableCell>
                                                    <TableCell>uttam</TableCell>
                                                    <TableCell>{blog.date}</TableCell>

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

export default Blogs;
