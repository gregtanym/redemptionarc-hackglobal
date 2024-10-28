"use client"
import React, { useContext, useEffect, useState, useRef, useMemo } from "react"

const AppContext = React.createContext()

const AppProvider = (({children}) => {

    // insert your states here (pass it into the value attribute at the bottom)
    const [selectedUserId, setSelectedUserId] = useState(3)
    const [booked, setBooked] = useState(false)

    // insert your functions here (pass it into the value attribute at the bottom)
    
    return(
        <AppContext.Provider value={{
            selectedUserId,
            setSelectedUserId,
            booked,
            setBooked
        }}>
            {children}
        </AppContext.Provider>
    )
})

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }