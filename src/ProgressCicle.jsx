

export default function ProgressCirlce(){
    return (
        <>
            {/** SVG for progress circles*/}
                        <svg viewBox="0 0 100 100" className="w-16 h-16 mt-2"> 

                            {/**Circle base */}
                            <circle cx="50" cy="50" r="45" stroke="gray" 
                            strokeWidth={8} fill="transparent"> </circle>

                            {/**Circle progress */}
                            <circle
                                cx="50"
                                cy="50"
                                r="45"
                                stroke="blue"
                                strokeWidth={8}
                                strokeDasharray={2 * Math.PI * 45}
                                strokeDashoffset={2 * Math.PI * 45 * 0.25} // 25% progress
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
                            >25%</text>

                        </svg>
          
        </>
    )
}