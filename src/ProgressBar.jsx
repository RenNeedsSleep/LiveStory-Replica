function ProgressBar({active , completed}){
    const fillClass = completed ? "complete" : active ? "active" : "";

    return(
            <div className="progress">
                <div className={`progress-fill ${fillClass}`} />
            </div>
    )
}

export default ProgressBar