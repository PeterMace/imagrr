# imagrr
A react-redux clone of flickr. A community to share images with others. 

Live Project: https://imagrr.herokuapp.com/
Wiki: https://github.com/PeterMace/imagrr/wiki

Imagrr allows users to upload their own images with an image URL. User can then organize their images into albums. Users are able to comment on and favorite photos.

# Technologies Used:

Frontend - CSS, HTML, Redux, React
Backend - Express, Sequelize, Express-Validators

# Installation Directions:

npm install
This will install the nested node dependencies for both the front and backend.

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view the frontend in the browser. 

The page will reload if you make edits.
You will also see any lint errors in the console.


# Technical Implementation

The following is a snippet of code from the CommentDetail component. This component is meant to display the contents of each comment while also restricting edit and delete functionality to the comment's owner. Optional chaining had to be implemented to prevent errors with permission checks.

```    
const ownerPermission = userId === comment?.userId;
    
    const handleDelete = async (e) => {
        e.preventDefault();
        const dispatchPhoto = await dispatch(deleteComment(comment));
    }
    
    if (!comment) {
        return null;
    }

    let content = null;
    if (showEditForm){
        content = (
            <EditCommentForm comment={comment} hideForm={() => setShowEditForm(false)} />
          )
        }
    
    if(!comment){
        return null;
    }
    return (
      <main>
        <div id="comment">
            {!showEditForm &&
              <p key={comment.id}> 
                {comment.content}
              </p>}
            {(ownerPermission && !showEditForm) ? <button onClick={() => setShowEditForm(!showEditForm)}>Edit Comment</button> : null}
            {(ownerPermission && !showEditForm) ? <button onClick={handleDelete}>Delete Comment</button> : null}
            {content}
              <br />
        </ div>
      </main>
    );
```
