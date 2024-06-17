import { Bat } from "@/types/models/Bat";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getBats = async () => {
  const data = await axios.get<Bat[]>("/api/bats");
  return data;
};

export const useBats = () => {
  const query = useQuery({
    queryKey: ["bats"],
    queryFn: getBats,
  });

  return { query };
};
