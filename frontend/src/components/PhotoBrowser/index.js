import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getPhotos } from '../../store/photos';

console.log()

const PhotoBrowser = () => {
    const dispatch = useDispatch();

     const { photosId } = useParams();

     console.log(photosId);
    const photos = useSelector(state => {
        console.log(state);
        return state
        //state.photo.list.map(photosId => state.photo[photosId]);
    });
//   const [showForm, setShowForm] = useState(false);

    useEffect(async ()=>{
       await dispatch(getPhotos());
    },[])

    if (!photos) {
        return null;
      }
    
      return (
        <main>
          {/* <nav>
            <Fab hidden={showForm} onClick={() => setShowForm(true)} /> */}
            {photos.map((photo) => {
              return (
                <NavLink key={photo.title} to={`/photos/${photo.id}`}>

                    <div
                      className="browser-image"
                      style={{ backgroundImage: `url('${photo.imageUrl}')` }}
                    ></div>
                    <div>
                      <div className="primary-text">{photo.title}</div>
                      <div className="secondary-text">
                        {photo.id} {photo.description && "(Captured)"}
                      </div>
                    </div>
                  
                </NavLink>
              );
            })}
        </main>
      );
};

export default PhotoBrowser;