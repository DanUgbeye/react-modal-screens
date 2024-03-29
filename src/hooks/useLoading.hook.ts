import { useContext } from "react";
import { LoadingContext } from "../context/loading.context";

export default function useLoading() {
  return useContext(LoadingContext);
}