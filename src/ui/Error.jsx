import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Header from './Header';
import Footer from './Footer';
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const defaultErrorData = {
  code: '404',
  title: 'Oops! Page Not Found',
  message:
    "Sorry about that! It seems the page you were trying to reach doesn't exist, may have been moved, or is taking a little break. Let's get you back on track.",
};

function Error({
  code = defaultErrorData.code,
  title = defaultErrorData.title,
  message = defaultErrorData.message,
}) {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-dvh w-dvw flex-col scroll-smooth bg-gray-100">
      <Header />
      <main className="flex flex-1 flex-col items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto mt-10 mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gray-800 shadow-lg">
            <ExclamationTriangleIcon className="size-14 text-red-600" />
          </div>
          <div className="font-DM-Sans mb-4 text-8xl font-bold text-gray-400/50">
            {code}
          </div>
          <h1 className="font-Inter mb-6 text-4xl font-bold tracking-wide text-gray-800">
            {title}
          </h1>
          <p className="font-DM-Sans mx-auto mb-10 max-w-xl text-lg tracking-normal text-gray-500">
            {message}
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button
              to="/"
              color="bg-blue-600"
              shadow="shadow-lg"
              linkStyle="font-DM-Sans font-semibold text-white"
            >
              Go to Homepage
              <span className="ml-2">&rarr;</span>
            </Button>
            <Button type="goBack" func={handleGoBack}>
              Go Back
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Error;
