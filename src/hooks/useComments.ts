import axios, { AxiosError } from 'axios';
import { notify } from '../utils';
import useAuth from './useAuth';
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query';

export type Comment = {
  title: string;
  comment: string;
};

const getComments = (id) => {
  return axios.get(
    `${import.meta.env.VITE_BASE_URL as string}/comments/${id as number}`
  );
};
const storeAComment = ({ id, ...payload }) => {
  return axios.post(
    `${import.meta.env.VITE_BASE_URL as string}/comments/${id as number}/save`,
    payload,
    {
      withCredentials: false,
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    }
  );
};

const useComments = () => {
  const queryClient = new QueryClient();
  const { user } = useAuth();
  const { data: comments, isLoading } = useQuery({
    queryKey: ['Comments'],
    queryFn: () => getComments(user?.id),
    select: ({ data }: { data: Comment[] }) => data,
    enabled: Boolean(user?.id),
  });
  const addNewComment = useMutation({
    mutationFn: storeAComment,
    onError: (error) => {
      if (error instanceof AxiosError) {
        notify(error.response.data as string, {
          type: 'error',
          duration: 5000,
        });
      }
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['Comments'] });
      notify('Comment Added Successfully!', { type: 'success' });
    },
  });
  return { comments, isLoading, addNewComment, id: user?.id };
};

export default useComments;
