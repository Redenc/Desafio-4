import React, { useState } from 'react';

export const MarketContext = React.createContext([])

export function MarketContextProvider({ children }) {
    const  [list, setList] = React.useState([])

    return <MarketContext.Provider value={{list, setList}}>{children}</MarketContext.Provider>
}