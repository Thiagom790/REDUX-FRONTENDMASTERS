import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchDogFacts } from '../utilities';

export const fetchDogFactsFromApi = createAsyncThunk(
  'facts/fetchFacts',
  async (count) => {
    const facts = await fetchDogFacts(count);
    return facts;
  }
);

export const dogSlice = createSlice({
  name: 'facts',
  initialState: [],
  extraReducers: {
    [fetchDogFactsFromApi.fulfilled]: (state, action) => {
      /* 
        Nessa situação eu preciso retornar o estado por causa de um problema com o immer
        o meu estado é um draft state ai seu eu modificar ele o immer ele aplica as modificações
        agora se eu trocar ele como fiz abaixo ele abaixo o immer não reconhece as mudanças
      */
      state = action.payload;
      return state;
    }
  }
});
