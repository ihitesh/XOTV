import React, { Component } from 'react';

const ShowPhotoGrid = (props) => {

    let uploadedPhotos1 = []
    let uploadedPhotos2 = [];
    let username = <div className='gridTitle'>No photos.</div>
    if (props.photos.length !== 0) {
        username = <div className='gridTitle'>Photos Upladed by {props.photos[0].user.first_name}</div>
    }

    for (let i = 0; i < props.photos.length; i++) {
        const photo = props.photos[i];

        photo = (
            <span key={i} style={{ float: 'left' }} >
                <img src={photo.urls.regular} />
            </span>
        )

        if (i + 1 <= props.photos.length / 2) {
            uploadedPhotos1.push(photo)
        }
        else {
            uploadedPhotos2.push(photo)
        }
    }
    return (
        <div className='photoGridSection'>
            {username}
            <div className='imageContainer'>
                <div style={{ display: 'inline-block' }} className='column'>
                    {uploadedPhotos1}
                </div>
                <div style={{ display: 'inline-block' }} className='column'>
                    {uploadedPhotos2}
                </div>
            </div>
        </div>
    )
}

export default ShowPhotoGrid