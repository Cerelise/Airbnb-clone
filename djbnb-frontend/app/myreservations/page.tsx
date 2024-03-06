import Image from "next/image";

import ContactButton from "../components/ContactButton";
import PropertyList from "../components/properties/PropertyList";

const MyReservationsPage = () => {
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <h1 className="my-6 text-2xl">我的预订</h1>

      <div className="space-y-4">
        <div className="p-5 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/house/beach_house_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 ">
            <h2 className="mb-4 text-xl">韩国 济州岛</h2>

            <p className="mb-2">
              <strong>入住日期：</strong>2024/3/4
            </p>
            <p className="mb-2">
              <strong>离开日期：</strong>2024/3/9
            </p>

            <p className="mb-2">
              <strong>住宿天数：</strong>5
            </p>
            <p className="mb-2">
              <strong>总价：</strong>￥ 500
            </p>

            <button className="mt-6 cursor-pointer py-4 px-6 text-white bg-airbnb rounded-xl">
              查看订单
            </button>
          </div>
        </div>

        <div className="p-5 grid grid-cols-4 gap-4 shadow-md border border-gray-300 rounded-xl">
          <div className="col-span-1">
            <div className="relative overflow-hidden aspect-square rounded-xl">
              <Image
                fill
                src="/house/beach_house_1.jpg"
                className="hover:scale-110 object-cover transition h-full w-full"
                alt=""
              />
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 ">
            <h2 className="mb-4 text-xl">韩国 济州岛</h2>

            <p className="mb-2">
              <strong>入住日期：</strong>2024/3/4
            </p>
            <p className="mb-2">
              <strong>离开日期：</strong>2024/3/9
            </p>

            <p className="mb-2">
              <strong>住宿天数：</strong>5
            </p>
            <p className="mb-2">
              <strong>总价：</strong>￥ 500
            </p>

            <button className="mt-6 cursor-pointer py-4 px-6 text-white bg-airbnb rounded-xl">
              查看订单
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyReservationsPage;
