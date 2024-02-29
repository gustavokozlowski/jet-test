import { Car } from "@/types/car";
import Image from "next/image";

export default function Table(car: Car) {
  return (
    <div className="size-full">
      <h1 className="font-bold text-2xl my-20 antialiased">
        Esse é apenas o começo mano
      </h1>

      <table className=" antialiased color shadow-2xl w-4/6 h-1/3 border-spacing-0 border border-x-0 border-slate-400 ...">
        <thead className="">
          <tr className="text-left uppercase font-semibold text-gray-500">
            <th className="border  border-slate-300 ...">Car</th>
            <th className="border border-slate-300 ...">Next Reservation</th>
            <th className="border border-slate-300 ...">Status</th>
            <th className="border border-slate-300 ...">Rating</th>
            <th className="border border-slate-300 ...">Actions</th>
          </tr>
        </thead>
        <tbody className="border-none">
          <tr key={car.id}>
            <td className="border border-slate-300 ...">
              <Image
                alt="model car image"
                src={`data-car/${car.image}`}
                width={40}
                height={35}
              />
              {car.name}
            </td>
            <td className="border border-slate-300 ...">{car.reservation}</td>
            <td className="border border-slate-300 ...">{car.status}</td>
            <td className="border border-slate-300 ...">
              <Image
                alt="raiting svg"
                src={`data-car/${car.note}`}
                width={40}
                height={35}
              />
            </td>
            <td className="border border-slate-300 ...">
              <Image
                alt="actions svg"
                src="data-car/actions.svg"
                width={40}
                height={35}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
