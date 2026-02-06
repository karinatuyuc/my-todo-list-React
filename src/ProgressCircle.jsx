

export default function ProgressCircle({title, progress, color}) {

    return (
        <>
            {/** SVG for progress circles*/}
            <div className="h-22 md:h-26">
                        <svg viewBox="0 0 100 100" className="w-full h-16 md:h-22"> 

                            {/**Circle base */}
                            <circle cx="50" cy="50" r="40" stroke="#C0C1C9" 
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
                                className="font-medium"
                            >{progress}</text>
                        </svg>

                        <div className="flex justify-center items-center gap-2 mt-2">
                            <span className="w-2 h-2 rounded-full" style={{ backgroundColor: color }}></span>
                            <span className="text-xs font-medium text-center">{title}</span>
                        </div>
            </div>
                       
          
        </>
    )
}