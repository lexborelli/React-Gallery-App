import React  from 'react';
import Photo from './Photo';

const PhotoList = (props) => {
    const photoResults = props.data;
    let photos = photoResults.map(photo => <Photo
         key={photo.id} photo={photo} />);

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