'use client'

import { useEffect } from "react"

const error = ( {error, reset} ) => {
    useEffect(() => {
        console.log(error)
    },[error])
  return (
    <div className="text-center mt-16">
     <h1 className="text-2xl font-bold">Something went wrong. Try again later</h1>
     <button className="underline" onClick={() => {reset()}}>Try Again</button> 
    </div>
  )
}

export default error
