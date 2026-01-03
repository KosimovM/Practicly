
import { getCardById } from '@/app/lib/Api/api';
import { AppDispatch, RootState } from '@/app/lib/Store/store';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

interface CardPageProps {
  id: number;
}

const Cardpage = ({ id }: CardPageProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { card } = useSelector((state: RootState) => state.user);

  useEffect(() => {
    dispatch(getCardById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h1>{card.title}</h1>
      <p>{card.description}</p>
    </div>
  );
};

export default Cardpage;
