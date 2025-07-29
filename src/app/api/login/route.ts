import axios from '@/lib/axios';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();

  const response = await axios(`/api/v1/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
  });

  const rawCookie = response.headers['set-cookie'];
  const res = NextResponse.json(response.data, { status: response.status });

  if (rawCookie) {
    res.headers.set(
      'Set-Cookie',
      Array.isArray(rawCookie)
        ? rawCookie.join(',').replace(/Domain=[^;]+;/g, '')
        : (rawCookie as string).replace(/Domain=[^;]+;/, '')
    );
  }

  return res;
}