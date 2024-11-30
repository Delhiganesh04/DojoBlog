import { useParams } from 'react-router-dom';
import useFeatch from './useFeatch';
import { useHistory } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const {data:blog,error,isPending} = useFeatch('http://localhost:8000/blogs/'+id);
    const history = useHistory();
    

    const handleDelete = () =>{
    fetch('http://localhost:8000/blogs/' + id, {
        method: 'DELETE'
    }).then(() => {
        console.log('blog deleted');
        history.push('/');
    })
}
   
    return ( 
        <div className="blog-details">
         {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div className='content'>{blog.content}</div>
                <button onClick={handleDelete}>delete</button>
                </article>
            )}


        </div>
     );
}
 
export default BlogDetails;