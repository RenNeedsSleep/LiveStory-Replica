import React,{useState,useRef,useEffect} from "react"

function Story(){


    const inputRef = useRef(null)

    function addStory(){
        inputRef.current.click()

    }
    return(
        <div className="StoryButtons">
            <button className="AddButton" onClick={addStory}>+</button>
            <input ref = {inputRef} type = "file" hidden/>
        </div>
    )
}

export default Story