import React, {useState,useEffect} from 'react';
import ProgressBar from './progressBar';

function StoryView({imageId, imageList}){

    const [currentImage, setImage] = useState(-1);


     useEffect(() => {
        setImage(imageList.indexOf(imageId))
    },[imageList, imageId]) //useEffect with this makes sure a new calc happens when value changes
    
    useEffect(()=>{
        const timerId = setTimeout(()=>{
            if(currentImage != imageList.length - 1 && currentImage != -1){
                setImage(currentImage + 1)
            }
        }, 3000);

        return () => clearTimeout(timerId);
            },[imageId, currentImage, imageList])

    return(
        <div className="Tab">
            <div className='progress-holder'>
                <ProgressBar/>
            </div>
            <img id = 'view-img' src ={imageList[currentImage]} alt="stories"/>
        </div>
    )
}

export default StoryView