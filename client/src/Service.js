import {useState,useEffect } from "react";
import axios, { Axios } from 'axios';



const Service = (term) => {

const [dataa, setDataa] = useState();

useEffect(() => {
    const fetchData = async () => {
     fetch(
        `http://localhost:9800/api/tweet/${term}`
     ).then(response => response.json())
     .then(result => {
         setDataa(result);
     })
    }
    fetchData();
 }, [term])
 

  return{
    dataa
  }
}

export default Service



















   
  /* const url = 'http://localhost:9800/api/tweet';



   const getSingleDataApi = async () => {
     try
     {  
       const response = await axios.get(`${url}/${term}`);
       setData(response.data);
       
     }
     catch(error)
      {
       console.log('Error While Calling Get Api', error);
      }
   }
   getSingleDataApi(); */