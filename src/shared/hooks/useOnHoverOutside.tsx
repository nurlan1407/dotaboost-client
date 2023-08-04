import React from 'react'

export function useOnHoverOutside(ref:React.MutableRefObject<any>, handler:(event:Event)=>void) {
    React.useEffect(
      () => {
        const listener = (event:Event) => {
          if (!ref.current || ref.current.contains(event.target)) {
            return;
          }
          handler(event)
        };
        document.addEventListener("mouseover", listener);
        return () => {
          document.removeEventListener("mouseout", listener);
        };
      },
      [ref, handler]
    );
  }
