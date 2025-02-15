import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { validateEmail, validatePassword } from "@/lib/validateForm";
import { FormErrors } from "@/types";
import FormInput from "@/components/UI/FormInput";
import { Button } from "@/components/UI/button";
const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);
  const validate = (name: string, value: string): string => {
    switch (name) {
      case "email":
        return !value
          ? "Email is required"
          : !validateEmail(value)
          ? "Please enter a valid email"
          : "";
      case "password":
        return !value
          ? "Password is required"
          : !validatePassword(value)
          ? "Password must contain at least 8 characters, one uppercase, one lowercase, one number and one special character"
          : "";
      default:
        return "";
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (touched[name]) {
      setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors((prev) => ({ ...prev, [name]: validate(name, value) }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: FormErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validate(key, formData[key as keyof typeof formData]);
      if (error) {
        newErrors[key as keyof FormErrors] = error;
      }
    });

    setErrors(newErrors);
    setTouched(
      Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {})
    );

    if (Object.keys(newErrors).length === 0) {
      console.log("Login form submitted:", formData);
      // Handle login logic here
    }
  };

  return (
    <div className="bg-gray-100 flex justify-evenly p-4 py-16">
      <div className="hidden flex-col justify-center h-full text-black p-8 lg:flex">
        <div className="space-y-6 max-w-lg">
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-foreground">
            Welcome to Ledgrbook
          </h1>

          {/* Subheading */}
          <p className="text-2xl text-gray-500 mt-8">
            Your ultimate solution for effortless business finance
            management—track, control, and grow with ease!
          </p>
          <div className="mt-8">
            <div className="text-lg text-primary mb-2">New to Ledgrbook?</div>
            <Link to={"/signup"}>
              <Button variant={"outline"} className="bg-white py-6 text-lg">
                Create an account
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg pb-20 pt-12 h-fit">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-foreground">
            Welcome Back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-medium text-primary hover:text-primary/90"
            >
              Sign up
            </Link>
          </p>
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <FormInput
              label="Email Address"
              name="email"
              type="email"
              icon={Mail}
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.email}
              touched={touched.email}
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              icon={Lock}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.password}
              touched={touched.password}
              showPassword={showPassword}
              setShowPassword={setShowPassword}
            />
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary/90"
          >
            Sign in
          </button>

          <div className="text-sm text-center">
            <Link
              to="/forgot-password"
              className="font-medium text-primary hover:text-primary/90 hover:underline"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
export default LoginPage;
