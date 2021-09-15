import React, { useEffect } from 'react';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { getAllBlogs } from '../../redux/blogs/operators';
import { BlogsState } from '../../redux/blogs/states';


const Blogs = (props: any) => {
    const dispatch = useDispatch();
    const { blogs, isFetchingAllBlogs }: BlogsState = useSelector((state: RootStateOrAny) => state.users);

    useEffect(() => {
        dispatch(getAllBlogs())
    }, [])

    if (isFetchingAllBlogs) return <>Loading...</>

    // TODO: Show blogs table
    return <>{blogs.map(blog => blog.id)}</>;
};

export default Blogs;
