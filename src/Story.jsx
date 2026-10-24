import React,{useState,useRef,useEffect,createContext} from "react"
import Stories from "./Stories"

function Story(){


    const inputRef = useRef(null)
    const [imageUrl, setImageUrl] = useState([]);

    useEffect(()=>{
        return ()=>{
            if (imageUrl) URL.revokeObjectURL(imageUrl);
        };
    },[imageUrl]) //when a new component is mounted and a value changes, i.e in this case the image url changes everytime a new image is selected
    /*
        use ref can be used to manipulate or rather mutate DOM elements such as html and stuff so
        i used useRef and got hold onto the input using a ref of the constant i created. when ever a person clicks
        on the button it makes a function to click on the input which is hidden.
     */
    function addStory(event){
        const file = event.target.files[0];
        if(file) {
        const newUrl = URL.createObjectURL(file);
        setImageUrl(i => [...i,newUrl])
    
        }
    }
    return(
        <div className="StoryButtons">
            <button className="AddButton" onClick={()=>{
                inputRef.current.click()
            }}>+</button>
            
            <input id = 'imageInput' ref = {inputRef} type = "file" accept="image/*" hidden onChange={addStory}/>

            <ul className="storylist">
                {imageUrl.map((image,index)=>
                <li key = {index}>
                    <Stories imageUrl={image}/>
                </li>)}
            </ul>
        </div>
    )
}

export default Story