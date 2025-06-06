import { NextPage } from "next";
import Image from "next/image";
import team from "../data/team.json";

const Team: NextPage = () => (
  <div className="mx-auto max-w-6xl px-4 py-16">
    <h1 className="mb-10 text-3xl font-semibold text-center">Our Advisers</h1>
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {team.members.map((member) => (
        <div key={member.name} className="space-y-4 text-center">
          <div className="relative mx-auto h-48 w-48 overflow-hidden rounded-full shadow-md">
            <Image src={member.image} alt={member.name} fill className="object-cover" />
          </div>
          <h2 className="text-xl font-semibold">{member.name}</h2>
          <p className="text-sm text-gray-600">{member.role}</p>
        </div>
      ))}
    </div>
  </div>
);
export default Team;
