"use client";

import BannerCard from "@/components/molecules/card/BannerCard";
import PostCard from "@/components/molecules/card/PostCard";
import { useGlobalContext } from "@/context/store";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  // const [value, setValue] = useState({});

  // useEffect(() => {
  //   const res = fetch("/api/hello");

  //   res
  //     .then((data) => {
  //       data.json().then((res) => {
  //         setValue(res);
  //       });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  // return <main>{JSON.stringify(value)}</main>;
  const router = useRouter();
  const s = "lu";
  useEffect(() => {
    if (!window.localStorage.getItem(s)) {
      router.push("login");
    }
  }, []);

  return (
    <main className="container mx-auto">
      <section>
        <BannerCard />
      </section>
      <section className="my-20">
        <h3 className="text-base-content font-bold text-2xl mb-8 font-work leading-8">
          Latest post
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-32 lg:grid-cols-3 gap-5">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item: number) => (
            <PostCard key={item} />
          ))}
        </div>

        <div className="flex items-center justify-center w-full mt-8">
          <Link
            href={`/blog`}
            className="btn btn-outline btn-secondary text-secondary-content/60 font-work font-medium text-base"
          >
            View All Post
          </Link>
        </div>
      </section>
    </main>
  );
}
