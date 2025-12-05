import { NextResponse } from 'next/server';
import type { ServiceCard } from '@/types/service';

export async function GET() {
  const data: ServiceCard[] = [
    { title: '해외 개발자 원격 채용', image: '/images/ic_code.png' },
    { title: '외국인 원격 채용 (비개발)', image: '/images/ic_user.png' },
    { title: '한국어 가능 외국인 채용', image: '/images/ic_kor.png' },
    { title: '해외 개발자 활용 서비스', image: '/images/ic_gear.png' },
  ];

  return NextResponse.json(data);
}
