import { NextResponse } from 'next/server';
import type { ContactItem } from '@/types/contact';

export async function GET() {
  const data: ContactItem[] = [
    {
      title: '상호명',
      value: '하이퍼하이어',
      value2: 'Hyperhire India Private Limited',
    },
    { title: '대표 CEO', value: '김주현', value2: 'Juhyun Kim' },
    {
      title: '사업자등록번호 CIN',
      value: '427-86-01187',
      value2: 'U74110DL2016PTC290812',
    },
    {
      title: '주소 ADDRESS',
      value: '서울특별시 강남대로 479, 지하 1층 238호',
      value2: 'D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India',
    },
  ];

  return NextResponse.json(data);
}
