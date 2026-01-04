"use client";

import { PageHeader } from "@/components/common/page-header";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { EmailField } from "@/components/forms/fields/email-field";
import { PasswordField } from "@/components/forms/fields/password-field";
import { TextField } from "@/components/forms/fields/text-field";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, signupSchema, type LoginInput, type SignupInput } from "@/lib/validations/auth";
import { toast } from "sonner";

export default function FormsPage() {
  return (
    <div className="space-y-8">
      <PageHeader
        title="폼 예제"
        description="React Hook Form과 Zod를 활용한 폼 검증 및 에러 처리"
      />

      <Tabs defaultValue="login" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">로그인</TabsTrigger>
          <TabsTrigger value="signup">회원가입</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <LoginFormExample />
        </TabsContent>

        <TabsContent value="signup">
          <SignupFormExample />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function LoginFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginInput) => {
    // 시뮬레이션: 2초 지연
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success(`로그인 성공: ${data.email}`);
    console.log("로그인 데이터:", data);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>로그인 폼</CardTitle>
        <CardDescription>
          이메일과 비밀번호를 입력하면 실시간 검증이 동작합니다
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <EmailField
            label="이메일"
            placeholder="example@example.com"
            error={errors.email?.message}
            registration={register("email")}
            required
          />

          <PasswordField
            label="비밀번호"
            placeholder="••••••••"
            error={errors.password?.message}
            registration={register("password")}
            required
            autoComplete="current-password"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "로그인 중..." : "로그인"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

function SignupFormExample() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<SignupInput>({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data: SignupInput) => {
    // 시뮬레이션: 2초 지연
    await new Promise((resolve) => setTimeout(resolve, 2000));
    toast.success(`회원가입 성공: ${data.name}님 환영합니다!`);
    console.log("회원가입 데이터:", data);
    reset();
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>회원가입 폼</CardTitle>
        <CardDescription>
          비밀번호는 8자 이상, 대/소문자, 숫자를 포함해야 합니다
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <TextField
            label="이름"
            placeholder="홍길동"
            error={errors.name?.message}
            registration={register("name")}
            required
          />

          <EmailField
            label="이메일"
            placeholder="example@example.com"
            error={errors.email?.message}
            registration={register("email")}
            required
          />

          <PasswordField
            label="비밀번호"
            placeholder="••••••••"
            error={errors.password?.message}
            registration={register("password")}
            required
            autoComplete="new-password"
          />

          <PasswordField
            label="비밀번호 확인"
            placeholder="••••••••"
            error={errors.confirmPassword?.message}
            registration={register("confirmPassword")}
            required
            autoComplete="new-password"
          />

          <Button type="submit" disabled={isSubmitting} className="w-full">
            {isSubmitting ? "가입 중..." : "회원가입"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
