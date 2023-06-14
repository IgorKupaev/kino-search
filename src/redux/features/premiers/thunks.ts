import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl, fetchData } from "../helper";
import type { TErrorApi, TFilm } from "@/types";

export const fetchPremiers = createAsyncThunk<TFilm[], undefined, { rejectValue: TErrorApi }>(
  "fetchPremiers",
  async (_, { rejectWithValue }) => {
    try {
      let result;
      await fetchData(`premiers`).then((data) => {
        result = data;
      });
      return result as unknown as TFilm[];
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchWallpapers = createAsyncThunk<string[], number[], { rejectValue: TErrorApi }>(
  "fetchWallpapers",
  async (ids) => {
    const promises: Promise<string>[] = [];

    ids.forEach((id) => {
      const promise: Promise<string> = axios.get(`${baseUrl}/wallpapers?filmId=${id}`);
      promises.push(promise);
    });
    let result;

    await Promise.all(promises)
      .then((res) => {
        result = res;
      })
      .catch((e) => {
        result = e;
      });

    return JSON.parse(JSON.stringify(result));
  }
);
