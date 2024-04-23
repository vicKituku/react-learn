import { useContext } from "react";
import { AppContext } from "../App";
import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
import { Form } from "../components/Form";
export const Home = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["cat"],
    queryFn: () => {
      return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    },
  });
  // const { data } = useQuery(["cat"], () => {
  //   return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  // });
  const { username } = useContext(AppContext);
  // if ({ isLoading }) {
  //   return <p>Loading...</p>;
  // }
  return (
    <div>
      {/* <h1>Hello {username}</h1>
      <p>{data?.fact}</p> */}
    </div>
  );
};
