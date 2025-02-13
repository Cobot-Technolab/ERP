import { Button } from "@/components/UI/button";
import NotFoundPageImg from "@/assets/NotFoundPage.svg";
import { Link } from "react-router-dom";
const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gray-100 p-6">
      <div className="max-w-lg text-center">
        <img src={NotFoundPageImg} alt="404" />

        <h1 className="text-7xl font-bold text-gray-800 mt-2">404</h1>
        <p className="text-lg text-gray-600 mt-2">
          Oops! The page you’re looking for doesn’t exist.
        </p>

        <Link to={"/"}>
          <Button className="mt-6 px-6 py-3 text-lg">Go Home</Button>
        </Link>
      </div>
    </div>
  );
};
export default NotFoundPage;
