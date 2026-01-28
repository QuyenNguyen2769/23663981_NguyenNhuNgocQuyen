import useForm from "../hooks/useForm";
import "./userForm.css";

function UserForm() {
  const { form, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    age: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      alert("Email không hợp lệ");
      return;
    }

    console.log("Submit:", form);
    resetForm();
  };

  return (
    <div className="user-form">
      <h2>Form thông tin người dùng</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Họ tên"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <input
          type="number"
          name="age"
          placeholder="Tuổi"
          value={form.age}
          onChange={handleChange}
        />

        <button type="submit">Gửi</button>
      </form>

      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
}

export default UserForm;
