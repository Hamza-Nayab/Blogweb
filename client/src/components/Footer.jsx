import { Footer } from "flowbite-react";
import React from "react";

export default function Footercomp() {
  return (
    <div>
      <Footer container className="border border-t-8 border-teal-500">
        <div className="">
          <div className="">
            <div className="">
              <Link
                to={"/"}
                className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
              >
                <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded">
                  Hamza's
                </span>
                Blog
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6"></div>
          </div>
        </div>
      </Footer>
    </div>
  );
}
