import { useQuery } from "@tanstack/react-query";
import { api } from "./client";

/**
 * 사용자 데이터 타입 예시
 */
export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

/**
 * 쿼리 키 팩토리 패턴
 * React Query 캐싱 및 무효화를 위한 일관된 키 구조
 */
export const queryKeys = {
  users: {
    all: () => ["users"] as const,
    detail: (id: string) => ["users", id] as const,
    list: (filters?: Record<string, unknown>) =>
      ["users", "list", filters] as const,
  },
  posts: {
    all: () => ["posts"] as const,
    detail: (id: string) => ["posts", id] as const,
    list: (filters?: Record<string, unknown>) =>
      ["posts", "list", filters] as const,
  },
};

/**
 * 모든 사용자 목록 조회
 */
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users.all(),
    queryFn: async () => {
      const response = await api.get("users").json<User[]>();
      return response;
    },
  });
}

/**
 * 특정 사용자 조회
 */
export function useUser(id: string) {
  return useQuery({
    queryKey: queryKeys.users.detail(id),
    queryFn: async () => {
      const response = await api.get(`users/${id}`).json<User>();
      return response;
    },
    enabled: !!id, // id가 있을 때만 쿼리 실행
  });
}

/**
 * 필터링된 사용자 목록 조회 예시
 */
export function useUsersList(filters?: { role?: string; status?: string }) {
  return useQuery({
    queryKey: queryKeys.users.list(filters),
    queryFn: async () => {
      const searchParams = new URLSearchParams(
        filters as Record<string, string>
      );
      const response = await api
        .get(`users?${searchParams.toString()}`)
        .json<User[]>();
      return response;
    },
  });
}
