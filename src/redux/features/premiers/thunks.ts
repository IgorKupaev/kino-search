import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl, fetchData } from "../../api";

import type { TErrorApi, TFilm, TImagesData } from "@/types";

export const fetchPremiers = createAsyncThunk<TFilm[], undefined, { rejectValue: TErrorApi }>(
  "fetchPremiers",
  async (_, { rejectWithValue }) => {
    try {
      return await fetchData(`premiers`);
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);

export const fetchWallpapers = createAsyncThunk<{ data: TImagesData[] }[], number[], { rejectValue: TErrorApi }>(
  "fetchWallpapers",
  async (ids) => {
    const result = await Promise.all(ids.map((id) => {
      return axios.get(`${baseUrl}/wallpapers?filmId=${id}`);
    }));

    return JSON.parse(JSON.stringify(result));
  }
);
