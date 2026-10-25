import React, {useState,useEffect} from 'react';
import ProgressBar from './ProgressBar';

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

        //animation-name: bar;
        //animation-duration: 3s;
        //animation-timing-function: ease-in-out;

    return(
        <div className="Tab">
            <div className='progress-holder'>
                {imageList.map((_,index) => (
                    <ProgressBar key = {index}
                    active = {index === currentImage}
                    completed={index < currentImage}/>
                ))}
            </div>
            <img id = 'view-img' src ={imageList[currentImage]}/>
        </div>
    )
}

export default StoryView