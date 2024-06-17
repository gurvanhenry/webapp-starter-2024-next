import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const deleteBat = async ({ id }: { id: string }) => {
  const data = await axios.delete(`/api/bats/${id}`);
  return data;
};

export const useDeleteBat = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: deleteBat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bats"] });
    },
  });

  return { mutation };
};
