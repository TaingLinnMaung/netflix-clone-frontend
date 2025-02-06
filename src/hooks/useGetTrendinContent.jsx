import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useContentStore from '../store/contentStore'

const useGetTrendingContent = () => {
    const {contentType} = useContentStore()
    const [content,setContent] = useState()
    const [contentList,setContentList] = useState()
   
    useEffect(() => {
      const fetchTrendingMovie =async () => {
        
        try {
        
            
            const response = await axios.get(`/api/v1/${contentType}/trending`)
            console.log(response)
            setContent(response.data.content)
            setContentList(response.data.list)
          
        } catch (error) {
            
        }
      }   
      fetchTrendingMovie()
    },[contentType])
 

  return {content,contentList,setContent}
}

export default useGetTrendingContent