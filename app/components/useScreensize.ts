"use client"
import { useState, useEffect } from "react"

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, []) // Empty dependency array ensures the effect runs only once

  return windowSize
}

export default useWindowSize
