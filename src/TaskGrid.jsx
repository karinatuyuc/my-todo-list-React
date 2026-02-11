import TaskCard from "./TaskCard.jsx";
import useMediaQuery from "./useMediaQuery.js";




export function TaskGrid({tasks}) {
    let isMobile = useMediaQuery("(max-width: 768px)");
    let isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
    let isDesktop = useMediaQuery("(min-width: 1024px)");


    let visibleCount = 0;

    if(isMobile) {
        visibleCount = 2;
    } else if (isTablet) {
        visibleCount = 4;
    } else if(isDesktop){
        visibleCount = 2;
    }
    return (
        <>
        <div> 
            {tasks.slice(0, visibleCount).map(task => (
                <TaskCard key={task.is} {...task} />
            ))}
        </div>

        </>
    )
}