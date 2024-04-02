import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setupCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setupCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex item-center space-x-12">
        <div
          onClick={() => setupCategory("beach")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "beach" ? "border-gray-800" : "border-white"
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
          onClick={() => setupCategory("castle")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 
          ${
            dataCategory == "castle" ? "border-gray-800" : "border-white"
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
          onClick={() => setupCategory("islands")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "islands" ? "border-gray-800" : "border-white"
          } opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image
            src="/categories/islands.jpg"
            alt="Category - Beach"
            width={20}
            height={20}
          />

          <span className="text-xs">Islands</span>
        </div>

        <div
          onClick={() => setupCategory("camping")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "camping" ? "border-gray-800" : "border-white"
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
    </>
  );
};

export default Categories;
