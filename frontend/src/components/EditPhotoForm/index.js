import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { editPhoto } from '../../store/photos';
import './EditPhotoForm.css';


const EditPhotoForm = ({photo, hideForm}) => {
    //const photos = useSelector(state => state.photos);
    const id = photo.id;
    const userId = useSelector(state => state.session.user?.id);
    const dispatch = useDispatch();

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
                <form onSubmit={handleSubmit} className='form'>
                    <h4> Update photo </h4>
                    {errors.map((error)=>(
                        <p key={error}>{error}</p>
                    ))}
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        placeholder="Title"
                        value={title}
                        onChange={updateTitle} 
                    />
                    <label htmlFor="url">Url</label>
                    <input
                        type="text"
                        placeholder="Image URL"
                        id="url"
                        value={imageUrl}
                        onChange={updateImageUrl} 
                    />
                    <label>Description</label>
                    <input
                        type="textarea"
                        id="url"
                        placeholder="description"
                        value={description}
                        onChange={updateDescription} 
                    />
                    <br />
                    <button type="submit">Update photo</button>
                </form>)
            }
        </>
   )
};

export default EditPhotoForm;