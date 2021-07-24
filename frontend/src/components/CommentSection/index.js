import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getComments, } from '../../store/comments';
import { useHistory } from 'react-router-dom';
import CommentDetail from '../CommentDetail';


const CommentSection = ({photoId}) => {
    //const photos = useSelector(state => state.photos);
    const userId = useSelector(state => state.session.user?.id);
    const dispatch = useDispatch();
    const history = useHistory();



    const comments = useSelector(state => {
        return Object.values(state.comments).filter(comment => comment.photoId === photoId);
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
        <div>
          { comments.map((comment) => {
            return (
              <CommentDetail comment={comment} />
            );
          })}
        </ div>
      </main>
    );
};

export default CommentSection;