import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, GlobalState } from ".";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<GlobalState>();
