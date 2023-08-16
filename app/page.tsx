"use client";
import ButtonComponent from "@/components/button";
import WebcamImpl from "@/components/webcam";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen items-center justify-center relative">
      <WebcamImpl />
      <div className="flex absolute top-[100px] gap-5">
        <div className="w-[739px] h-[216px] relative ">
          <div className="w-[739px] h-[216px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[40px] backdrop-blur-[50px]" />
          <div className="w-[601px] left-[69px] top-[54px] absolute text-center">
            <span className="text-white text-3xl font-normal">
              Тут скоро будет пушечка, а пока можешь перейти на наш{" "}
            </span>
            <Link
              href={"https://www.instagram.com/tvrd.agency/"}
              target="_blank"
            >
              <span
                className="text-white text-3xl font-normal underline"
                onClick={() => {}}
              >
                инстаграм
              </span>
            </Link>
            <span className="text-white text-3xl font-normal">
              {" "}
              или посмотреть в зеркало на сайте
            </span>
          </div>
        </div>
        <img className="w-[287px] h-[216px] rounded-[10px]" src="/meme.jpeg" />
      </div>
      <ButtonComponent />
    </main>
  );
}
