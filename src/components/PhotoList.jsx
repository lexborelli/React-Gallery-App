import React  from 'react';
import Photo from './Photo';
import NoMatches from './NoMatches';

const PhotoList = (props) => {
    const photoResults = props.data;
    let photos;

    // used if statement that returns a list of photos if the results are greater than 0, else it will return the NoMatches component.

    if (photoResults.length > 0) {
        photos = photoResults.map(photo => <Photo
            key={photo.id} photo={photo} />);
    } else {
        photos = <NoMatches />
    }



    return (
        <div className="photo-container">
            <h2>Results</h2>
                <ul>
                    { photos }
                </ul>
        </div>
    );

};

export default PhotoList;