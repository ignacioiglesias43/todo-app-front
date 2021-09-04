import { useState } from "react";

export const useForm = <T, U = void>(initialValues: T | U) => {
  const [formFields, setFormFields] = useState<T | U>(initialValues);
  const createChangeHandler =
    (key: keyof T | keyof U) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormFields((prev: T | U) => ({ ...prev, [key]: value }));
    };
  return { formFields, createChangeHandler };
};
