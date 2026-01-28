import { useState } from "react";

function useForm(initialValue) {
  const [form, setForm] = useState(initialValue);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: name === "age" ? Number(value) : value
    });
  };

  const resetForm = () => {
    setForm(initialValue);
  };

  return {
    form,
    handleChange,
    resetForm
  };
}

export default useForm;
