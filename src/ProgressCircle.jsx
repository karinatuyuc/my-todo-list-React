

export default function ProgressCircle({title, progress, color}) {

    return (
        <>
            {/** SVG for progress circles*/}
                        <svg viewBox="0 0 100 130" className="w-full h-22"> 

                            {/**Circle base */}
                            <circle cx="50" cy="50" r="40" stroke="gray" 
                            strokeWidth={16} fill="transparent"
                            > </circle>

                            {/**Circle progress */}
                            <circle
                                cx="50"
                                cy="50"
                                r="40"
                                stroke={color}
                                strokeWidth={16}
                                strokeDasharray={2 * Math.PI * 40}
                                strokeDashoffset={2 * Math.PI * 40 * 0.25} // 25% progress
                                fill="transparent"
                                transform="rotate( 20 50 50)"
                            />
                            <text
                                x="50"
                                y="50"
                                textAnchor="middle"
                                dominantBaseline="middle"
                                fontSize="20"
                                fill="black"
                                className=""
                            >{progress}</text>

                             <text // Title for each circle progress
                                x="8"
                                y="120"
                             >{title}</text>
                             
                        </svg>

                       

                       
          
        </>
    )
}