import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

export default function ProgressCircle() {

    const percentage = 66;

    return (
        <>
            {/** SVG for progress circles*/}
            <div className="h-22 md:h-48 lg:h-36">
                <CircularProgressbar
                value={percentage}
                
                styles={buildStyles({
                    pathColor: "#3b82f6",
                    trailColor: '#F5F5F5',
                })}
                text={`${percentage} %`}
                />

                        <div className="flex justify-center items-center gap-2 md:gap-1 md:mt-1">
                            <span className="text-[10px] text-center md:text-2xl lg:text-base">Completed</span>
                        </div>
            </div>
                       
          
        </>
    )
}