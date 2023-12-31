import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../prisma/client";

export async function GET(request) {
  const res = await prisma.teacher.findMany();
  return NextResponse.json({ res });
}

export async function POST(request, response) {
  const {
    nationalId,
    title,
    name,
    surname,
    dateOfBirth,
    teacherNumber,
    salary,
  } = await request.json();

  const new_user = await prisma.teacher.create({
    data: {
      nationalId,
      title,
      name,
      surname,
      dateOfBirth,
      teacherNumber,
      salary,
    },
  });

  if (!new_user) {
    return NextResponse.json({ message: "An error occured" }, { status: 400});
  }

  return NextResponse.json({ new_user });
}
