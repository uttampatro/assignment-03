import { Button, CardMedia, Container, createTheme, Grid, Link, Toolbar, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBlogDetails } from '../../redux/blogs/operators';
import { BlogsState } from '../../redux/blogs/states';
import { logout } from '../../redux/users/operators';

function Blog() {
    const theme = createTheme();
    const dispatch = useDispatch();
    const { blog, isFetchingBlog, isFetchingBlogSuccess }: BlogsState = useSelector((state: RootStateOrAny) => state.blogs);

    console.log(blog)
    const { createdBy } = blog

    const { id }: any = useParams();

    useEffect(() => {
        dispatch(getBlogDetails(id));
    }, []);

    const onLogout = () => {
        dispatch(logout());
    };

    if (isFetchingBlog) return <>Loading...</>;


    return (
        <Container key={blog._id} style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
            <Grid xs={12}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
                    <Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
                        Blog
                    </Typography>

                    <Link href="/signIn">
                        <Button variant="outlined" size="small" onClick={onLogout}>
                            Logout
                        </Button>
                    </Link>
                </Toolbar>
                <Typography
                    style={{ marginTop: '20px', fontSize: 'xx-large', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}
                >
                    {blog.title}
                </Typography>
                <Grid
                    style={{
                        marginTop: '20px',
                        marginLeft: '25%',
                        width: '50%',
                    }}
                >
                    <CardMedia
                        style={{
                            width: '100%',
                            height: '400px',
                            marginBottom: '20px',
                        }}
                        component="img"
                        image={blog.imageUrl}
                        alt="imageLabel"
                    />
                    <Typography style={{ fontWeight: 'normal' }}>
                        {blog.article}
                    </Typography>

                    <Typography style={{ padding: '20px', paddingLeft: '40%', fontWeight: 'bolder', justifyContent: 'center' }}>
                        CreatedBy <span style={{ color: 'blue', cursor: 'pointer' }}>{createdBy.name}</span>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Blog;
