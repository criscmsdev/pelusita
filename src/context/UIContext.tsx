'use client'
import { Actions } from 'ahooks/lib/useToggle';
import React, { useState, ReactNode, useContext } from 'react';
import { useToggle } from 'ahooks';

interface Toggle {
  value: boolean;
  actions: Actions<boolean>;
}
interface Children {
  childrens: ReactNode;
  setChildrens: (data: ReactNode) => void;
}

type UIContextProps = {
  toggleSlideOversCarts: Toggle;
  toggleMenu: Toggle;
  toggleSearch: Toggle;
  // children: Children;
};

export const UIContext = React.createContext<UIContextProps>(
  {} as UIContextProps,
);

interface UIProvider {
  children: React.ReactNode;
}

export const UIProvider = ({ children }: UIProvider) => {
  const [valueCarts, actionsCarts] = useToggle();
  const [valueMenu, actionsMenu] = useToggle();
  const [valueSearch, actionsSearch] = useToggle();
  // const [childrens, setChildrens] = useState<ReactNode>();
  return (
    <UIContext.Provider
      value={{
        toggleSlideOversCarts: { value: valueCarts, actions: actionsCarts },
        toggleMenu: { value: valueMenu, actions: actionsMenu },
        toggleSearch: { value: valueSearch, actions: actionsSearch },
      }}
    >
      {children}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const {toggleSlideOversCarts, toggleMenu, toggleSearch} = useContext(UIContext)
  return {
    toggleSlideOversCarts, toggleMenu, toggleSearch
  }
}