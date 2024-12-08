import { FaRegUserCircle } from "react-icons/fa";
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
            <span className="px-2 py-1 text-sm mb-4 rounded-full dark:bg-violet-600 dark:text-gray-50">
              {category}
            </span>
          </div>
          <h1 className="text-3xl font-semibold">{bookTitle}</h1>
          <p className="flex-1 pt-2">
            {bookDescription}
          </p>
          <div className="flex items-center justify-between pt-2">
            <div className="flex space-x-2">
            <FaRegUserCircle size={26} />
              <span className="self-center text-lg">{authorName}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBook;
