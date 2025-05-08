import { useState } from "react";

export default function useFormState<T>(initialState: T) {
    const [state, setState] = useState(initialState);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setState((prev) => ({ ...prev, [name]: value }));
    };
  
    return [state, handleChange] as const;
  }
  