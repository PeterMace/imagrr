import React from 'react'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { retrievePhoto } from '../../store/photos';

export const PhotoDetail = () => {
    const { photoId } = useParams();
    const photos = useSelector(state => state.photos);
    const selectedPhoto = photos[photoId]
    const dispatch = useDispatch();
    
    
    useEffect(() => {
        async function fetchData() {
            const response = await dispatch(retrievePhoto(photoId));
        }
        fetchData();
    }, [dispatch, photoId]);
    
    return (
        <div>
            {console.log(photos, "photo")}
            <h4> {selectedPhoto.title} </h4>
            <img src={selectedPhoto.imageUrl} />
            <p>{selectedPhoto.description}</p>
        </div>
    )
}


export default PhotoDetail;