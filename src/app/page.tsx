"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/reduxStore";

import HomeBanner from "@/components/AppComponents/HomeBanner";
import HomeBanner2 from "@/components/AppComponents/HomeBanner2";
import HomeBanner3 from "@/components/AppComponents/HomeBanner3";
import HomeBanner4 from "@/components/AppComponents/HomeBanner4";
import OurPrograms from "@/components/AppComponents/OurPrograms";
import { fetchCustomerServices } from "./api/service";

export default function Home() {
  const dispatch = useDispatch<AppDispatch>();
  console.log("1111")
  useEffect(() => {
    dispatch(fetchCustomerServices());
  }, [dispatch]);

  return (
    <>
      <HomeBanner />
      <OurPrograms />
      <HomeBanner2 />
      <HomeBanner3 />
      <HomeBanner4 />
    </>
  );
}
