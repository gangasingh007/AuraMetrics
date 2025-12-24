import { Badge, EditIcon, MailIcon, PhoneIcon, Plus, Stethoscope } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Button } from "../ui/button"
import Image from "next/image"
import { useState } from "react";
import AddDoctorModal from "./AddDoctorModal";
import useDoctors from "@/hooks/use-doctors";


function DocManagement() {
    const [isAddDoctorModalOpen, setIsAddDoctorModalOpen] = useState(false);
    const handleAddDoctor = () => {
    setIsAddDoctorModalOpen(true);
  };


   const { data: doctors = [], isLoading } = useDoctors();

  return (
    <Card >
        <CardHeader className="flex justify-between items-center gap-3 mb-4">
           <div>
             <CardTitle className="flex items-center gap-2 text-2xl">
                <Stethoscope className="w-6 h-6 text-primary" />
                <span className="font-bold text-white">Doctors Management</span>
            </CardTitle>
            <CardDescription>Manage and oversee all registered doctors in your practice</CardDescription>
           </div>
           <Button onClick={handleAddDoctor} className="flex justify-between items-center align-middle bg-primary hover:bg-primary/90 text-black">
               <Plus  />
                <span>Add Doctor</span>
            </Button>
        </CardHeader>
        {/* Add your doctors management content here */}
         <CardContent>
          <div className="space-y-4">
            {doctors.map((doctor) => (
              <div
                key={doctor.id}
                className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border/50"
              >
                <div className="flex items-center gap-4">
                  <Image
                    src={doctor.imageUrl || "/placeholder-doctor.png"}
                    alt={doctor.name}
                    width={48}
                    height={48}
                    className="size-12 rounded-full object-cover ring-2 ring-background"
                  />

                  <div>
                    <div className="font-semibold">{doctor.name}</div>
                    <div className="text-sm text-muted-foreground">
                      <span className="ml-2 px-2 py-0.5 bg-muted rounded text-xs">
                        {doctor.gender === "MALE" ? "Male" : "Female"}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-1">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <MailIcon className="h-3 w-3" />
                        {doctor.email}
                      </div>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <PhoneIcon className="h-3 w-3" />
                        {doctor.phone}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-8 px-3"
                    // onClick={() => handleEditDoctor(doctor)}
                  >
                    <EditIcon className="size-4 mr-1" />
                    Edit
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>

        <AddDoctorModal isOpen={isAddDoctorModalOpen} onClose={() => setIsAddDoctorModalOpen(false)} />

    </Card>
  )
}

export default DocManagement