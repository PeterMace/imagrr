import './LandingPage.css';


const LandingPage = () => {
    //const photos = useSelector(state => state.photos);
    

    
    return (
        <>
            
                <form  className='photo-form'>
                    <h3> Update photo</h3>
                   
                    <input
                        type="text"
                        placeholder="Title"
                    />
                    <input
                    type="text"
                    placeholder="Image URL"
                    />
                    <input
                    type="text"
                    placeholder="description"
                    />
                    <button type="submit">Update photo</button>
                </form>
            
        </>
   )
};

export default LandingPage;