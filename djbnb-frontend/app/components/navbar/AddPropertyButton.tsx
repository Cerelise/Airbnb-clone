"use client";

import useLoginModel from "@/app/hooks/useLoginModel";
import useAddPropertyModel from "@/app/hooks/usePropertyModel";

interface AddPropertyButtonProps {
  userId?: string | null;
}

const AddPropertyButton: React.FC<AddPropertyButtonProps> = ({ userId }) => {
  const loginModal = useLoginModel();
  const addPropertyModel = useAddPropertyModel();

  const airbnbYourHome = () => {
    if (userId) {
      addPropertyModel.open();
    } else {
      loginModal.open();
    }
  };

  return (
    <div
      onClick={airbnbYourHome}
      className="p-2 cursor-pointer text-sm font-semibold rounded-full hover:bg-gray-100"
    >
      home
    </div>
  );
};

export default AddPropertyButton;
