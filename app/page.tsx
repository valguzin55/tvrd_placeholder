"use client";
import ButtonComponent from "@/components/button";
import WebcamImpl from "@/components/webcam";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex w-screen h-screen items-center justify-center relative">
      <WebcamImpl />
      <div className="flex absolute xl:top-[100px] top-2 xl:flex-row flex-col gap-5">
        <div className="sm:w-[739px]  sm:h-[216px] h-32 sm:relative ">
          <div className="sm:w-[739px] w-[320px] sm:h-[216px] h-[120px] left-0 top-0 absolute bg-black bg-opacity-50 rounded-[40px] backdrop-blur-[50px]">
            <div className="sm:w-[601px] sm:left-[69px] sm:top-[54px] sm:p-0 p-5 absolute text-center">
              <span className="text-white sm:text-3xl text-sm font-normal">
                Тут скоро будет пушечка, а пока можешь перейти на наш{" "}
              </span>
              <Link
                href={"https://www.instagram.com/tvrd.agency/"}
                target="_blank"
              >
                <span
                  className="text-white sm:text-3xl text-sm font-normal underline"
                  onClick={() => {}}
                >
                  инстаграм
                </span>
              </Link>
              <span className="text-white sm:text-3xl text-sm font-normal">
                {" "}
                или посмотреть в зеркало на сайте
              </span>
            </div>
          </div>
        </div>
        <img
          className="flex justify-center w-[287px] h-[216px] rounded-[10px]"
          src="/meme.jpeg"
        />
      </div>
      <ButtonComponent />
    </main>
  );
}
