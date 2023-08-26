/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useEffect,  useState } from "react";


export const routeContext = createContext<any>(null);

const routeProvider = () => {
  
  const [nextRoute, setnextRoute] = useState(true);



  function NEXTRoute() {
    if (nextRoute) {
      const routeVariantstravauxnumber = {
        initial: { x: -window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: 0,
          y: 0,
        },
        exit:{ transition: { duration: 1 },x:window.innerWidth}
      };
      return routeVariantstravauxnumber;
    } else {
      const routeVariantstravauxnumber = {
        initial: { x: window.innerWidth },
        animate: {
          transition: { duration: 1 },
          opacity: 1,
          x: "0%",
          y: "0%",
        },
        exit:{ transition: { duration: 1 },x:-window.innerWidth}
      };
      return routeVariantstravauxnumber;
    }
  }




  useEffect(() => {
    NEXTRoute()
   
  });



  
  return (
    <routeContext.Provider value={{nextRoute,setnextRoute,NEXTRoute}}></routeContext.Provider>
  )
}

export default routeProvider
