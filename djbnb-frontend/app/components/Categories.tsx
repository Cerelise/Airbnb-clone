import Image from "next/image";

const Categories = () => {
  return (
    <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/categories/beach.jpg"
          alt="Category - Beach"
          width={20}
          height={20}
        />

        <span className="text-xs">Beach</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/categories/Castles.jpg"
          alt="Category - Castles"
          width={20}
          height={20}
        />

        <span className="text-xs">Castle</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
        <Image
          src="/categories/islands.jpg"
          alt="Category - Island"
          width={20}
          height={20}
        />

        <span className="text-xs">Island</span>
      </div>

      <div className="pb-4 flex flex-col items-center space-y-2 border-b-2 border-white opacity-60 hover:border-gray-200 hover:opacity-100">
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
