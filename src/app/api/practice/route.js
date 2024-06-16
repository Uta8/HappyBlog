import { NextRequest, NextResponse } from "next/server";

/**
 * @param {NextRequest} message
 */
export async function POST(message) {
  const textNew = await message.json();
  const textNow = JSON.stringify(textNew);
  return new NextResponse(textNow);
}
