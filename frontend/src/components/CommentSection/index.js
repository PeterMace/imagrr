import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, } from '../../store/comments';
import CommentDetail from '../CommentDetail';
import './CommentSection.css';

const CommentSection = ({photoId}) => {
    const dispatch = useDispatch();

    const comments = useSelector(state => {
        return Object.values(state.comments).filter(comment => comment.photoId === photoId);
    });


    useEffect(() => {
        async function fetchData() {
          await dispatch(getComments(photoId));
        }
        fetchData();
    }, [dispatch, photoId])

    
    if (!comments.length) {
        return null;
    }
    return (
      <main>
        <div className="comment-detail">
          { comments.map((comment) => {
            return (
              <CommentDetail key={comment.id} comment={comment} />
            );
          })}
        </ div>
      </main>
    );
};

export default CommentSection;