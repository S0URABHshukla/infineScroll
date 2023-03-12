import React, { useEffect, useState } from 'react'
import ListComponents from '../ListComponenets/ListComponents';
import Navbar from '../Navbar/Navbar';
import SkeletonLoader from '../SkeletonLoader/SkeletonLoader';

function Home() {
  const [list,setList]=useState([]);
  const [results,setResults]=useState(0);
  const [loader,setLoader]=useState(true)
  const fetchApi=async()=>
  {
    setLoader(true)
    setTimeout(async()=>
    {
      var res=await fetch(`https://randomuser.me/api/?results=12`);
      var data= await res.json();
      setList((prev)=>[...prev,...data.results])
      setLoader(false);
    },1000)
  }
  useEffect(()=>
  {
    fetchApi();
  },[results])

  let handleInfiniteScroll=()=>
  {
    try {
      if((window.innerHeight + document.documentElement.scrollTop + 1) > document.documentElement.scrollHeight)
      {
        setTimeout(()=>
        {
          setResults((prev)=>prev +1);
        },1000)
        
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(()=>
  {
    window.addEventListener("scroll",handleInfiniteScroll);
    return ()=>
    {
      window.removeEventListener("scroll",handleInfiniteScroll)
    }
  },[])

  
  return (
    <div>      
      <Navbar/>
      {loader
      ?
      < >
      <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",backgroundColor:'#BBCCF7',gap:"20px"}}>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      <SkeletonLoader/>
      </div>
      </>
      :
      <ListComponents list ={list}/>
    }    
    </div>
  )
}

export default Home