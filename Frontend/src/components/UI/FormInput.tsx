import { Eye, EyeOff } from "lucide-react";
import React from "react";

interface FormInputProps {
  label: string;
  name: string;
  type: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  touched?: boolean;
  showPassword?: boolean;
  setShowPassword?: React.Dispatch<React.SetStateAction<boolean>>;
}
const FormInput = ({
  label,
  name,
  type,
  icon: Icon,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  touched,
  showPassword,
  setShowPassword,
}: FormInputProps) => (
  <div>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 mb-1"
    >
      {label}
    </label>
    <div className="relative">
      <div className="absolute z-20 inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-4 w-4 text-gray-400" />
      </div>
      <input
        id={name}
        name={name}
        type={type==="password" && showPassword ? "text" : type}
        required
        className={`appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border ${
          error && touched ? "border-red-500" : "border-gray-300"
        } placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-primary focus:z-10 sm:text-sm`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {type === "password" && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center z-20">
          <button
            type="button"
            onClick={() => setShowPassword?.((prev) => !prev)}
            className="text-gray-400 focus:outline-none"
          >
            {showPassword ? <EyeOff className="w-4 h-4"/> : <Eye className="w-4 h-4"/>}
          </button>
        </div>
      )}
    </div>
    {error && touched && <p className="mt-1 text-sm text-red-600">{error}</p>}
  </div>
);
export default FormInput;
