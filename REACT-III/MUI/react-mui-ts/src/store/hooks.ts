import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, Store } from ".";

// useAppDispatch - é utilizado para modificar o estado global
// setState
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

// useAppSelector - é utilizado para acessar/ler o valor do estado global
// state
export const useAppSelector = useSelector.withTypes<Store>();
