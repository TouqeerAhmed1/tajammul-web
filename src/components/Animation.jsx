import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export const Animation = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, [])

  return null
}