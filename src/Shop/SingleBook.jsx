import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { bookTitle, authorName, imageURL, category, bookDescription } = useLoaderData();
  return (
    <div className="dark:bg-gray-100 dark:text-gray-900">
      <div className="container grid grid-cols-12 mx-auto dark:bg-gray-50">
        <div
          className="bg-no-repeat bg-cover mx-auto col-span-full lg:col-span-4"
        ><img src={imageURL} alt="" className="h-96"/></div>
        <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
          <div className="flex justify-start">
            <span className="px-2 py-1 text-xs rounded-full dark:bg-violet-600 dark:text-gray-50">
              {category}
            </span>
          </div>
          <h1 className="text-3xl font-semibold">{bookTitle}</h1>
          <p className="flex-1 pt-2">
            {bookDescription}
          </p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 dark:text-gray-600"
              >
                <path
                  fillRule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="self-center text-sm">{authorName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
