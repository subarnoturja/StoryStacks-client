/* eslint-disable react/prop-types */
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const BookCards = ({ headline, books }) => {
  return (
    <div className="my-16 px-4 lg:px-24">
      <h2 className="text-4xl text-center font-bold text-black mb-8">
        {headline}
      </h2>
      {/* cards */}
      <div className="mt-12">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            "@1.50": {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper w-full h-full mb-10"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id}>
              <Link to={`/book/${book._id}`}>
                <article className="flex flex-col dark:bg-gray-50 mb-20 rounded-xl">
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Te nulla oportere reprimique his dolorum"
                  >
                    <img
                      alt=""
                      className="object-cover w-full dark:bg-gray-500 h-60"
                      src={book.imageURL}
                    />
                  </a>
                  <div className="flex flex-col flex-1 p-6">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      aria-label="Te nulla oportere reprimique his dolorum"
                    ></a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="text-sm font-semibold tracking-wider uppercase hover:underline dark:text-violet-600"
                    >
                      {book.category}
                    </a>
                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">
                      {book.bookTitle}
                    </h3>
                    <div className="space-x-2 text-sm dark:text-gray-600">
                      <span>{book.authorName}</span>
                    </div>
                    <button className="btn w-full mt-4 bg-blue-600/50 text-black font-semibold hover:text-blue-700">View</button>
                  </div>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default BookCards;
