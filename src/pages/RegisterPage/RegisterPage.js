import { useState } from "react";
import styles from "./RegisterPage.module.css";
import { db } from "../../config/firebase";
import { addDoc, collection } from "firebase/firestore";

const RegisterPage = () => {
  // Create your state or ref here to store the value of the input fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function onSubmitHandler(e) {
    e.preventDefault();
    setLoading(true);

    await addDoc(collection(db, "users"), formData);
    setFormData({ name: "", email: "", password: "" });

    setLoading(false);
  }

  // write the submit handler function to validate the forma and signup the user
  return (
    <div className={styles.formContainer}>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <h2 className={styles.loginTitle}>Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          className={styles.loginInput}
          onChange={handleChange}
          required
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          className={styles.loginInput}
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          className={styles.loginInput}
          placeholder="Enter Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button className={styles.loginBtn}>
          {loading ? "..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};

export default RegisterPage;
