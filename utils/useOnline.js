import { useEffect,useState } from "react";

const useOnline = () => {
    const [isOnline, setisOnline] = useState(true);
    useEffect(() => {
        window.addEventListener('offline', handleOffline);
        console.log("Added Event Listeners...");
        return () => {
            window.removeEventListener('offline', handleOffline);
            console.log("Removed Event Listeneres....")
        }
    }, []);
    function handleOffline() {
        setisOnline(false);
    }
    return isOnline;
}


export default useOnline;

