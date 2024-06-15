import React , {createContext , useContext , useState} from 'react';

const stateContext = createContext();

const initailState ={
  chat:false,
  cart:false,
  useProfile:false,
  notification:false,
}

export const ContextProvider = ({children})=>{
  const [activeMenu , setActiveMenu] = useState(true);
  const [isClicked , setClicked] = useState(initailState);

  const  handleClick = (clicked)=>{
    setClicked({...initailState , [clicked] :true});
  }

  return (
    <stateContext.Provider value={{activeMenu ,setActiveMenu , isClicked , setClicked , handleClick}}>
      {children}
    </stateContext.Provider>
  )
}

export const useStateContext = () => useContext(stateContext);


