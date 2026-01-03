import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const Api = 'https://6889b24b4c55d5c739532527.mockapi.io/Card';

export const getCards = createAsyncThunk('cards/get', async () => {
  const res = await axios.get(Api);
  return res.data;
});

export const deleteCard = createAsyncThunk(
  'cards/delete',
  async (id: number, ) => {
    await axios.delete(`${Api}/${id}`);
    return id;
  }
);

export const postCard = createAsyncThunk(
  'cards/post',
  async (data: { name: string; description: string }) => {
    const res = await axios.post(Api, data);
    return res.data;
  }
);

export const getCardById = createAsyncThunk(
  'cards/getById',
  async (id: number) => {
    const res = await axios.get(`${Api}/${id}`);
    return res.data;
  });

export const updateCard = createAsyncThunk(
  'cards/put',
  async (data: { id: number; name: string; description: string }) => {
    const res = await axios.put(`${Api}/${data.id}`, {
      name: data.name,
      description: data.description,
    });
    return res.data;
  }
);
