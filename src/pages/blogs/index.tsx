import {
    Button,
    Card,
    CardActionArea,
    CardContent,
    CardMedia,
    Container,
    createTheme,
    CssBaseline,
    Grid,
    Link,
    ThemeProvider,
    Toolbar,
    Typography,
} from '@material-ui/core';
import React from 'react';
import history from '../../history';

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

                        <Link href="/signUp">
                            <Button variant="outlined" size="small">
                                Sign up
                            </Button>
                        </Link>
                    </Toolbar>
                    <main>
                        <Grid style={{paddingTop: '20px'}} container spacing={4}>
                            {blogs.map(blog => (
                                <Grid onClick={goToBlog} item xs={12} md={6}>
                                    <CardActionArea component="a" href="#">
                                        <Card style={{display: 'flex'}}>
                                            <CardContent style={{flex: 1}}>
                                                <Typography component="h2" variant="h5">
                                                    {blog.title}
                                                </Typography>
                                                <Typography variant="subtitle1">{blog.date}</Typography>
                                                <Typography style={{paddingTop: '10px'}} variant="subtitle1" paragraph>
                                                    {blog.description}
                                                </Typography>
                                            </CardContent>
                                            <CardMedia
                                                component="img"
                                                style={{width: 160, height: 200, display: 'block'}}
                                                image={blog.image}
                                                alt={blog.imageLabel}
                                            />
                                        </Card>
                                    </CardActionArea>
                                </Grid>
                            ))}
                        </Grid>
                    </main>
                </Container>
            </ThemeProvider>
        </div>
    );
};

export default Blogs;
