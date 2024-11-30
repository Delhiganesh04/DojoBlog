// import {useState, useEffect } from 'react';
import BlogList from './BlogList';
import useFeatch from './useFeatch';


const Home = () => {


    const {data:blogs,isPending,error} = useFeatch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            { isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title={"All Blogs are my fav"}/>}
            {/* <BlogList blogs={blogs.filter((blog)=>blog.author==='Delhi')} title={"Delhi's Blogs"} handleDelete={handleDelete}/> */}
            
            
        </div>
     );
}
 
export default Home;