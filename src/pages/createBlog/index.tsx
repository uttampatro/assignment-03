import { Box, Button, Container, CssBaseline, Grid, TextareaAutosize, TextField, Typography } from '@material-ui/core';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import history from '../../history';
import { createBlog } from '../../redux/blogs/operators';
import { BlogsState } from '../../redux/blogs/states';



export default function CreateBlog() {
    const dispatch = useDispatch();
    const theme = createTheme();


    const { blog, isCreatingBlog, isCreatingBlogSuccess, isCreatingBlogFailure }: BlogsState = useSelector(
        (state: RootStateOrAny) => state.blogs
    );

    const [currentBlog, setCurrentBlog] = useState({
        title: '',
        article: '',
        imageUrl: '',
    });

    const { title, article, imageUrl } = currentBlog

    const handleSubmit = (userId: any) => {
        try {
            dispatch(createBlog({ title, article, imageUrl, userId }));
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (isCreatingBlogSuccess) {
            history.push('/blogs');
        }
    }, [isCreatingBlogSuccess])

    useEffect(() => {
        if (isCreatingBlogFailure) {
            alert("Something went wrong")
        }
    }, [isCreatingBlogFailure])

    const handleChange = (e: any) => {
        setCurrentBlog(prev => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" style={{ position: 'fixed', width: '80%', marginTop: '80px', padding: '50px' }}>
                <CssBaseline />
                <Box
                    sx={{
                        border: '1px solid gray',
                        borderRadius: '2px',
                        marginLeft: '250px',
                        padding: '30px',
                    }}
                >
                    <Typography component="h1" variant="h5">
                        Add Blog
                    </Typography>
                    <Box component="form" sx={{ mt: 3 }}>
                        <Grid container spacing={5}>
                            <Grid item xs={12}>
                                <TextField
                                    value={title}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    autoComplete="title"
                                />
                            </Grid>
                            <Grid style={{ marginBottom: '30px' }} item xs={12}>
                                <TextareaAutosize
                                    required
                                    value={article}
                                    onChange={handleChange}
                                    aria-label="minimum height"
                                    placeholder="Article"
                                    style={{ width: '100%', height: '200%', fontSize: 'large', padding: '10px' }}
                                />
                                {/* <TextField
                                    value={article}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    name="article"
                                    label="Article"
                                    type="article"
                                    id="article"
                                /> */}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    value={imageUrl}
                                    onChange={handleChange}
                                    required
                                    fullWidth
                                    name="imageUrl"
                                    label="ImageUrl"
                                    type="imageUrl"
                                    id="imageUrl"
                                />
                            </Grid>
                        </Grid>
                        <Button
                            onClick={handleSubmit}
                            type="submit"
                            variant="contained"
                            style={{
                                marginTop: '30px',
                                padding: '10px 30px',
                                marginBottom: '20px',
                                marginLeft: '40%',
                                backgroundColor: 'lightblue',
                            }}
                        >
                            Create Blog
                        </Button>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
