import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createPhoto, getPhotos } from '../../store/photos';
import { useHistory } from 'react-router-dom';
import './CreatePhoto.css';


const CreatePhoto = () => {
    //const photos = useSelector(state => state.photos);
    const userId = useSelector(state => state.session.user?.id);
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [description, setDescription] = useState('');

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
        userId,
        title,
        imageUrl,
        description,
        };
    
        const dispatchPhoto = await dispatch(createPhoto(payload));
        console.log(dispatchPhoto.photo);
        if (dispatchPhoto) {
          history.push(`/photos/${dispatchPhoto.photo.id}`);
        }
      };

    
    return (
        <>
            { userId && (
                <form onSubmit={handleSubmit} className='photo-form'>
                    <input
                        type="text"
                        placeholder="Title"
                        value={title}
                        onChange={updateTitle} />
                    <input
                    type="text"
                    placeholder="Image URL"
                    value={imageUrl}
                    onChange={updateImageUrl} />
                    <input
                    type="text"
                    placeholder="description"
                    value={description}
                    onChange={updateDescription} />
                    <button type="submit">Create new photo</button>
                </form>)
            }
        </>
   )
};

export default CreatePhoto;