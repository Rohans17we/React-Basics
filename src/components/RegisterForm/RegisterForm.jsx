import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./RegisterForm.css"; 

const RegisterForm = () => {
  // Validation Schema
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
        .min(2, 'Too Short!')
        .required("Full Name is required"),
    username: Yup.string()
        .min(6, "Username must be at least 6 characters")
        .required("Username is required"),
    email: Yup.string()
        .email("Email is invalid")
        .required("Email is required"),
    password: Yup.string()
        .min(8, "Password must be at least 8 characters")
        .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Confirm Password does not match")
      .required("Confirm Password is required"),
    terms: Yup
        .boolean()
        .oneOf([true], "Accept Terms is required"),
  });

  // Initial Form Values
  const initialValues = {
    fullName: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  };

  // Form Submission
  const handleSubmit = (values, { resetForm }) => {
    alert(`Form Data: ${JSON.stringify(values, null, 2)}`); 
    console.log("Form Data:", values);
    resetForm(); // Reset form after submission
  };

  return (
    <div className="form-container">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ values }) => (
          <Form className="form">
            {/* Full Name */}
            <label>Full Name</label>
            <Field type="text" name="fullName" placeholder="Enter Full Name" />
            <ErrorMessage name="fullName" component="div" className="error" />

            {/* Username */}
            <label>Username</label>
            <Field type="text" name="username" placeholder="Enter Username" />
            <ErrorMessage name="username" component="div" className="error" />

            {/* Email */}
            <label>Email</label>
            <Field type="email" name="email" placeholder="Enter Email" />
            <ErrorMessage name="email" component="div" className="error" />

            {/* Password */}
            <label>Password</label>
            <Field type="password" name="password" placeholder="Enter Password" />
            <ErrorMessage name="password" component="div" className="error" />

            {/* Confirm Password */}
            <label>Confirm Password</label>
            <Field type="password" name="confirmPassword" placeholder="Confirm Password" />
            <ErrorMessage name="confirmPassword" component="div" className="error" />

            {/* Terms & Conditions */}
            <div className="terms">
              <Field type="checkbox" name="terms" />
              <label>I have read and agree to the Terms</label>
            </div>
            <ErrorMessage name="terms" component="div" className="error" />

            {/* Buttons */}
            <div className="buttons">
              <button type="submit">Register</button>
              <button type="reset">Reset</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegisterForm;