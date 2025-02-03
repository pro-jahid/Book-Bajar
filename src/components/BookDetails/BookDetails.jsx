import { useLoaderData, useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);

  const data = useLoaderData();

  const book = data.find((book) => book.bookId === id);

  const {
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;

  if (!book) {
    return <div className="text-center p-10 text-red-500">Book not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-5 bg-white rounded-lg shadow-md">
      <div className="flex justify-center mb-6">
        <img
          src={image}
          alt={bookName}
          className="w-64 h-96 object-cover rounded-lg"
        />
      </div>
      <div className="text-center mb-4">
        <h2 className="text-3xl font-semibold text-gray-800">{bookName}</h2>
        <h3 className="text-xl text-gray-600">By {author}</h3>
        <p className="text-md text-yellow-500 mt-2">{rating} ★</p>
      </div>
      <div className="mb-4">
        <h4 className="text-lg font-medium text-gray-700">Details</h4>
        <ul className="space-y-2 text-gray-600">
          <li>
            <strong>Category:</strong> {category}
          </li>
          <li>
            <strong>Publisher:</strong> {publisher}
          </li>
          <li>
            <strong>Year of Publishing:</strong> {yearOfPublishing}
          </li>
          <li>
            <strong>Total Pages:</strong> {totalPages}
          </li>
          <li>
            <strong>Tags:</strong>{" "}
            {Array.isArray(tags) ? tags.join(", ") : tags}
          </li>
        </ul>
      </div>
      <div className="mt-6">
        <h4 className="text-lg font-medium text-gray-700">Review</h4>
        <p className="text-gray-600 mt-2">{review}</p>
      </div>
    </div>
  );
};

export default BookDetails;
