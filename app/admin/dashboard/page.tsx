"use client"

import { useUser } from "@clerk/nextjs";
import { SettingsIcon } from "lucide-react"
import AdminStats from "@/components/Admin/AdminStats";
import useDoctors from "@/hooks/use-doctors";
 
 function DashBoardPage() {
  const user = useUser().user;
  const { data: doctors = [], isLoading: doctorsLoading } = useDoctors();
  const {data: appointments = [], isLoading: appointmentsLoading} = useDoctors(); 

  const stats = {
    totalDoctors: doctors.length,
    activeDoctors: doctors.filter((doc: any) => doc.isActive).length,
    totalAppointments: appointments.length,
    completedAppointments: appointments.filter((appt: any) => appt.status === 'completed').length,
  }
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
      {/* Welcome back name */}
        <div className="mb-12 flex items-center justify-between bg-gradient-to-br from-primary/10 via-primary/5 to-background rounded-3xl p-8 border border-primary/20">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-primary">Admin Dashboard</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-2">
                Welcome back, {user?.firstName || "Admin"}!
              </h1>
              <p className="text-muted-foreground">
                Manage doctors, oversee appointments, and monitor your dental practice performance.
              </p>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center">
              <SettingsIcon className="w-16 h-16 text-primary" />
            </div>
          </div>
        </div>
        <AdminStats totalDoctors={stats.totalDoctors} totalAppointments={stats.totalAppointments} activeDoctors={stats.activeDoctors} completedAppointments={stats.completedAppointments}/>
    </div>
  )
}

export default DashBoardPage
