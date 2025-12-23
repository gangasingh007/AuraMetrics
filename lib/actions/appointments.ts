import prisma from "../prisma"


export async function getAppointments() {
    const appointments = prisma.appointment.findMany({
        include: {
            user: true,
            doctor: true
        },
        orderBy: {
            createdAt: 'desc'
        }
    })
    return appointments
}