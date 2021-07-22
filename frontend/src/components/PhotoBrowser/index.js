import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPhotos } from '../../store/photos';
import CreatePhoto  from './../CreatePhoto/';

import './PhotoBrowser.css';


const PhotoBrowser = () => {
    const dispatch = useDispatch();

    const photos = useSelector(state => {
        return Object.values(state.photos)
    });

    useEffect(() => {
      async function fetchData() {
        await dispatch(getPhotos());
      }
      fetchData();
    }, [dispatch])

    if (!photos.length) {
        return null;
      }
    return (
      <main>
        <div id="image-container">
          { photos.map((photo) => {
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