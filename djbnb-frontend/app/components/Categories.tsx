"use client";

import { useState } from "react";
import Image from "next/image";
import useSearchModal, { SearchQuery } from "../hooks/useSearchModal";

const Categories = () => {
  const searchModal = useSearchModal();
  const [category, setCategory] = useState("");

  const _setCatgory = (_category: string) => {
    setCategory(_category);

    const query: SearchQuery = {
      country: searchModal.query.country,
      checkIn: searchModal.query.checkIn,
      checkOut: searchModal.query.checkOut,
      guests: searchModal.query.guests,
      bedrooms: searchModal.query.bedrooms,
      bathrooms: searchModal.query.bathrooms,
      category: _category,
    };

    searchModal.setQuery(query);
  };

  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div
        onClick={() => _setCatgory("")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/categories/beach.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">All</span>
      </div>
      <div
        onClick={() => _setCatgory("beach")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "beach" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/categories/beach.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>

      <div
        onClick={() => _setCatgory("castle")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "castle" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/categories/Castles.jpg"
          alt="Category - Castles"
          width={20}
          height={20}
        />

        <span className="text-xs">Castle</span>
      </div>

      <div
        onClick={() => _setCatgory("islands")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "islands" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/categories/islands.jpg"
          alt="Category - Island"
          width={20}
          height={20}
        />

        <span className="text-xs">Island</span>
      </div>

      <div
        onClick={() => _setCatgory("camping")}
        className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
          category == "camping" ? "border-black" : "border-white"
        } opacity-60 hover:border-gray-200 hover:opacity-100`}
      >
        <Image
          src="/categories/camping.jpg"
          alt="Category - Camping"
          width={20}
          height={20}
        />

        <span className="text-xs">Camping</span>
      </div>
    </div>
  );
};

export default Categories;
