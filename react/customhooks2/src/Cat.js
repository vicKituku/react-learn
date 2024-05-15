import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { useGetCat } from "./useGetCat";

export const Cat = () => {
  //   const { data: catData } = useQuery({
  //     queryKey: ["cat"],
  //     queryFn: async () => {
  //       return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  //     },
  //   });
  const { data, isCatLoading, refetchData } = useGetCat();
  if (isCatLoading) {
    <p>Loading fact...</p>;
  }
  return (
    <div>
      <button onClick={refetchData}>new fact</button>
      <h1>{data?.fact}</h1>
    </div>
  );
};
