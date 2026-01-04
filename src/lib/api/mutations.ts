import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "./client";
import { queryKeys, type User } from "./queries";
import { toast } from "sonner";

/**
 * 사용자 생성 입력 타입
 */
export interface CreateUserInput {
  name: string;
  email: string;
  password: string;
}

/**
 * 사용자 업데이트 입력 타입
 */
export interface UpdateUserInput {
  name?: string;
  email?: string;
}

/**
 * 사용자 생성 뮤테이션
 */
export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: CreateUserInput) => {
      const response = await api.post("users", { json: data }).json<User>();
      return response;
    },
    onSuccess: () => {
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all() });
      toast.success("사용자가 생성되었습니다");
    },
    onError: (error: Error) => {
      toast.error(error.message || "사용자 생성에 실패했습니다");
    },
  });
}

/**
 * 사용자 업데이트 뮤테이션
 */
export function useUpdateUser(id: string) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: UpdateUserInput) => {
      const response = await api
        .patch(`users/${id}`, { json: data })
        .json<User>();
      return response;
    },
    onSuccess: (data) => {
      // 특정 사용자 캐시 업데이트
      queryClient.setQueryData(queryKeys.users.detail(id), data);
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all() });
      toast.success("사용자가 업데이트되었습니다");
    },
    onError: (error: Error) => {
      toast.error(error.message || "사용자 업데이트에 실패했습니다");
    },
  });
}

/**
 * 사용자 삭제 뮤테이션
 */
export function useDeleteUser() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      await api.delete(`users/${id}`);
      return id;
    },
    onSuccess: () => {
      // 사용자 목록 캐시 무효화
      queryClient.invalidateQueries({ queryKey: queryKeys.users.all() });
      toast.success("사용자가 삭제되었습니다");
    },
    onError: (error: Error) => {
      toast.error(error.message || "사용자 삭제에 실패했습니다");
    },
  });
}
