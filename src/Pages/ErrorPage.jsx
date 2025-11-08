import { useNavigate } from "react-router";
import errorImg from "../assets/images/404-error.jpg"
import { Helmet, HelmetProvider } from "react-helmet-async";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-7xl mx-auto px-5 flex flex-col items-center gap-5 py-10">
      <Helmet>
                <title>Error Page | Kidstuff</title>
                <meta name="description" content="No Page Redirect." />
            </Helmet>
      <div className="flex justify-center">
        <img className="w-4xl" src={errorImg} alt="" />
      </div>
      <div className="text-center">
        <h2 className="text-4xl font-bold">Oops, page not found!</h2>
        <p className="text-[#627382] text-xl mt-3">The page you are looking for is not available.</p>
      </div>
      <button
        onClick={() => navigate(-1)}
        className="btn text-white font-semibold bg-linear-to-br from-[#632EE3] to-[#9F62F2] w-fit px-10"
      >
        Go Back!
      </button>
    </div>
  );
};

export default ErrorPage;