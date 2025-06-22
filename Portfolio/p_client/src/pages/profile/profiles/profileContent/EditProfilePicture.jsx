import React, { useState } from "react";
import useUserContext from "../../../../customHooks/useUserContext";
import axiosInstance from "../../../../APIs/axiosInstance";

export default function EditProfilePicture() {
  const { user } = useUserContext();

  const [editImage, setEditImage] = useState(false);
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(user?.avatar || null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };
  const handleEditImageToggle = () => {
    setEditImage(!editImage);
  };

  const handleImageUpload = async (e) => {
    e.preventDefault();
    setEditImage(!editImage);
    try {
      const formData = new FormData();
      formData.append("avatar", image);
      const response = await axiosInstance.post("/auth/userProfile", formData);
      setImagePreview(response.data.user.avatar);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    editImage,
    handleEditImageToggle,
    image,
    handleFileChange,
    imagePreview,
    handleImageUpload,
  };
}
