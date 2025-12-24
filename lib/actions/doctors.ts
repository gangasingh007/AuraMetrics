"use server"

import { Gender } from "@/app/generated/prisma";
import prisma from "../prisma"
import { revalidatePath } from "next/cache";


export async function getDoctors() {
    const doctors = prisma.doctor.findMany({
        orderBy: {
            createdAt: 'desc'
        }
    })
    console.log(doctors)
    return doctors
}

interface CreateDoctorInput {
  name: string;
  email: string;
  phone: string;
  specialty: string;
  gender: Gender;
}

export async function createDoctor(input: CreateDoctorInput) {
  try {
    if (!input.name || !input.email) throw new Error("Name and email are required");

    const doctor = await prisma.doctor.create({
      data: {
        ...input,
        imageUrl: "https://www.freepik.com/premium-vector/avatar-bearded-doctor-doctor-with-stethoscope-vector-illustrationxa_34466364.htm",
      },
    });

    revalidatePath("/admin");

    return doctor;
  } catch (error: any) {
    console.error("Error creating doctor:", error);

    // handle unique constraint violation (email already exists)
    if (error?.code === "P2002") {
      throw new Error("A doctor with this email already exists");
    }

    throw new Error("Failed to create doctor");
  }
}