## ✅ STEPS TO REMEMBER TO CREATE A CONTEXT IN REACT + TYPESCRIPT
1. Define the types: 
    - The possible values (e.g. "light" | "dark")
    - The shape of the context (what it provides)

2. Create the context with `createContext` and give it an initial value (often `null`).

3. Create a Provider component:
    - Declare state
    - Declare any helper functions
    - Pass state and functions to the context's `value`

4. Wrap your app (or a part of it) with this Provider

5. Create a custom hook to safely access the context
