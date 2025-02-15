import { useState } from "react";
import { Link } from "react-router-dom";
import {
  validate,
} from "@/lib/validateForm";
import { FormErrors } from "@/types";
import FormInput from "@/components/UI/FormInput";
import { User, Mail, Phone, Lock } from "lucide-react";
import BusinessGrowth from "@/assets/BusinessGrowth.svg";
const SignupPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showPassword, setShowPassword] = useState(false);

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
      console.log("Register form submitted:", formData);
      // Handle registration logic here
    }
  };

  return (
    <div className="bg-gray-100 flex justify-evenly p-4 py-16">
      <div className="hidden flex-col justify-center h-full text-black p-8 lg:flex">
        <div className="space-y-6 max-w-lg">
          {/* Main heading */}
          <h1 className="text-5xl font-bold text-foreground">Start Your Financial Journey</h1>

          {/* Subheading */}
          <p className="text-xl text-gray-500">
            Join thousands of businesses managing their finances smarter with
            Ledgrbook
          </p>
          <div className="mt-12">
            <img
              src={BusinessGrowth}
              alt="Business Growth"
              className="h-96"
            />
          </div>
        </div>
      </div>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-xl shadow-lg h-fit py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground">
            Create an Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-primary hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
        <form className="!mt-4 space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-4">
            <FormInput
              label="Full Name"
              name="name"
              type="text"
              icon={User}
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.name}
              touched={touched.name}
            />

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
              label="Phone Number"
              name="phone"
              type="tel"
              icon={Phone}
              placeholder="1234567890"
              value={formData.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.phone}
              touched={touched.phone}
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
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};
export default SignupPage;
