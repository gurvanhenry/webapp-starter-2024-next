import { Bat } from "@/models/Bat";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";

const URL = ""; // request on himself :-)

const getBats = async () => {
  const data = await axios.get<Bat[]>("/api/bats");
  return data;
};

export const useBats = () => {
  const queryGetBats = useQuery({
    queryKey: ["bats"],
    queryFn: getBats,
  });

  return {
    queryGetBats,
  };
};

// const queryClient = useQueryClient();

// const postBat = async ({ text }: { text: string }) => {
//   const data = await axios.post(
//     `${URL}/bat`,
//     { text },
//     { headers: { "Content-Type": "application/json" } }
//   );
//   return data;
// };

// const deleteBat = async ({ id }: { id: string }) => {
//   const data = await axios.delete(`${URL}/bat/${id}`);
//   return data;
// };

// const patchBat = async ({ id, text }: { id: string; text: string }) => {
//   const data = await axios.patch(
//     `${URL}/bat/${id}`,
//     { text },
//     { headers: { "Content-Type": "application/json" } }
//   );
//   return data;
// };

//
// const mutationAddBat = useMutation({
//   mutationFn: postBat,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["bats"] });
//   },
// });

// const mutationDeleteBat = useMutation({
//   mutationFn: deleteBat,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["bats"] });
//   },
// });

// const mutationEditBat = useMutation({
//   mutationFn: patchBat,
//   onSuccess: () => {
//     queryClient.invalidateQueries({ queryKey: ["bats"] });
//   },
// });
