import { CadrState } from '@/app/Types/Cadr';
import { createSlice } from '@reduxjs/toolkit';
import { getCardById, getCards } from '@/app/lib/Api/api';

const initialState: CadrState = {
  data: [],
  card: null,
};

export const Slice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCards.fulfilled, (state, action) => {
      state.data = action.payload || [];
    });

    builder.addCase(getCardById.fulfilled, (state, action) => {
      state.card = action.payload || null;
    });
  },
});

export default Slice.reducer;
