import { Slice } from '@/app/lib/Store/Slice';
import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
  reducer: {
    user: Slice.reducer,
  },
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
