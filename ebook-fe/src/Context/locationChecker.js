import { createContext, useContext } from 'react';

export const LocationContext = createContext();

export function useLocationChecker() {
  return useContext(LocationContext);
}