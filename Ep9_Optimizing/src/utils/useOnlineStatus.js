import { useState,useEffect } from "react";
const useOnlineStatus = () => {
  const [onLineStatus, setOnlineStatus] = useState(true);
  //check if online
  useEffect(() => {
    window.addEventListener("offline", (event) => {
      setOnlineStatus(false);
    });
    window.addEventListener("online", (event) => {
      setOnlineStatus(true);
    });
  }, []);

  //boolean value
  return onLineStatus;
};

export default useOnlineStatus;
/**The above event listners we are using are to keep a track that whether the user internet is active or inactive
 */
