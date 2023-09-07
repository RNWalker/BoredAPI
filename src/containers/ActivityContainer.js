import { useEffect, useState } from "react";
import Activity from "../components/Activity";

const ActivityContainer = () => {

    const [activity, setActivity] = useState({});
    const fetchActivity = async () => {
        const response = await fetch ("http://www.boredapi.com/api/activity/");
        const data = await response.json();
        setActivity(data);
        console.log(data);

    }

    useEffect( () => {
        fetchActivity();
    }, [])

    const handleButtonClick = async () => {
        fetchActivity(); // Trigger a new fetch when the button is clicked
      };
    
      return (
        <>
          <Activity activity={activity} />
          <p></p>
          <button type="button" className="changeActivity" onClick={handleButtonClick}>
            Fetch New Activity
          </button>
        </>
      );
    };
    
    export default ActivityContainer;