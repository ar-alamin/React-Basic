import React from 'react'
import { useParams } from 'react-router-dom'

export default function Posts() {
    const {catagory} = useParams();

  return (
    <div>
        This is post page {catagory}
    </div>
  )
}
