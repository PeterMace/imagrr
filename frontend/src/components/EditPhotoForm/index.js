import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPhoto } from '../../store/photos';
import { useHistory } from 'react-router-dom';
import './EditPhotoForm.css';


const EditPhotoForm = ({photo, hideForm}) => {
    //const photos = useSelector(state => state.photos);
    const id = photo.id;
    const userId = useSelector(state => state.session.user?.id);
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState(photo.title);
    const [imageUrl, setImageUrl] = useState(photo.imageUrl);
    const [description, setDescription] = useState(photo.description);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateImageUrl = (e) => setImageUrl(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    const [errors, setErrors] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        const payload = {
            id,
            userId,
            title,
            imageUrl,
            description,
        }
    

        try{
            const dispatchPhoto = await dispatch(editPhoto(payload));
            if (dispatchPhoto) {
                 hideForm();
              history.push(`/photos/${id}`);
            }
        } catch(err){
            const errorResponse = await err.json();
            const errorsArray = errorResponse.errors.filter(error => error !=="Invalid value")
            setErrors(errorsArray)
        }
      };

    
    return (
        <>
            { userId && (
                <form onSubmit={handleSubmit} className='photo-form'>
                    <h3> Update photo</h3>
                    {errors.map((error)=>(
                        <p key={error}>{error}</p>
                    ))}

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
                    <button type="submit">Update photo</button>
                </form>)
            }
        </>
   )
};

export default EditPhotoForm;