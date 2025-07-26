import { useForm } from "react-hook-form";
import axios from "axios";
import { useState, useEffect } from "react";
import wc from "../../assets/Images/wcircle.svg";
import ba from "../../assets/Images/barrow.svg";
import Loader from "../../Components/Loader2";
export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { isSubmitting },
  } = useForm();

  const Name = watch("Name");
  const Price = watch("Price");
  const Quantity = watch("Quantity");
  const Category = watch("Category");
  const Discription = watch("Discription");

  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const [isFocused2, setIsFocused2] = useState(false);
  const [isFocused3, setIsFocused3] = useState(false);
  const [isFocused4, setIsFocused4] = useState(false);
  const [isFocused5, setIsFocused5] = useState(false);
  const [loading, setLoading] = useState(false);
  /* const [files, setFiles] = useState([null, null, null, null]);


  const handleFileChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const updatedFiles = [...files];
      updatedFiles[index] = file;
      setFiles(updatedFiles);
    }
  }; */

  useEffect(() => {
    setIsFocused(Name && Name.trim().length > 0);
  }, [Name]);
  useEffect(() => {
    setIsFocused2(Quantity && Quantity.trim().length > 0);
  }, [Quantity]);
  useEffect(() => {
    setIsFocused3(Price && Price.trim().length > 0);
  }, [Price]);

  useEffect(() => {
    setIsFocused4(Discription && Discription.trim().length > 0);
  }, [Discription]);

  useEffect(() => {
    setIsFocused5(Category && Category.trim().length > 0);
  }, [Category]);

  const onSubmit = async (data) => {
    setMessage("");
    setLoading(true);
    console.log(data);
    try {
      const formData = new FormData();
      formData.append("Name", data.Name);
      formData.append("Quantity", data.Quantity);
      formData.append("Price", data.Price);
      formData.append("Category", data.Category);
      formData.append("Discription", data.Discription);

      // Append each image if selected
      if (data.img1?.[0]) formData.append("img1", data.img1[0]);
      if (data.img2?.[0]) formData.append("img2", data.img2[0]);
      if (data.img3?.[0]) formData.append("img3", data.img3[0]);
      if (data.img4?.[0]) formData.append("img4", data.img4[0]);

      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/products` , formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          
        },
        withCredentials: true
      });

      console.log("📦 Final FormData being sent:");
      for (let [key, value] of formData.entries()) {
        if (value instanceof File) {
          console.log(`${key}:`, value.name); // Just log file name
        } else {
          console.log(`${key}:`, value);
        }
      }

      setMessage("✅ Product created successfully!");
      reset();
      setLoading(false);
    } catch (error) {
      setMessage("❌ Failed to create product.");
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white  rounded mt-[50px]">
      <h1 className="text-2xl font-bold mb-6">Create Product</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="md:grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="div">
          <p>Product Name:</p>
          <input
            className={`w-full mt-2 h-12 border-2 border-[#DDDDDD] rounded-xl active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Name")}
            placeholder="Product Name"
            type="string"
            id="ProductName"
          />
        </div>

        <div className="div mt-4 md:mt-0">
          <p>Quantity:</p>
          <input
            className={`w-full mt-2 h-12 border-2 border-[#DDDDDD] rounded-xl active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused2
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Quantity")}
            placeholder="Quantity"
            type="number"
            id="Quantity"
          />
        </div>

        <div className="mt-4 md:mt-2">
          <p>Price</p>
          <input
            className={`w-full mt-2 h-12 border-2 border-[#DDDDDD] rounded-xl active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused3
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Price")}
            placeholder="Price"
            type="number"
            id="Price"
          />
        </div>

        <div className="mt-4 md:mt-2">
          <p>Category:</p>
          <select
            className={`w-full mt-2 h-12 border-2 border-[#DDDDDD] rounded-xl  active:border-none focus:outline-none pl-6  font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused5
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Category")}
            id="Category"
            onFocus={() => setIsFocused5(true)}
            onBlur={(e) => setIsFocused5(e.target.value.trim() !== "")}
          >
            <option value="">Select Category</option>
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

        <div className="col-start-1 col-end-3 mt-4 md:mt-2">
          <p>Discription:</p>
          <textarea
            className={`w-full col-start-1 col-end-3 mt-2 h-24 p-4 border-2 border-[#DDDDDD] rounded-xl active:border-none focus:outline-none pl-6 pr-2 font-poopins text-[14px] leading-[22px] lg:h-[72px] lg:text-[16px] lg:leading-[26px] ${
              isFocused4
                ? "bg-black text-white placeholder:text-white border-black border-2"
                : ""
            }`}
            {...register("Discription")}
            placeholder="Discription"
            type="string"
            id="Discription"
          />
        </div>

        {/* Image 1 */}
        <div className="mt-4 md:mt-2">
          <p>Image 1:</p>
          <input
            type="file"
            {...register("img1")}
            accept="image/*"
            className="block mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
           file:bg-violet-50 file:text-violet-700
           hover:file:bg-violet-100"
          />
        </div>

        {/* Image 2 */}
        <div className="mt-4 md:mt-2">
          <p>Image 2:</p>
          <input
            type="file"
            {...register("img2")}
            accept="image/*"
            className="block mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
           file:bg-violet-50 file:text-violet-700
           hover:file:bg-violet-100"
          />
        </div>

        {/* Image 3 */}
        <div className="mt-4 md:mt-2">
          <p>Image 3:</p>
          <input
            type="file"
            {...register("img3")}
            accept="image/*"
            className="block mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
           file:bg-violet-50 file:text-violet-700
           hover:file:bg-violet-100"
          />
        </div>
        {/* Image 4 */}
        <div className="mt-4 md:mt-2">
          <p>Image 4:</p>
          <input
            type="file"
            {...register("img4")}
            accept="image/*"
            className="block mt-2 w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4
           file:rounded-full file:border-0
           file:text-sm file:font-semibold
           file:bg-violet-50 file:text-violet-700
           hover:file:bg-violet-100"
          />
        </div>

        {/* Optional image URLs */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-primary md:col-span-2"
        >
          {isSubmitting ? "Submitting..." : "Create Product"}
        </button>

        <button
          type="submit"
          className="bg-[#E2063A] my-4 text-white  rounded-full relative overflow-hidden group lg:h-[72px] lg:w-full  w-[100%]"
          /* disabled={
            Name?.trim()?.length === 0 ||
            Price?.trim()?.length === 0 ||
            Quantity?.trim()?.length === 0 ||
            Discription?.trim()?.length === 0 ||
            Category?.trim()?.length === 0
          } */
        >
          <div
            className={`${
              loading ? "hidden" : "block"
            } justify-center items-center`}
          >
            <div
              className={`${
                Name?.trim()?.length === 0 ||
                Price?.trim()?.length === 0 ||
                Quantity?.trim()?.length === 0 ||
                Category?.trim()?.length === 0 /* ||
                Discription?.trim()?.length === 0 */
                  ? "inset-0 bg-[#ffffffd0] z-10 absolute w-100%"
                  : ""
              } relative  px-4 py-[13px] lg:py-[23px] lg:px-0  `}
            >
              <span className="relative z-10 ">
                <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px] lg:pl-[40px]">
                  {loading ? "Submitting" : "Submit"}
                </p>
              </span>
              <div className="absolute right-[10px] top-[50%] translate-y-[-50%] lg:right-[25px]">
                <img
                  src={wc}
                  className={`${
                    Name?.trim()?.length === 0 ||
                    Price?.trim()?.length === 0 ||
                    Quantity?.trim()?.length === 0  ||
                    Category?.trim()?.length === 0 /* ||
                    Discription?.trim()?.length === 0 */
                      ? "hi"
                      : "hidden"
                  } lg:h-10`}
                />
                <img
                  src={ba}
                  className={`${
                    Name?.trim()?.length === 0 ||
                    Price?.trim()?.length === 0 ||
                    Quantity?.trim()?.length === 0  ||
                    Category?.trim()?.length === 0 /* ||
                    Discription?.trim()?.length === 0 */
                      ? "hidden"
                      : "block"
                  } lg:h-10`}
                />
              </div>
            </div>
          </div>
          <div
            className={`pt-2 ${
              loading ? "flex bg-[#ffffffd0] h-full" : "hidden"
            } justify-center items-center`}
          >
            <Loader />
          </div>
        </button>

        {message && (
          <p className="md:col-span-2 text-center mt-4 text-green-600">
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
