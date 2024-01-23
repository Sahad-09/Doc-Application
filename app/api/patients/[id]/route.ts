// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prismadb";

// export const GET = async (
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const { id } = params;

//     const patient = await prisma.patient.findUnique({
//       where: {
//         id,
//       },
//     });

//     if (!patient) {
//       return NextResponse.json(
//         { message: "Patient not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(patient);
//   } catch (err) {
//     return NextResponse.json({ message: "GET Error", err }, { status: 500 });
//   }
// };

// export const PATCH = async (
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const body = await request.json();
//     const { name, age, sex, contact } = body;

//     const { id } = params;

//     const updatePatient = await prisma.patient.update({
//       where: {
//         id,
//       },
//       data: {
//         name,
//         age,
//         sex,
//         contact,
//       },
//     });

//     if (!updatePatient) {
//       return NextResponse.json(
//         { message: "Patient not found" },
//         { status: 404 }
//       );
//     }

//     return NextResponse.json(updatePatient);
//   } catch (err) {
//     return NextResponse.json({ message: "Update Error", err }, { status: 500 });
//   }
// };

// export const DELETE = async (
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const { id } = params;

//     await prisma.patient.delete({
//       where: {
//         id,
//       },
//     });

//     return NextResponse.json("Patient has been deleted");
//   } catch (err) {
//     return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
//   }
// };

// route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prismadb";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    const patient = await prisma.patient.findUnique({
      where: {
        id,
      },
      include: {
        Details: true, // Include the Details relationship
      },
    });

    if (!patient) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(patient);
  } catch (err) {
    return NextResponse.json({ message: "GET Error", err }, { status: 500 });
  }
};

export const PATCH = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const body = await request.json();
    const { name, age, sex, contact, details } = body; // Extract details from the request body

    const { id } = params;

    const updatePatient = await prisma.patient.update({
      where: {
        id,
      },
      data: {
        name,
        age,
        sex,
        contact,
        Details: {
          update: details, // Update Details information
        },
      },
      include: {
        Details: true,
      },
    });

    if (!updatePatient) {
      return NextResponse.json(
        { message: "Patient not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(updatePatient);
  } catch (err) {
    return NextResponse.json({ message: "Update Error", err }, { status: 500 });
  }
};

// export const DELETE = async (
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) => {
//   try {
//     const { id } = params;

//     await prisma.patient.delete({
//       where: {
//         id,
//       },
//     });

//     return NextResponse.json("Patient has been deleted");
//   } catch (err) {
//     return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
//   }
// };

export const DELETE = async (
  request: NextRequest,
  { params }: { params: { id: string } }
) => {
  try {
    const { id } = params;

    // Find the patient details associated with the patient ID
    const patientDetails = await prisma.details.findMany({
      where: {
        userId: id,
      },
    });

    // Delete each patient detail
    for (const detail of patientDetails) {
      await prisma.details.delete({
        where: {
          id: detail.id,
        },
      });
    }

    // Finally, delete the patient
    await prisma.patient.delete({
      where: {
        id,
      },
    });

    return NextResponse.json(
      "Patient and associated details have been deleted"
    );
  } catch (err) {
    return NextResponse.json({ message: "DELETE Error", err }, { status: 500 });
  }
};
