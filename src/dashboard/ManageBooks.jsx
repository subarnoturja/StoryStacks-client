import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setAllBooks(data));
  }, []);

//   Handle Delete 
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/${id}`, 
        {
            method: "DELETE",
        }
    )
    .then(res => res.json())
    .then(data => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Book Deleted Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    })
  }

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Books</h2>

      {/* Table for book data */}
      <div className="container p-2 mx-auto w-[1180px] sm:p-4 dark:text-gray-800">
	<h2 className="mb-4 text-2xl font-semibold leading-tight">Invoices</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col />
				<col />
				<col />
				<col />
				<col />
				<col className="w-24" />
			</colgroup>
			<thead className="dark:bg-gray-300">
				<tr className="text-left">
					<th className="p-3">No</th>
					<th className="p-3">Book Name</th>
					<th className="p-3">Author Name</th>
					<th className="p-3">Category</th>
					<th className="p-3">Prices</th>
					<th className="p-3">Edit or Manage</th>
				</tr>
			</thead>
            {
                allBooks.map((book, index) => <tbody key={book._id}>
                    <tr className="border-b border-opacity-20 dark:border-gray-300 dark:bg-gray-50">
					<td className="p-3">
						<p>{index + 1}</p>
					</td>
					<td className="p-3">
						<p>{book.bookTitle}</p>
					</td>
					<td className="p-3">
						<p>{book.authorName}</p>
					</td>
					<td className="p-3">
						<p>{book.category}</p>
					</td>
					<td className="p-3">
						<p>$10.00</p>
					</td>
					<td className="p-3 text-right flex gap-2">
						<div>
                        <Link to={`/admin/dashboard/edit-books/${book._id}`} className="btn bg-blue-600 px-4 py-1 font-semibold text-white rounded-xl hover:bg-violet-600">
							<button>Edit</button>
						</Link>
                        </div>
                        <div>
                        <button onClick={() => handleDelete(book._id)} className="btn bg-red-600 px-4 py-1 font-semibold text-white rounded-xl hover:bg-sky-600">Delete</button>
                        </div>
					</td>
				</tr>
                     </tbody>)
            }
		</table>
	</div>
</div>
    </div>
  );
};

export default ManageBooks;
