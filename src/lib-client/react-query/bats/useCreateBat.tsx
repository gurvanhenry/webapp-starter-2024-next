import { Bat } from "@/types/models/Bat";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const postBat = async ({ text }: { text: string }) => {
  const data = await axios.post("/api/bats", { text });
  return data;
};

export const useCreateBat = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postBat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["bats"] });
    },
  });

  return { mutation };
};
