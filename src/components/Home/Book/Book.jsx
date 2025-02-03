import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const Book = ({ book }) => {

    const { image, tags, bookName, author, category, rating, bookId } = book;
  return (
    <div>
      <Link to={`/books/${bookId}`}>
        <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
          <div className="flex justify-center bg-gray-100 p-10 rounded-lg">
            <img
              src={image}
              alt={`Cover of the book "${bookName}"`}
              className="w-[150px] h-[250px] "
            />
          </div>
          <div className="p-4">
            <p className=" text-green-500 mb-2 flex gap-4 text-1xl">
              {Array.isArray(tags) ? tags.join(", ") : tags}
            </p>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {bookName}
            </h2>
            <h3 className="text-md text-gray-700 border-b-2 border-dotted border-gray-300 pb-4">
              By : {author}
            </h3>
            <div className="flex justify-between items-center mt-4 font-bold">
              <p className="text-1xl text-gray-600">{category}</p>
              <p className="text-1xl text-gray-600-500 flex gap-2 items-center">
                {rating} <FaRegStar />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Book;
