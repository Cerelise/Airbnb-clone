import Image from "next/image";

interface CategoriesProps {
  dataCategory: string;
  setCategory: (category: string) => void;
}

const Categories: React.FC<CategoriesProps> = ({
  dataCategory,
  setCategory,
}) => {
  return (
    <>
      <div className="pt-3 cursor-pointer pb-6 flex items-center space-x-12">
        <div
          onClick={() => setCategory("Beach")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Beach" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/categories/beach.jpg" width={20} height={20} alt="" />

          <span className="text-xs">海滩</span>
        </div>

        <div
          onClick={() => setCategory("Castles")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Castles" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/categories/Castles.jpg" width={20} height={20} alt="" />

          <span className="text-xs">城堡</span>
        </div>

        <div
          onClick={() => setCategory("Islands")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Islands" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/categories/islands.jpg" width={20} height={20} alt="" />

          <span className="text-xs">小岛</span>
        </div>

        <div
          onClick={() => setCategory("Camping")}
          className={`pb-4 flex flex-col items-center space-y-2 border-b-2 ${
            dataCategory == "Camping" ? "border-gray-800" : "border-white"
          }  opacity-60 hover:border-gray-200 hover:opacity-100`}
        >
          <Image src="/categories/camping.jpg" width={20} height={20} alt="" />

          <span className="text-xs">露营</span>
        </div>
      </div>
    </>
  );
};

export default Categories;
