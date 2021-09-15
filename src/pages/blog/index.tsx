import { Button, CardMedia, Container, createTheme, Grid, Link, Toolbar, Typography } from '@material-ui/core';
import React from 'react';

function Blog() {
    const theme = createTheme();

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', width: '100vw' }}>
            <Grid xs={12}>
                <Toolbar style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid gray' }}>
                    <Typography component="h2" variant="h5" color="inherit" align="center" noWrap>
                        Blog
                    </Typography>

                    <Link href="/signUp">
                        <Button variant="outlined" size="small">
                            Sign up
                        </Button>
                    </Link>
                </Toolbar>
                <Typography
                    style={{ marginTop: '20px', fontSize: 'xx-large', fontWeight: 'bold', display: 'flex', justifyContent: 'center' }}
                >
                    NodeJs
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
                        image="https://source.unsplash.com/random"
                        alt="imageLabel"
                    />
                    <Typography style={{ fontWeight: 'normal' }}>
                        The Amazon Clone was a part of the 5 day React Challenge which was held by the Clever Programmer team. During those
                        five days, people were so pumped up and their energy made the challenge even more special. Also the Amazon Clone
                        will also be a huge part of your portfolio because the project covers an entire E-Commerce solution! From Designing,
                        Authentication till Payment, everything is taken care of! In this article, we will go in depth and make the Amazon
                        Clone using React. We will also be using Firebase for Authentication, Database, Functions and Hosting. Firebase is a
                        great tool to get started with projects quickly. We will also be using HTML, CSS and React Context API. Please keep
                        in mind, you need to have Visual Studio Code and NodeJS installed.
                        The Amazon Clone was a part of the 5 day React Challenge which was held by the Clever Programmer team. During those
                        five days, people were so pumped up and their energy made the challenge even more special. Also the Amazon Clone
                        will also be a huge part of your portfolio because the project covers an entire E-Commerce solution! From Designing,
                        Authentication till Payment, everything is taken care of! In this article, we will go in depth and make the Amazon
                        Clone using React. We will also be using Firebase for Authentication, Database, Functions and Hosting. Firebase is a
                        great tool to get started with projects quickly. We will also be using HTML, CSS and React Context API. Please keep
                        in mind, you need to have Visual Studio Code and NodeJS installed.
                    </Typography>

                    <Typography style={{ padding: "20px", paddingLeft: "40%", fontWeight: 'bolder', justifyContent: "center" }}>
                        CreatedBy <span style={{ color: 'blue', cursor: "pointer" }}>uttam</span>
                    </Typography>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Blog;
