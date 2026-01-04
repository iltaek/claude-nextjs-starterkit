"use client";

import { PageHeader } from "@/components/common/page-header";
import { EmptyState } from "@/components/common/empty-state";
import { LoadingSpinner, LoadingScreen } from "@/components/feedback/loading-spinner";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Inbox, AlertCircle, CheckCircle2, Info } from "lucide-react";
import { useState } from "react";

export default function ComponentsPage() {
  const [progress, setProgress] = useState(60);

  return (
    <div className="space-y-8">
      <PageHeader
        title="공통 컴포넌트 예제"
        description="재사용 가능한 컴포넌트들의 다양한 사용법"
        actions={
          <Button variant="outline">액션 버튼 예제</Button>
        }
      />

      {/* Badge 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>Badge (배지)</CardTitle>
          <CardDescription>상태, 태그, 레이블 표시용</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge>Default</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="destructive">Destructive</Badge>
            <Badge variant="outline">Outline</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Alert 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>Alert (알림)</CardTitle>
          <CardDescription>중요한 정보나 메시지 표시</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Alert>
            <Info className="h-4 w-4" />
            <AlertTitle>정보</AlertTitle>
            <AlertDescription>
              기본 정보 메시지입니다.
            </AlertDescription>
          </Alert>

          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>에러</AlertTitle>
            <AlertDescription>
              문제가 발생했습니다. 다시 시도해주세요.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Progress 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>Progress (진행 바)</CardTitle>
          <CardDescription>작업 진행 상태 표시</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span>진행률</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setProgress(Math.max(0, progress - 10))}
            >
              -10%
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setProgress(Math.min(100, progress + 10))}
            >
              +10%
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* LoadingSpinner 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>LoadingSpinner (로딩 스피너)</CardTitle>
          <CardDescription>비동기 작업 진행 중 표시</CardDescription>
        </CardHeader>
        <CardContent className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium">크기 옵션:</p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <LoadingSpinner size="sm" />
                <p className="mt-2 text-xs text-muted-foreground">Small</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="md" />
                <p className="mt-2 text-xs text-muted-foreground">Medium</p>
              </div>
              <div className="text-center">
                <LoadingSpinner size="lg" />
                <p className="mt-2 text-xs text-muted-foreground">Large</p>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <p className="text-sm font-medium">텍스트 포함:</p>
            <LoadingSpinner text="데이터를 불러오는 중..." />
          </div>
        </CardContent>
      </Card>

      {/* EmptyState 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>EmptyState (빈 상태)</CardTitle>
          <CardDescription>데이터가 없을 때 표시</CardDescription>
        </CardHeader>
        <CardContent>
          <EmptyState
            icon={Inbox}
            title="데이터가 없습니다"
            description="새 항목을 추가하여 시작해보세요"
            action={{
              label: "항목 추가",
              onClick: () => toast.info("항목 추가 버튼 클릭됨"),
            }}
          />
        </CardContent>
      </Card>

      {/* PageHeader 예제 */}
      <Card>
        <CardHeader>
          <CardTitle>PageHeader (페이지 헤더)</CardTitle>
          <CardDescription>
            이 페이지 상단에 사용된 컴포넌트입니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg border bg-muted/50 p-6">
            <PageHeader
              title="예제 페이지 제목"
              description="페이지 설명 텍스트"
              actions={
                <div className="flex gap-2">
                  <Button size="sm">주 액션</Button>
                  <Button size="sm" variant="outline">
                    부 액션
                  </Button>
                </div>
              }
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
