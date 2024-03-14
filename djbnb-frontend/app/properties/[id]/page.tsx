import ReservationSidebar from "@/app/components/properties/ReservationSidebar";
import Image from "next/image";

import apiService from "@/app/services/apiService";

const PropertyDetailPage = async ({ params }: { params: { id: string } }) => {
  const property = await apiService.get(`/api/properties/${params.id}`);
  return (
    <main className="max-w-[1500px] mx-auto px-6 pb-6">
      <div className="w-full h-[64vh] mb-4 overflow-hidden rounded-xl relative">
        <Image
          fill
          className="object-cover w-full h-full"
          src="/house/beach_house_1.jpg"
          alt=""
        ></Image>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <div className="py-6 pr-6 col-span-3">
          <h1 className="mb-4 text-4xl">{property.title}</h1>

          <span className="mb-6 block text-lg text-gray-600">
            {property.guests} 客人 - {property.bedrooms} 卧室 -{" "}
            {property.bathrooms} 卫生间
          </span>

          <hr />

          <div className="py-6 flex items-center space-x-4">
            {property.landlord.avatar_url && (
              <Image
                src="/profile_pic_1.jpg"
                width={50}
                height={50}
                className="rounded-full"
                alt="The user name"
              />
            )}
            <p>
              该房屋的所有者为 <strong>{property.landlord.name}</strong>
            </p>
          </div>

          <hr />

          <p className="mt-6 text-lg">
            Loremalsdjf lkasdj flkajslkdf jaslk djflkas jdlfkjaslkdfj alsk jdflk
            asjldkf jaslk djflkasj dflkaslkdf askldfj lasjd flk asjldkf jaslk
            fjlk asjldfkj aslkdfj lkasjf
          </p>
        </div>
        <ReservationSidebar property={property} />
      </div>
    </main>
  );
};

export default PropertyDetailPage;
