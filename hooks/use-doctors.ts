import { getDoctors } from "@/lib/actions/doctors";
import { useQuery } from "@tanstack/react-query";


export default function useDoctors() {
    const result = useQuery({
        queryKey: ['doctors'],
        queryFn:getDoctors,
    });
    return result;
}