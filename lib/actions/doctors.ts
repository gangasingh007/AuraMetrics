import prisma from "../prisma"

export async function getDoctors() {
    const doctors = prisma.doctor.findMany({
        include: {
            _count : {select:{appointments:true}}
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    console.log(doctors)
    return doctors
}
