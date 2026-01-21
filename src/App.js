import { useState } from "react";
import "./App.css";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    if (isLogin) {
      // Login validation
      if (!formData.email || !formData.password) {
        alert("❌ Please fill all fields");
        return;
      }
      alert("✅ Login Successful 🎉");
    } else {
      // Register validation
      if (
        !formData.username ||
        !formData.email ||
        !formData.password ||
        !formData.confirmPassword
      ) {
        alert("❌ All fields are mandatory");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        alert("❌ Passwords do not match");
        return;
      }

      alert("🎊 Registration Successful 😄");
    }
  };

  return (
    <div className="container">
      <div className="box">
        <h2>{isLogin ? "Login" : "Registration form"}</h2>

        {!isLogin && (
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />

        {!isLogin && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
        )}

        <button onClick={handleSubmit}>
          {isLogin ? "Login" : "Submit"}
        </button>

        <p className="toggle" onClick={() => setIsLogin(!isLogin)}>
          {isLogin
            ? "Don't have an account? Register"
            : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default App;