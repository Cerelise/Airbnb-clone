import Image from "next/image";

const PropertyListItem = () => {
  return (
    <div className="cursor-pointer">
      <div className="relative overflow-hidden aspect-square rounded-xl ">
        <Image
          fill
          src="/house/beach_house_1.jpg"
          sizes="(max-width: 768px) 768px, (max-width: 1200px): 768px, 768px"
          className="hover:scale-110 object-cover transition h-full w-full"
          alt="Beach house"
        />
      </div>

      <div className="mt-2">
        <p className="text-lg font-bold">韩国 济州岛</p>
      </div>
      <div className="mt-1">
        <p className="text-sm text-gray-400">Iho Tewoo海滩附近</p>
      </div>
      <div className="mt-1">
        <p className="text-sm text-gray-400">3月9日至14日</p>
      </div>

      <div className="mt-2">
        <p className="text-sm text-gray-500">
          <strong>¥534</strong>晚
        </p>
      </div>
    </div>
  );
};

export default PropertyListItem;
