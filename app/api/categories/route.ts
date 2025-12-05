import { NextResponse } from "next/server";
import type { Category } from "@/types/category";

export async function GET() {
  const data: Category[] = [
    { title: "해외 마케팅", image: "/images/ic_chart.png" },
    { title: "퍼블리셔", image: "/images/ic_image.png" },
    { title: "캐드원(제도사)", image: "/images/ic_box.png" },
    { title: "해외 세일즈", image: "/images/ic_star.png" },
    { title: "해외 CS", image: "/images/ic_phone.png" },
  ];

  return NextResponse.json(data);
}
