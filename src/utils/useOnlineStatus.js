import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [onlineStatus,setOnlineStatus] = useState(true);

    useEffect(() => {
        window.addEventListener("online", (event) => {
            setOnlineStatus(true)
          });

          window.addEventListener("offline", (event) => {
            setOnlineStatus(false)
          });
    }, [])

    //return boolean value 
    return onlineStatus;
}

export default useOnlineStatus;