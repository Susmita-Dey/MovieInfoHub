import { opensans } from "@/context/fonts";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${opensans.className} mt-5`}>
      <div className="container mx-auto sm:px-4 md:px-6 lg:px-8 max-w-[85rem]">
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <p className="text-base text-slate-100 text-center lg:order-2 md:order-2 order-1">
            <span className="flex flex-row justify-center">
              Built with 💖 using
              <Link
                href="https://nextjs.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex text-red-500 mx-2 -mt-3 font-medium"
              >
                <svg
                  height="1509"
                  preserveAspectRatio="xMidYMid"
                  className=" w-12 h-12 fill-white"
                  viewBox="0 0 512 308.883"
                  width="2500"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="m120.81 80.561h96.568v7.676h-87.716v57.767h82.486v7.675h-82.486v63.423h88.722v7.675h-97.574zm105.22 0h10.26l45.467 63.423 46.473-63.424 63.211-80.56-103.85 150.65 53.515 74.127h-10.663l-48.686-67.462-48.888 67.462h-10.461l53.917-74.128zm118.898 7.676v-7.677h110.048v7.676h-50.699v136.54h-8.852v-136.539zm-344.928-7.677h11.065l152.58 228.323-63.053-84.107-91.338-133.308-.402 133.31h-8.852zm454.084 134.224c-1.809 0-3.165-1.4-3.165-3.212 0-1.81 1.356-3.212 3.165-3.212 1.83 0 3.165 1.401 3.165 3.212s-1.335 3.212-3.165 3.212zm8.698-8.45h4.737c.064 2.565 1.937 4.29 4.693 4.29 3.079 0 4.823-1.854 4.823-5.325v-21.99h4.823v22.011c0 6.252-3.617 9.853-9.603 9.853-5.62 0-9.473-3.493-9.473-8.84zm25.384-.28h4.78c.409 2.953 3.294 4.828 7.45 4.828 3.875 0 6.717-2.005 6.717-4.764 0-2.371-1.809-3.794-5.921-4.764l-4.005-.97c-5.62-1.316-8.181-4.032-8.181-8.602 0-5.54 4.521-9.227 11.303-9.227 6.308 0 10.916 3.686 11.196 8.925h-4.694c-.452-2.867-2.95-4.657-6.567-4.657-3.81 0-6.35 1.833-6.35 4.635 0 2.22 1.635 3.493 5.683 4.441l3.423.841c6.373 1.488 9 4.075 9 8.753 0 5.95-4.607 9.68-11.97 9.68-6.89 0-11.52-3.558-11.864-9.12z" />
                </svg>
              </Link>
              and
              <Link
                href="https://supabase.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex font-medium text-rose-500 mx-1"
              >
                <Image
                  src={"/supabase-logo-icon.svg"}
                  width={0}
                  height={0}
                  className="w-8 h-8"
                  alt="Supabase logo"
                />
              </Link>
            </span>
            <span className="flex flex-row justify-center md:justify-start">
              &copy; 2023{" "}
              <Link
                href="https://susmita-dey.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-medium"
              >
                Susmita Dey
              </Link>
              . All rights reserved.
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
