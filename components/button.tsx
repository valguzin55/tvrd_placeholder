"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ButtonComponent() {
  return (
    <Link
      href={"https://www.instagram.com/tvrd.agency/"}
      target="_blank"
      className="flex justify-center absolute bottom-[50px] w-[506px] h-[79px] px-9 py-5 bg-blue-600 rounded-[17.31px] justify-center items-center gap-[17.31px] inline-flex cursor-pointer"
    >
      <div className="text-center text-white text-2xl font-semibold leading-[38.07px]">
        Тык сюда на инсту
      </div>
    </Link>
  );
}
