import { useInView, useMotionValue, useSpring } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

export default function NumberAnimation({ value }: any) {
  const ref = useRef(null)

  // Defining the initial value of our number animation
  const motionValue = useMotionValue(0);

  // A motion value that animates to its target with a spring
  const springValue = useSpring(motionValue, { duration: 3000 })

  // This state hook runs the animation when an element is in view
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    }
  }, [isInView, motionValue, value])

  useEffect(() => {
    springValue.on("change", (latestValue) => {
      if ((value - Math.floor(value) === 0) && ref.current && latestValue.toFixed(0) <= value) {
        (ref.current as HTMLElement).textContent = latestValue.toFixed(0)
      }
      else if (ref.current && latestValue.toFixed(2) <= value) {
        (ref.current as HTMLElement).textContent = latestValue.toFixed(2)
      }
    })
  }, [springValue, value])



  return (
    <span ref={ref}></span>
  )
}
