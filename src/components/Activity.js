const Activity = ({activity}) => {

    return(
        <div className="activity">
            <h3> ACTIVITY NAME: </h3>
            <h4>{activity.activity}</h4>
            <h5> ACTIVITY TYPE: </h5>
            <p id="activity-type">{activity.type}</p>
        </div>
    )

}

export default Activity;