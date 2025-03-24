// --------------------------------------------
// ✅ STEPS TO REMEMBER TO CREATE A CONTEXT IN REACT + TYPESCRIPT
//
// 1. Define the types: 
//    - The possible values (e.g. "light" | "dark")
//    - The shape of the context (what it provides)
// 
// 2. Create the context with `createContext` and give it an initial value (often `null`).
//
// 3. Create a Provider component:
//    - Declare state
//    - Declare any helper functions
//    - Pass state and functions to the context's `value`
//
// 4. Wrap your app (or a part of it) with this Provider
//
// 5. Create a custom hook to safely access the context
// --------------------------------------------

"use client"

import { createContext, useContext, useState, ReactNode } from 'react'

// Define the possible values for the color
type ColorType = "light" | "dark"

// Define the structure of what the context will provide
type ColorContextType = {
    color: ColorType,
    toggleColor: () => void,
}

// Create the context (null by default, real value will come from the Provider)
const ColorContext = createContext<ColorContextType | null>(null)

// Create the Provider component that will wrap children components
export default function ColorContextProvider({ children }: { children: ReactNode }) {

    // The value stored in state
    const [color, setColor] = useState<ColorType>("light")

    // Function to switch between light and dark
    const toggleColor = () => {
        setColor(prev => prev === "light" ? "dark" : "light")
    }

    // Wrap children with the Provider and pass the context value
    return (
        <ColorContext.Provider value={{ color, toggleColor }}>
            {children}
        </ColorContext.Provider>
    )
}

// Custom hook to use the context more easily and safely
export const useColorContext = () => {
    const context = useContext(ColorContext)
    if (!context) {
        throw new Error("useColorContext must be used within a ColorContextProvider")
    }
    return context
}
