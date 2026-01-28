import { useEffect, useState } from "react";

function DigitalClock(){
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(()=> {
            setTime(new Date());
        },1000);
    
    return () => {
        clearInterval(timer);
        console.log("Clock unmounted");
    };
    },[]);
return (
    <div>
        <h2>Đồng hồ kỹ thuật số</h2>
        <p>{time.toLocaleTimeString()}</p>
    </div>
);
}
export default DigitalClock;