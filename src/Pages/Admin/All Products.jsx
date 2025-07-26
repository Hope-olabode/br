import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";

export default function All() {
  const { products } = useContext(AuthContext);
  const [isFocused, setIsFocused] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedProducts = filteredProducts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <div className="div">
      <div className="flex justify-center mt-12">
        <h1 className="text-[32px] leading-[48px] px-4 font-nexa-bold md:text-[48px] md:leading-[70px] lg:text-[56px] lg:leading-[78px]">
          All Products
        </h1>
      </div>
      <div className="flex justify-end mr-4">
        <div className="mt-4 md:mt-2 ">
          <p>Categories:</p>
          <select
            className={`w-[200px] mt-2 h-12 border-2 border-[#DDDDDD] rounded-xl  active:border-none focus:outline-none pl-6  font-poopins text-[14px] leading-[22px] lg:h-12 lg:text-[16px] lg:leading-[26px] ${
              isFocused
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            id="Category"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={(e) => setIsFocused(e.target.value.trim() !== "")}
          >
            <option value="All">All</option>
            <option value="Hoodie">Hoodie</option>
            <option value="Shirts">Shirts</option>
            <option value="T-Shirts">T-Shirts</option>
            <option value="Trouser">Trouser</option>
            <option value="Shorts">Shorts</option>
            <option value="Tanktop">Tanktop</option>
            <option value="Cap">Cap</option>
            <option value="Jersey">Jersey</option>
            <option value="Joggers">Joggers</option>
            <option value="Female wears">Female wears</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto p-4">
        <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-2xl table-fixed border-separate border-spacing-0">
          <thead>
            <tr className="bg-gray-100 text-center font-semibold text-gray-700 text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">
              <th className="p-3 rounded-tl-2xl">Image</th>
              <th className="p-3">Name</th>
              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
              <th className="p-3">Price (₦)</th>
              <th className="p-3 rounded-tr-2xl">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedProducts.map((product, index) => {
              const isLast = index === products.length - 1;
              return (
                <tr
                  key={product._id}
                  className="border-t text-center text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
                >
                  <td
                    className={`p-3 ${isLast ? "rounded-bl-2xl" : ""} bg-white`}
                  >
                    <img
                      src={product.img1}
                      alt={product.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  </td>
                  <td className="p-3 bg-white">{product.name}</td>
                  <td className="p-3 bg-white">{product.category}</td>
                  <td className="p-3 bg-white">{product.discription}</td>
                  <td className="p-3 bg-white">
                    ₦{product.price.toLocaleString()}
                  </td>
                  <td
                    className={`p-3 ${isLast ? "rounded-br-2xl" : ""} bg-white`}
                  >
                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded">
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        
        <div className="w-full flex justify-center items-center my-8">
          <div className="flex justify-center flex-col items-center w-[393px] rounded-[32px] mt-4 bg-white shadow-custom">
            {/* Top Section: Dropdown */}
            <div className="flex justify-between w-full h-[72px] items-center px-8">
              <select
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="border border-gray-300 px-4 py-2 rounded"
              >
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <option key={page} value={page}>
                      {page}
                    </option>
                  )
                )}
              </select>
              <span className="text-gray-600 text-sm">of {totalPages}</span>
            </div>

            {/* Bottom Section: Prev/Next Buttons */}
            <div className="flex justify-between w-full h-[72px] items-center px-8">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className={`px-4 py-2 rounded text-sm ${
                  currentPage === 1
                    ? "opacity-50 cursor-not-allowed bg-gray-200"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                Previous
              </button>

              <p className="font-medium text-lg">{currentPage}</p>

              <button
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className={`px-4 py-2 rounded text-sm ${
                  currentPage === totalPages
                    ? "opacity-50 cursor-not-allowed bg-gray-200"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
