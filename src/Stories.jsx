import { useContext } from "react"

function Stories({ imageUrl , selectedButton}){


    function exp(){
        console.log(`CLicked on image with imageURL ${imageUrl}`)
    }
    return(
        <div>
            <button className = "stories" onClick={()=>{
                selectedButton(imageUrl)
            }}>
                <img id = 'story-img' src ={imageUrl} alt="select an image"/>
            </button>
        </div>
    )
}

export default Stories