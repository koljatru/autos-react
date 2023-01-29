import { useEffect, useRef, useState } from "react";

export default function useOutside(initialIsVisible, initialBurger) {
  const [isShow, setIsShow] = useState(initialIsVisible);
  const [isActive, setisActive] = useState(initialBurger);
  const ref = useRef(null);

  const HandleClickOutside = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsShow(false);
      setisActive(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", HandleClickOutside, true);
    return () => {
      document.removeEventListener("click", HandleClickOutside, true);
    };
  }, []);

  return { ref, isShow, setIsShow, setisActive, isActive };
}
