import React, { createContext, useReducer, useContext, useEffect } from 'react';

const loadState = () => {
  try {
    const serializedState = localStorage.getItem('appState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('appState', serializedState);
  } catch (err) {
  }
};

const initialState = loadState() || {
  id: 0,
  username: '',
  rol: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return { ...state, username: action.payload };
    case 'SET_ROL':
      return { ...state, rol: action.payload };
    default:
      return state;
  }
};

const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    saveState(state);
  }, [state]);

  const setUserName = (newUsername) => {
    dispatch({ type: 'SET_USERNAME', payload: newUsername });
  };

  const setRol = (newRol) => {
    dispatch({ type: 'SET_ROL', payload: newRol });
  };

  return (
    <AppContext.Provider value={{ ...state, setUserName, setRol }}>
      {children}
    </AppContext.Provider>
  );
};
