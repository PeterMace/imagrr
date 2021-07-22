import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { retrievePhoto, deletePhoto } from '../../store/photos';
import  EditPhotoForm from './../EditPhotoForm';
import './PhotoDetail.css';

export const PhotoDetail = () => {
    const { photoId } = useParams();
    const photos = useSelector(state => state.photos);
    const userId = useSelector(state => state.session.user?.id);
    const selectedPhoto = photos[photoId]
    const dispatch = useDispatch();
    const history = useHistory();

    const [showEditForm, setShowEditForm] = useState(false);
    
    useEffect(() => {
        async function fetchData() {
            const response = await dispatch(retrievePhoto(photoId));
        }
        fetchData();
    }, [dispatch, photoId, ]);

    const handleEdit =  (e) => {
        e.preventDefault();
        history.push(`/photos/${photoId}/edit`);
    }

    const handleDelete = async (e) => {
        e.preventDefault();
        const dispatchPhoto = await dispatch(deletePhoto(selectedPhoto));
        history.push(`/photos/`);
    }

    let content = null;
    if (showEditForm){
        content = (
            <EditPhotoForm photo={selectedPhoto} hideForm={() => setShowEditForm(false)} />
          )
        }
    
    return (
        <div className="photo-detail">
            {console.log(photos, "photo")}
            <h4> {selectedPhoto.title} </h4>
            <img src={selectedPhoto.imageUrl} />
            <p>{selectedPhoto.description}</p>
            {selectedPhoto.userId === userId ? <button onClick={(e) => setShowEditForm(!e.target.value)}>Edit Photo</button> : null}
            {selectedPhoto.userId === userId ? <button onClick={handleDelete}>Delete Photo</button> : null}
            {content}
        </div>
    )
}

export default PhotoDetail;