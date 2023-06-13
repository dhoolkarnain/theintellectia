import React from 'react'
import { Outlet } from 'react-router-dom';

const BlogsPage = ( { categories } ) =>
{
    return (
        <div>
            <Outlet />
        </div>
    )
}

export default BlogsPage
