import './TripsStyles.css'
import React, {useEffect, useState} from "react"
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import ContentLoader from 'react-content-loader'

function TripData(props){
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="loading">
            <ContentLoader
                speed={2}
                width={400}
                height={320}
                viewBox="0 0 450 400"
                backgroundColor="#f0f0f0"
                foregroundColor="#dedede"
                {...props}
            >
                <rect x="24" y="270" rx="5" ry="5" width="271" height="9" />
                <rect x="25" y="290" rx="3" ry="3" width="270" height="6" />
                <rect x="22" y="25" rx="10" ry="10" width="388" height="217" />
                <rect x="25" y="305" rx="3" ry="3" width="270" height="6" />
                <rect x="25" y="330" rx="3" ry="3" width="270" height="6" />
                <rect x="25" y="345" rx="3" ry="3" width="270" height="6" />
                <rect x="25" y="360" rx="3" ry="3" width="270" height="6" />
            </ContentLoader>
        </div>
        :
        <div className="cards">
            <div className="cards__image">
                <img src={props.image} alt="some" />
            </div>
            <h4 className='cards__title'>{props.heading}</h4>
            <p cards__description>{props.text}</p>
        </div>
    }
    </>
}

export default TripData