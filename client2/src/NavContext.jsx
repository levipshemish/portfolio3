import { createContext, useContext, useState } from "react";

const NavContext = createContext();

export const NavProvider = ({ children }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => setIsNavOpen((prev) => !prev);
  const openNav = () => setIsNavOpen(true);
  const closeNav = () => setIsNavOpen(false);

  return (
    <NavContext.Provider value={{ isNavOpen, toggleNav, openNav, closeNav }}>
      {children}
    </NavContext.Provider>
  );
};

export const useNav = () => useContext(NavContext);
