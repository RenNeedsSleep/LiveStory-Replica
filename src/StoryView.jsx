import React, {useState,useEffect} from 'react';
import ProgressBar from './ProgressBar';

function StoryView({imageId, imageList}){

    const [currentImage, setImage] = useState(-1);


    function movePictureLeft(current){
        if(current > 0){
            setImage(currentImage - 1);
        }
    }

    function movePictureRight(current){
        if(current < imageList.length - 1){
            setImage(currentImage + 1);
        }
    }

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
            <div className = "options">
                <button id = 'left' onClick={()=>{movePictureLeft(currentImage)}}>&lt;</button>
                <img id = 'view-img' src ={imageList[currentImage]}/>
                <button id = 'right' onClick={()=>{movePictureRight(currentImage)}}>&gt;</button>
            </div>
        </div>
    )
}

export default StoryView