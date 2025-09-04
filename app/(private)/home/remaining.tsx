"use client";
import {
  RemainingBudget as RemainingBudgetTypes,
  HomeTransactionEntry,
} from "@/components/Types";
import { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function RemainingBudget({
  budgets,
}: {
  budgets: RemainingBudgetTypes[];
}) {
  const [isSplit, setIsSplit] = useState(false);
  const [budgetData, setBudgetData] = useState<HomeTransactionEntry[] | number>(0);

  function calculateTotals(data: RemainingBudgetTypes[], isSplit: boolean) {
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

      setBudgetData(result);
    } else {
      // sum total
      const total = data.reduce((sum, curr) => sum + curr.amount, 0);
      setBudgetData(total);
    }
  }

  useEffect(() => {
    calculateTotals(budgets, isSplit);
  }, [budgets, isSplit]);

  return (
    <>
      <span className="text-xl font-medium">Remaining Budget</span>
      <div
        className="cursor-pointer flex gap-1"
        onClick={() => setIsSplit((prev) => !prev)}
      >
        {Array.isArray(budgetData) ? (
          <Swiper
            modules={[Navigation]}
            spaceBetween={0}
            loop={false}
            navigation
            slidesPerView={"auto"}
            className="w-full"
            >
            {budgetData.map((data, index) => (
              <SwiperSlide key={index} className="!w-fit !mr-5">
                <div className="flex flex-col w-fit">
                  <span className="text-xl">{data.category}</span>
                  <span className="font-bold text-2xl">${data.amount}</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <span className="font-bold text-5xl ">${budgetData}</span>
        )}
      </div>
    </>
  );
}
