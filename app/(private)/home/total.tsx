"use client";
import { TotalExpenses } from "@/components/Types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useState, useEffect } from "react";
import { HomeTransactionEntry } from "@/components/Types";

export default function TotalSpent({
  transactions,
}: {
  transactions: TotalExpenses[];
}) {
  const [isSplit, setIsSplit] = useState(false);
  const [spentData, setSpentData] = useState<HomeTransactionEntry[] | number>(0);

  function calculateTotals(data: TotalExpenses[], isSplit: boolean) {
    if (isSplit) {
      const result: HomeTransactionEntry[] = data.reduce<HomeTransactionEntry[]>((acc, curr) => {
        const found = acc.find((item) => item.category === curr.category.text);
        if (found) {
          found.amount += curr.amount;
        } else {
          acc.push({
            category: curr.category.text ?? "Others",
            amount: curr.amount,
          });
        }
        return acc;
      }, []);

      setSpentData(result);
    } else {
      // sum total
      const total = data.reduce((sum, curr) => sum + curr.amount, 0);
      setSpentData(total);
    }
  }

  useEffect(() => {
    calculateTotals(transactions, isSplit);
  }, [isSplit, transactions]);

  return (
    <>
      <span className="text-xl font-medium">Total Spent this Month</span>
      <div
        className="cursor-pointer flex gap-1"
        onClick={() => setIsSplit((prev) => !prev)}
      >
        {Array.isArray(spentData) ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            loop={false}
            navigation
            slidesPerView={"auto"}
            className="w-full"
          >
            {spentData.map((data, index) => (
              <SwiperSlide key={index} className="!w-fit !mr-5">
                <div className="flex flex-col w-fit">
                  <span className="text-xl">{data.category}</span>
                  <span className="font-bold text-2xl">${data.amount}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span className="font-bold text-5xl ">${spentData}</span>
        )}
      </div>
    </>
  );
}
