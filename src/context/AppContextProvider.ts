import React from 'react';
import {TMenuTypes} from '../types/NavigationTypes';

interface MenuTypeContextType {
  menuType: TMenuTypes;
  setMenuType: React.Dispatch<React.SetStateAction<TMenuTypes>>;
  chosenProductId: number;
  setChosenProductId: React.Dispatch<React.SetStateAction<number>>;
}

export const MenuTypeContext = React.createContext<
  MenuTypeContextType | undefined
>(undefined);
