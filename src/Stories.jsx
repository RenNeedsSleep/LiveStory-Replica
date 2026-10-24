import { useContext } from "react"

function Stories({ imageUrl }){

    return(
        <div>
            <button className = "stories">
                <img id = 'story-img' src ={imageUrl} alt="stories"/>
            </button>
        </div>
    )
}

export default Stories