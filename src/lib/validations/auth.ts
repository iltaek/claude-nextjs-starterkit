import { z } from "zod";

/**
 * 로그인 폼 검증 스키마
 */
export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력하세요")
    .email("유효한 이메일 주소를 입력하세요"),
  password: z
    .string()
    .min(8, "비밀번호는 8자 이상이어야 합니다")
    .max(100, "비밀번호는 100자 이하여야 합니다"),
});

/**
 * 회원가입 폼 검증 스키마
 */
export const signupSchema = z
  .object({
    name: z
      .string()
      .min(2, "이름은 2자 이상이어야 합니다")
      .max(50, "이름은 50자 이하여야 합니다"),
    email: z
      .string()
      .min(1, "이메일을 입력하세요")
      .email("유효한 이메일 주소를 입력하세요"),
    password: z
      .string()
      .min(8, "비밀번호는 8자 이상이어야 합니다")
      .max(100, "비밀번호는 100자 이하여야 합니다")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "비밀번호는 대문자, 소문자, 숫자를 포함해야 합니다"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "비밀번호가 일치하지 않습니다",
    path: ["confirmPassword"],
  });

/**
 * 비밀번호 재설정 요청 스키마
 */
export const resetPasswordSchema = z.object({
  email: z
    .string()
    .min(1, "이메일을 입력하세요")
    .email("유효한 이메일 주소를 입력하세요"),
});

// TypeScript 타입 추론
export type LoginInput = z.infer<typeof loginSchema>;
export type SignupInput = z.infer<typeof signupSchema>;
export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
