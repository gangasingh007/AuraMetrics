
import { getAppointments } from "@/lib/actions/appointments";
import { useQuery } from "@tanstack/react-query";


export default function useAppointments() {
    const result = useQuery({
        queryKey: ['appointments'],
        queryFn:getAppointments,
    });
    return result;
}