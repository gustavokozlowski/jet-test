import { Car } from "@/types/car";
import { data } from "@/utils/data";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex bg-emerald-500 text-center flex-col justify-center items-center h-screen ">
      {/* <Image
        className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      /> */}

      <h1 className="font-bold uppercase text-white text-2xl my-20 antialiased ">
        Temos alguns carros em promoção
      </h1>
      <table className=" cursor-pointer text-white antialiased color shadow-2xl w-4/6 h-1/3 border-spacing-0 border bg-white  border-slate-400 ...">
        <thead>
          <tr className=" text-center uppercase font-semibold text-gray-500">
            <th className="border  border-slate-300 ...">Car</th>
            <th className="border  border-slate-300 ...">Next Reservation</th>
            <th className="border  border-slate-300 ...">Status</th>
            <th className="border  border-slate-300 ...">Rating</th>
            <th className="border  border-slate-300 ...">Actions</th>
          </tr>
        </thead>
        <tbody className=" text-black">
          {data.map((car) => (
            <tr key={car.id}>
              <td className="border border-slate-300 ">
                <div className="flex items-center text-center gap-4 ">
                  <Image
                    alt="model car image"
                    src={`/data-car/${car.image}`}
                    width={40}
                    height={35}
                  />
                  {car.name}
                </div>
              </td>
              <td className="border border-slate-300 text-center  ...">
                {car.reservation}
              </td>
              <td className="border border-slate-300 text-center ...">
                {car.status}
              </td>
              <td className="border border-slate-300 ">
                <div className="flex items-center justify-center  ">
                  <Image
                    alt="raiting svg"
                    src={`/data-car/${car.note}`}
                    width={40}
                    height={35}
                  />
                </div>
              </td>
              <td className=" border border-slate-300 ...">
                <div className="flex items-center justify-center  ">
                  <Image
                    alt="actions svg"
                    src="/data-car/actions.svg"
                    width={5}
                    height={5}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
