import axios, { AxiosError } from 'axios';
import { notify } from '../utils';
import useAuth from './useAuth';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

export type Comment = {
  title: string;
  comment: string;
};

const getComments = (id) => {
  return axios.get(`/api/v1/comments/${id as number}`);
};
const storeAComment = ({ id, ...payload }) => {
  return axios.post(`/api/v1/comments/${id as number}/save`, payload, {
    withCredentials: false,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  });
};

const useComments = () => {
  const queryClient = useQueryClient();
  const { user } = useAuth();
  const { data: comments, isLoading } = useQuery({
    queryKey: ['comments'],
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
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ['comments'] });
      notify('Comment Added Successfully!', { type: 'success' });
    },
  });
  return { comments, isLoading, addNewComment, id: user?.id };
};

export default useComments;
