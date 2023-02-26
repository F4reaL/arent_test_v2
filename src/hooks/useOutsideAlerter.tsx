import React, { useRef, useEffect } from "react"

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutSideDetect(ref: any, setModal: any) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setModal && setModal(false)
      }
    }
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref])
}

/**
 * Component that alerts if you click outside of it
 */
export default function OutsideAlerter(props: any) {
  const wrapperRef = useRef(null)
  useOutSideDetect(wrapperRef, props.setModal)

  return <div ref={wrapperRef}>{props.children}</div>
}
