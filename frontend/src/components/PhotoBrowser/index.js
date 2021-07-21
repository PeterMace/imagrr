import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Route, useParams } from 'react-router-dom';
import { getPhotos } from '../../store/photos';
import CreatePhoto  from './../CreatePhoto/';
import './PhotoBrowser.css';


const PhotoBrowser = () => {
    const dispatch = useDispatch();

    const { photoId } = useParams();

    const photos = useSelector(state => {
        return Object.values(state.photos)
    });

    useEffect( async ()=> {
       await dispatch(getPhotos());
    },[])

    if (!photos) {
        return null;
      }
      return (
          <main>
            {console.log(photos)};
            <div id="image-container">
            {photos.map((photo) => {
              return (
                <NavLink key={photo.id} to={`/photos/${photo.id}`}>
                    <div
                      className="browser-image"
                      style={{ backgroundImage: `url('${photo.imageUrl}')` }}
                    ></div>
                </NavLink>
              );
            })}
            </ div>
            <CreatePhoto  />
        </main>
      );
};

export default PhotoBrowser;