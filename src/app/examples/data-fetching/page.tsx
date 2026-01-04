"use client";

import { PageHeader } from "@/components/common/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { LoadingSpinner } from "@/components/feedback/loading-spinner";
import { EmptyState } from "@/components/common/empty-state";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { Trash2, Users } from "lucide-react";

interface User {
  id: number;
  name: string;
  email: string;
  username: string;
}

export default function DataFetchingPage() {
  const queryClient = useQueryClient();

  // useQuery 예제
  const {
    data: users,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) throw new Error("Failed to fetch users");
      return response.json() as Promise<User[]>;
    },
  });

  // useMutation 예제
  const deleteUserMutation = useMutation({
    mutationFn: async (userId: number) => {
      // JSONPlaceholder는 실제로 삭제하지 않지만 API 시뮬레이션
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { method: "DELETE" }
      );
      if (!response.ok) throw new Error("Failed to delete user");
      return userId;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      toast.success("사용자가 삭제되었습니다 (시뮬레이션)");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return (
    <div className="space-y-8">
      <PageHeader
        title="데이터 페칭 예제"
        description="React Query를 활용한 데이터 조회, 캐싱, 뮤테이션 시연"
      />

      <div className="grid gap-6">
        {/* 상태 표시 */}
        <Card>
          <CardHeader>
            <CardTitle>현재 상태</CardTitle>
            <CardDescription>React Query의 로딩/에러 상태 관리</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Badge variant={isLoading ? "default" : "secondary"}>
              {isLoading ? "로딩 중" : "로딩 완료"}
            </Badge>
            <Badge variant={isError ? "destructive" : "secondary"}>
              {isError ? "에러 발생" : "정상"}
            </Badge>
          </CardContent>
        </Card>

        {/* 사용자 목록 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              사용자 목록
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  queryClient.invalidateQueries({ queryKey: ["users"] })
                }
              >
                새로고침
              </Button>
            </CardTitle>
            <CardDescription>
              JSONPlaceholder API에서 가져온 데이터 (캐시됨)
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && (
              <div className="py-8">
                <LoadingSpinner text="사용자 목록 불러오는 중..." />
              </div>
            )}

            {isError && (
              <EmptyState
                icon={Users}
                title="데이터를 불러올 수 없습니다"
                description={error?.message || "알 수 없는 오류가 발생했습니다"}
              />
            )}

            {!isLoading && !isError && users && (
              <div className="space-y-4">
                {users.slice(0, 5).map((user) => (
                  <div
                    key={user.id}
                    className="flex items-center justify-between rounded-lg border p-4"
                  >
                    <div>
                      <p className="font-medium">{user.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => deleteUserMutation.mutate(user.id)}
                      disabled={deleteUserMutation.isPending}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <p className="text-center text-sm text-muted-foreground">
                  총 {users.length}명 중 5명 표시
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
