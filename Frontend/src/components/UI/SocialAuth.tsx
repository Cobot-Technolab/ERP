import { cn } from "@/lib/utils";
import { JSX } from "react";
interface SocialAuthProps {
  continueText?: string;
  position?: "top" | "bottom";
  className?: string;
}
const SocialAuthButton = ({
  provider,
  icon,
  onClick,
}: {
  provider: string;
  icon: JSX.Element;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    type="button"
    className="w-full inline-flex justify-center items-center gap-3 px-4 py-2 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    {icon}
    <span>Continue with {provider}</span>
  </button>
);

// Social Auth Section Component
const SocialAuth = ({continueText, position, className}:SocialAuthProps) => {
  const handleGoogleSignIn = () => {
    console.log("Google sign in clicked");
    // Implement Google sign in logic
  };

  const handleMicrosoftSignIn = () => {
    console.log("Microsoft sign in clicked");
    // Implement Microsoft sign in logic
  };

  return (
    <div className={cn(`mt-6 flex flex-col ${position === 'top' ? 'flex-col-reverse gap-4' : ''}`, className)}>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300" />
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">{`Or ${continueText || 'continue with'}`}</span>
        </div>
      </div>
      <div className={cn(`mt-6 space-y-3 ${position === 'top' ? 'mt-0' : ''}`)}>
        <SocialAuthButton
          onClick={handleGoogleSignIn}
          provider="Google"
          icon={
            <svg className="w-5 h-5" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>
          }
        />
        <SocialAuthButton
          onClick={handleMicrosoftSignIn}
          provider="Microsoft"
          icon={
            <svg className="w-5 h-5" viewBox="0 0 23 23" fill="none">
              <path d="M0 0h11v11H0V0z" fill="#F25022" />
              <path d="M12 0h11v11H12V0z" fill="#7FBA00" />
              <path d="M0 12h11v11H0V12z" fill="#00A4EF" />
              <path d="M12 12h11v11H12V12z" fill="#FFB900" />
            </svg>
          }
        />
      </div>
    </div>
  );
};
export default SocialAuth;
