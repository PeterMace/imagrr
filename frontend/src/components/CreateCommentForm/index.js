import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createComment, } from '../../store/comments';
import { useHistory } from 'react-router-dom';


const CreateCommentForm = ({photoId}) => {
    //const photos = useSelector(state => state.photos);
    const userId = useSelector(state => state.session.user?.id);
    const dispatch = useDispatch();
    const history = useHistory();

    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);

    const updateContent = (e) => setContent(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
        userId,
        content,
        photoId
        };
        try{
            const createdComment = await dispatch(createComment(payload));
            if (createdComment) {
              history.push(`/photos/${photoId}`);
            }
        } catch (err){
            const errorResponse = await err.json();
            const errorsArray = errorResponse.errors.filter(error => error !=="Invalid value")
            setErrors(errorsArray)

        }

      };

    
    return (
        <>
            { userId && (
                <form onSubmit={handleSubmit} className='form'>
                    {errors.map((error)=>(
                        <p key={error}>{error}</p>
                    ))}
                    <input
                        type="text"
                        placeholder="Comment Here"
                        value={content}
                        onChange={updateContent} />
                    <button type="submit">Post Comment</button>
                </form>)
            }
        </>
   )
};

export default CreateCommentForm;