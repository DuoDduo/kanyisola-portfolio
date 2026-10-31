import { useEffect, useState } from 'react'

// The id of the section crossing the middle of the screen. Sections not in
// `ids` leave the last match in place, so the nav never goes blank.
export const useActiveSection = (ids) => {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id)
      })
    }, { rootMargin: '-45% 0px -50% 0px' })
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}
