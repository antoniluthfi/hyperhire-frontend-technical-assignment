import { NextResponse } from "next/server";
import type { Candidate } from "@/types/candidate";

export async function GET() {
  const data: Candidate[] = [
    {
      name: "Abhishek Gupta",
      role: "마케팅",
      exp: "2y+",
      avatar: "/images/img_woman.png",
      tags: [
        "마케팅 콘텐츠 제작",
        "인스타그램 관리",
        "트위터 관리",
        "블로그 글 작성",
      ],
    },
    {
      name: "Abhishek Gupta",
      role: "마케팅",
      exp: "2y+",
      avatar: "/images/img_woman.png",
      tags: ["인스타그램 관리", "블로그 글 작성"],
    },
    {
      name: "Abhishek Gupta",
      role: "마케팅",
      exp: "2y+",
      avatar: "/images/img_woman.png",
      tags: ["인사관리", "인스타그램 관리"],
    },
  ];

  return NextResponse.json(data);
}
