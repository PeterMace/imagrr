import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, } from '../../store/comments';
import { useHistory } from 'react-router-dom';


const CommentSection = ({photoId}) => {
    //const photos = useSelector(state => state.photos);
    const userId = useSelector(state => state.session.user?.id);
    const dispatch = useDispatch();
    const history = useHistory();

    const [content, setContent] = useState('');
    const [errors, setErrors] = useState([]);


    const comments = useSelector(state => {
        return Object.values(state.comments)
    });

    useEffect(() => {
        async function fetchData() {
          await dispatch(getComments(photoId));
        }
        fetchData();
    }, [dispatch])

    
    if (!comments.length) {
        return null;
    }

    return (
      <main>
        <div id="image-container">
          { comments.map((comment) => {
            return (
              <p key={comment.id}> {comment.content}
              </p>
            );
          })}
        </ div>
      </main>
    );
};

export default CommentSection;