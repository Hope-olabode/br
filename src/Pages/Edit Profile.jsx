import React, { useState, useRef, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Pic from "../assets/Images/profilePic.svg";
import Photo from "../assets/Images/photo.svg";
import { Context } from "../App";

const ProfilePage = () => {
  const [preview, setPreview] = useState(""); // Image Preview
  const [hasChanges, setHasChanges] = useState(false); // Track changes
  const [uploading, setUploading] = useState(false); // Upload State
  const [cameraActive, setCameraActive] = useState(false); // Camera Toggle
  const [imgFile, setImgFile] = useState("");
  const videoRef = useRef(null); // Reference to Video Element
  const canvasRef = useRef(null); // Reference to Canvas Element
  const fileInputRef = useRef(null);
  const { user } = useContext(Context);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      Full_Name: user.Full_Name || "",
      Brand_Name: user.Brand_Name || "",
      Phone_No: user.Phone_No || "",
      Email: user.Email || "",
    },
  });


  useEffect(() => {
    if (user) {
      reset({
        Full_Name: user.Full_Name || "",
        Brand_Name: user.Brand_Name || "",
        Phone_No: user.Phone_No || "",
        Email: user.Email || "",
      });
    }
  }, [user, reset]);

  // 📤 Handle File Upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    console.log(file);
    if (file) {
      setPreview(URL.createObjectURL(file));
      setHasChanges(true); // Mark as changed
      /* uploadImage(file); */
      setImgFile(file);
      console.log(preview);
      console.log(file);
    }
  };

  const handleInputChange = () => {
    setHasChanges(true); // Mark as changed
  };

  // 📸 Trigger File Input Click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };
  console.log(user.Full_Name)
  // 📸 Start Camera
  const startCamera = async () => {
    try {
      setCameraActive(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
    } catch (error) {
      console.error("Camera Access Error:", error);
      alert("Failed to access the camera. Please check your permissions.");
    }
  };

  // 🛑 Stop Camera
  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      videoRef.current.srcObject.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }
    setCameraActive(false);
  };

  // 🖼️ Capture Photo
  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;

    if (!video || !canvas) {
      alert("Camera or Canvas not ready.");
      return;
    }

    // Ensure video stream is active
    if (video.srcObject) {
      const context = canvas.getContext("2d");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      context.drawImage(video, 0, 0, canvas.width, canvas.height);

      // Convert canvas to image file
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "profile-photo.png", {
            type: "image/png",
          });
          setPreview(URL.createObjectURL(blob));
          /* uploadImage(file); */
          setImgFile(file);
        } else {
          alert("Failed to capture image from canvas.");
        }
      }, "image/png");

      stopCamera();
    } else {
      alert("Video stream is not active.");
    }
  };

  // 🚀 Upload Image
  const uploadImage = async (data) => {
    console.log(data);
    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });
  
    // Append image file if it exists
    if (imgFile) {
      formData.append("image", imgFile);
    }
  
    console.log("FormData for upload:", Array.from(formData.entries())); // Debugging
    setUploading(true);
    try {
      const res = await axios.post(
        "http://localhost:3001/api/profilePic",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Required for file uploads
          },
          withCredentials: true,
        }
      );
      alert("Image uploaded successfully!");
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center mt-[192px] px-4 md:px-[40px] lg:px-[60px] xl:px-[80px] 2xl:px-[120px]">
      <div className="md:w-[482px] mt-24 w-full">
        <form onSubmit={handleSubmit(uploadImage)}>
          <div className=" flex flex-col justify-center items-center">
            <p className="font-nexa-bold text-[24px] leading-[38px] lg:text-[36px] lg:leading-[48px] mb-2">
              Account Details
            </p>
            <p className="font-poopins font-medium text-[14px] leading-[22px] lg:font-normal lg:text-[20px] lg:leading-[32px]">
              Edit your account information
            </p>
            <div className="div my-10 relative">
              {preview ? (
                <img
                  onClick={handleImageClick}
                  src={preview}
                  alt="Preview"
                  className=" h-[148px] w-[148px] rounded-full"
                />
              ) : (
                <img
                  onClick={handleImageClick}
                  className=" h-[148px] w-[148px] rounded-full"
                  src={user.Profile_Image || Pic}
                  alt=""
                />
              )}

              <div className="absolute flex justify-center w-full bottom-[-23px]">
                <img
                  onClick={startCamera}
                  className=" h-12 w-12 lg:w-[72px] lg:h-[72px] rounded-full "
                  src={Photo}
                  alt=""
                />
              </div>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
            </div>
          </div>
          <div className="flex flex-col w-100% gap-4">
            <input
              type="text"
              {...register("Full_Name")}
              defaultValue={user.Full_Name}
              placeholder="Full name"
              onChange={handleInputChange}
              className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
            />
            <input
              type="text"
              {...register("Brand_Name")}
              placeholder="Business name"
              onChange={handleInputChange}
              className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
            />
            <input
              type="email"
              {...register("Email")}
              placeholder="Email Address"
              onChange={handleInputChange}
              className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
            />
            <input
              type="tel"
              {...register("Phone_No")}
              placeholder="Phone number"
              onChange={handleInputChange}
              className="border-2 border-[#DDDDDD] outline-none h-12 rounded-full w-[100%] pl-6 pr-2 text-[#9A9A9A] focus:bg-black focus:text-white focus:border-black lg:h-[72px] font-poopins text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px]"
            />
          </div>

          {hasChanges || preview ? (
            <button
              type="submit"
              className="bg-[#E2063A] h-12 text-white w-full px-4  rounded-full relative overflow-hidden group  mt-4 lg:h-[72px]  lg:pl-[40px]"
            >
              <span className="relative z-10 ">
                <p className="font-nexa-bold text-[14px] leading-[22px] text-left lg:text-[16px] lg:leading-[26px]">
                  Save Changes
                </p>
              </span>
              <span className="absolute right-[10px] top-[50%]  translate-y-[-50%] h-8 w-8 bg-black transition-all duration-[1s] ease-in-out group-hover:translate-y-[-50%] group-hover:w-full group-hover:h-full group-hover:scale-[5]  rounded-full lg:right-4 lg:h-10 lg:w-10"></span>
            </button>
          ) : (
            <div className="w-full text-center font-nexa-light text-[14px] leading-[22px] lg:text-[16px] lg:leading-[26px] h-12 lg:h-[72px] mt-4 text-[#9A9A9A]">
              Save Changes
            </div>
          )}
        </form>
      </div>

      {cameraActive ? (
        <div
          className="fixed inset-0 flex flex-col justify-center items-center bg-black z-[1000]"
          style={{ zIndex: 1000 }} // Ensure z-index is applied
        >
          <div className="relative z-[1000]">
            <video
              className="h-[148px] w-[148px] rounded-full"
              ref={videoRef}
              autoPlay
              style={{
                width: "296px",
                height: "296px",
                borderRadius: "50%", // Makes it circular
                objectFit: "cover", // Ensures video fills the circle
                border: "2px solid #ccc", // Optional border
              }}
            ></video>

            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <div className="flex text-white justify-between my-4">
              <button
                className="border-2 border-[#DDDDDD] h-12 rounded-full hover:border-black text-center w-[150px]"
                onClick={capturePhoto}
              >
                Capture Photo
              </button>
              <button
                className="border-2 border-[#DDDDDD] h-12 rounded-full hover:border-black text-center w-[150px]"
                onClick={stopCamera}
              >
                Close Camera
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProfilePage;
