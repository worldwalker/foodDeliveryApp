import React from 'react';
import {TMenuTypes} from '../types/NavigationTypes';

interface MenuTypeContextType {
  menuType: TMenuTypes;
  setMenuType: React.Dispatch<React.SetStateAction<TMenuTypes>>;
}

export const MenuTypeContext = React.createContext<
  MenuTypeContextType | undefined
>(undefined);
