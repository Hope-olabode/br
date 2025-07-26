import { useEffect, useState } from "react";
import axios from "axios";

export default function Customer() {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const paginatedUsers = users.slice(startIndex, endIndex);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/getuser`,
          {
            withCredentials: true,
          }
        );

        const now = Date.now();
        const activeThreshold = 24 * 60 * 60 * 1000; // 24 hours

        const formattedUsers = res.data.map((user) => {
          if (!user.lastSeen) return { ...user, formattedLastSeen: "N/A" };

          const lastSeenDate = new Date(user.lastSeen);
          const timeDiff = now - lastSeenDate.getTime();

          const optionsShort = {
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          };

          const optionsLong = {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "numeric",
            minute: "numeric",
            second: "numeric",
            hour12: true,
          };

          return {
            ...user,
            formattedLastSeen: lastSeenDate.toLocaleString(
              "en-US",
              timeDiff > activeThreshold ? optionsLong : optionsShort
            ),
          };
        });

        setUsers(formattedUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-[32px] leading-[48px] px-4 font-nexa-bold md:text-[48px] md:leading-[70px] lg:text-[56px] lg:leading-[78px]">
          All Users
        </h1>
      <table className="min-w-full border border-gray-200 bg-white shadow-md rounded-2xl table-fixed border-separate border-spacing-0">
        <thead>
          <tr className="bg-gray-100 text-center font-semibold text-gray-700 text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]">
            <th className="p-3 rounded-tl-2xl border-x">Name</th>
            <th className="p-3 border-x">Email</th>
            <th className="p-3 border-x">Status</th>
            <th className="p-3 rounded-tr-2xl border-x">Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {paginatedUsers.map((user, index) => {
            const isLast = index === paginatedUsers.length - 1;

            return (
              <tr
                key={user._id}
                className="text-center text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
              >
                <td
                  className={`border-y border-x p-3 ${
                    isLast ? "rounded-bl-2xl" : ""
                  }`}
                >
                  {user.Full_Name}
                </td>
                <td className="border-y border-x p-3">{user.Email}</td>
                <td
                  className={`border-y border-x p-3 ${
                    user.isActive ? "text-green-600" : "text-gray-500"
                  }`}
                >
                  {user.isActive ? "Online" : "Offline"}
                </td>
                <td
                  className={`border-y border-x p-3 ${
                    isLast ? "rounded-br-2xl" : ""
                  }`}
                >
                  {user.formattedLastSeen}
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
              className=" px-4 py-2 rounded"
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
  );
}
