import { useState } from "react";


const UploadBook = () => {

    const bookCategories = [
        "Fiction",
        "Non-Fiction",
        "Mistery",
        "Programming",
        "Science Fiction",
        "Fantasy",
        "Horror",
        "Bibliography",
        "Autobiography",
        "History",
        "Self-help",
        "Memoir",
        "Business",
        "Children Books",
        "Travel",
        "Religion",
        "Art and Design"
    ]

    const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

    // Handle Category 
    const handleChangeSelectedValue = (event) => {
        setSelectedBookCategory(event.target.value);
    }

    // Handle Book Submission
    const handleBookSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const bookTitle = form.bookTitle.value;
        const authorName = form.authorName.value;
        const imageURL = form.imageURL.value;
        const category = form.categoryName.value;
        const bookDescription = form.bookDescription.value;
        const bookPDFURL = form.bookPDFURL.value;
        const bookObject = {
            bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL
        }
        console.log(bookObject);
    }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Book</h2>

      <form onSubmit={handleBookSubmit} className="flex lg:w-[1180px] flex-col flex-wrap gap-4">
      <div className="grid sm:grid-cols-2 gap-10">
        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Book Title</label>
          <input type="text" placeholder="Enter Book Title" name="bookTitle"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Author Name</label>
          <input type="text" placeholder="Enter Author Name" name="authorName"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Book Image</label>
          <input type="text" placeholder="Book Image URL" name="imageURL"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>

        <div className="relative flex items-center">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Category</label>
          <select name="categoryName" id="" className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" onChange={handleChangeSelectedValue}>
                {
                    bookCategories.map((option) => <option key={option} value={option}>{option}</option>)
                }
          </select>
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <label className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Book Description</label>
          <textarea type="text" placeholder="Write your Book Description" name="bookDescription"
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <label
            className="text-[13px] bg-white text-black absolute px-2 top-[-10px] left-[18px]">Book PDF URL</label>
          <input type="text" placeholder="Book pdf url" name='bookPDFURL'
            className="px-4 py-3.5 bg-white text-black w-full text-sm border-2 border-gray-100 focus:border-blue-500 rounded outline-none" />
        </div>
      </div>

      <button type="submit"
        className="btn mt-8 px-6 py-2.5 w-full text-sm bg-blue-500/80 text-white rounded hover:bg-blue-600 transition-all">Submit</button>
    </form>
    </div>
  );
};

export default UploadBook;
