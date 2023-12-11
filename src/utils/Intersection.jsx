import { useEffect, useState, useRef } from 'react'

const Intersection = (options) => {
  const [isInterSecting, setIntersecting] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }, options)
    if (ref.current) { observer.observe(ref.current) }
    return () => { if (ref.current) observer.disconnect() }
  }, [ref, options])
  return [ref, isInterSecting]
}

export default Intersection
