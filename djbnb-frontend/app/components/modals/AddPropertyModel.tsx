"use client";

import Image from "next/image";

import { ChangeEvent, useState } from "react";

import Modal from "./Modal";
import CustomButton from "../form/CustomButton";
import Categories from "../addproperty/Categories";

import useAddPropertyModel from "@/app/hooks/usePropertyModel";
import SelectCountry, { SelectCountryValue } from "../form/SelectCountry";

import apiService from "@/app/services/apiService";
import { useRouter } from "next/navigation";

const AddPropertyModel = () => {
  // state
  const [currentStep, setCurrentStep] = useState(1);
  const [errors, setErrors] = useState<string[]>([]);
  const [dataCategory, setDataCategory] = useState("");
  const [dataTitle, setDataTitle] = useState("");
  const [dataDescription, setDataDescription] = useState("");
  const [dataPrice, setDataPrice] = useState("");
  const [dataBedrooms, setDataBedrooms] = useState("");
  const [dataBathrooms, setDataBathrooms] = useState("");
  const [dataGuests, setDataGuests] = useState("");
  const [dataCountry, setDataCountry] = useState<SelectCountryValue>();
  const [dataImage, setDataImage] = useState<File | null>(null);

  //
  const addPropertyModel = useAddPropertyModel();
  const router = useRouter();

  // set datas
  const setCategory = (category: string) => {
    setDataCategory(category);
  };

  const setImage = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const tmpImage = event.target.files[0];

      setDataImage(tmpImage);
    }
  };

  // submit
  const submitForm = async () => {
    console.log("submitForm");

    if (
      dataCategory &&
      dataTitle &&
      dataDescription &&
      dataPrice &&
      dataCountry &&
      dataImage
    ) {
      const formData = new FormData();
      formData.append("category", dataCategory);
      formData.append("title", dataTitle);
      formData.append("description", dataDescription);
      formData.append("price_per_night", dataPrice);
      formData.append("bedrooms", dataBedrooms);
      formData.append("bathrooms", dataBathrooms);
      formData.append("guests", dataGuests);
      formData.append("country", dataCountry.label);
      formData.append("country_code", dataCountry.value);
      formData.append("image", dataImage);

      const response = await apiService.post(
        "/api/properties/create/",
        formData
      );

      if (response.success) {
        console.log("SUCCESS :-D");

        router.push("/");

        addPropertyModel.close();
      } else {
        console.log("Error");

        const tmpErrors: string[] = Object.values(response).map(
          (error: any) => {
            return error;
          }
        );

        setErrors(tmpErrors);
      }
    }
  };

  const content = (
    <>
      {currentStep == 1 ? (
        <>
          <h2 className="mb-6 text-2xl">选择类型</h2>

          <Categories
            dataCategory={dataCategory}
            setCategory={(category) => setCategory(category)}
          />

          <CustomButton label="下一步" onClick={() => setCurrentStep(2)} />
        </>
      ) : currentStep == 2 ? (
        <>
          <h2 className="mb-6 text-2xl">介绍一下您的房屋</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>标题</label>
              <input
                type="text"
                value={dataTitle}
                onChange={(e) => setDataTitle(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>介绍</label>
              <textarea
                value={dataDescription}
                onChange={(e) => setDataDescription(e.target.value)}
                className="w-full h-[200px] p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>

          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="上一步"
            onClick={() => setCurrentStep(1)}
          />
          <CustomButton label="下一步" onClick={() => setCurrentStep(3)} />
        </>
      ) : currentStep == 3 ? (
        <>
          <h2 className="mb-6 text-2xl">详情</h2>

          <div className="pt-3 pb-6 space-y-4">
            <div className="flex flex-col space-y-2">
              <label>单晚价格</label>
              <input
                type="number"
                value={dataPrice}
                onChange={(e) => setDataPrice(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>房间数</label>
              <input
                type="number"
                value={dataBedrooms}
                onChange={(e) => setDataBedrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>浴室数</label>
              <input
                type="number"
                value={dataBathrooms}
                onChange={(e) => setDataBathrooms(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>

            <div className="flex flex-col space-y-2">
              <label>客人数</label>
              <input
                type="number"
                value={dataGuests}
                onChange={(e) => setDataGuests(e.target.value)}
                className="w-full p-4 border border-gray-600 rounded-xl"
              />
            </div>
          </div>

          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="上一步"
            onClick={() => setCurrentStep(2)}
          />
          <CustomButton label="下一步" onClick={() => setCurrentStep(4)} />
        </>
      ) : currentStep == 4 ? (
        <>
          <h2 className="mb-6 text-2xl">位置</h2>

          <div className="pt-3 pb-6 space-y-4">
            <SelectCountry
              value={dataCountry}
              onChange={(value) => setDataCountry(value as SelectCountryValue)}
            />
          </div>

          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="上一步"
            onClick={() => setCurrentStep(3)}
          />
          <CustomButton label="下一步" onClick={() => setCurrentStep(5)} />
        </>
      ) : (
        <>
          <h2 className="mb-6 text-2xl">图片</h2>
          <div className="pt-3 pb-6 space-y-4">
            <div className="py-4 px-6 bg-gray-600 text-white rounded-xl">
              <input type="file" accept="image/*" onChange={setImage} />
            </div>
            {dataImage && (
              <div className="w-[200px] h-[150px] relative">
                <Image
                  fill
                  alt="Uploaded image"
                  src={URL.createObjectURL(dataImage)}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            )}
          </div>

          {errors.map((error, index) => {
            return (
              <div
                key={index}
                className="p-5 mb-4 bg-airbnb text-white rounded-xl opacity-80"
              >
                {error}
              </div>
            );
          })}

          <CustomButton
            className="mb-2 bg-black hover:bg-gray-800"
            label="上一步"
            onClick={() => setCurrentStep(4)}
          />
          <CustomButton label="提交" onClick={submitForm} />
        </>
      )}
    </>
  );

  return (
    <>
      <Modal
        isOpen={addPropertyModel.isOpen}
        close={addPropertyModel.close}
        label="添加房屋"
        content={content}
      />
    </>
  );
};

export default AddPropertyModel;
