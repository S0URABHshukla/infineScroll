import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


function SkeletonLoader() {
  return (
    <div style={{background:"#684468",borderRadius:"50px",height:"230px"}}>
    
            <SkeletonTheme baseColor="#BACBF6" highlightColor="grey">
            <Skeleton circle={true} width={"37%"} height={"45%"}/>
            <Skeleton count={4} width={"70%"}/>         
            </SkeletonTheme>
        
    </div>
  )
}

export default SkeletonLoader