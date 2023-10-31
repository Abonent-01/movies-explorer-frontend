import {useCallback, useEffect, useState} from "react";
const useResponsiveCardsShowing = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  const handleOnResizeWindow = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  const handleOnLoadingPage = useCallback(() => {
    setScreenWidth(window.innerWidth)
  }, [])

  useEffect(() => {
    const timeoutDelayOnResizing = 1000
    let timeoutDelay


    window.addEventListener('resize', () => {
      clearTimeout(timeoutDelay)
      timeoutDelay = setTimeout(handleOnResizeWindow, timeoutDelayOnResizing)
    })

    window.addEventListener('load', handleOnLoadingPage)

    return () => {
      window.removeEventListener('resize', handleOnResizeWindow)
      window.removeEventListener('load', handleOnLoadingPage)
      clearTimeout(timeoutDelay)
    }
  }, [handleOnResizeWindow, handleOnLoadingPage]);

  return [screenWidth]
}
export default useResponsiveCardsShowing
