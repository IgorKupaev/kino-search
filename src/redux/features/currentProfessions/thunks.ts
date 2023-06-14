import { createAsyncThunk } from "@reduxjs/toolkit";

import { fetchData } from "../helper";

import type { TErrorApi, TProfession } from "@/types";

export const fetchProfessions = createAsyncThunk<TProfession[], string | number, { rejectValue: TErrorApi }>(
  "fetchProfessions",
  async (id, { rejectWithValue }) => {
    try {
      return await fetchData(`professions?filmId=${id}`);
    } catch (e) {
      return rejectWithValue(e as TErrorApi);
    }
  }
);