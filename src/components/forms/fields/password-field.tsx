"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormField } from "../form-field";
import { Eye, EyeOff } from "lucide-react";
import { UseFormRegisterReturn } from "react-hook-form";

interface PasswordFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  className?: string;
  registration?: UseFormRegisterReturn;
  autoComplete?: string;
}

/**
 * 비밀번호 입력 필드 컴포넌트
 * 비밀번호 표시/숨김 토글 기능 포함
 */
export function PasswordField({
  label = "비밀번호",
  error,
  required = true,
  placeholder = "••••••••",
  description,
  className,
  registration,
  autoComplete = "current-password",
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <FormField
      label={label}
      error={error}
      required={required}
      description={description}
      className={className}
    >
      <div className="relative">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          autoComplete={autoComplete}
          {...registration}
          aria-invalid={error ? "true" : "false"}
          className="pr-10"
        />
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="absolute right-0 top-0 h-full px-3 hover:bg-transparent"
          onClick={() => setShowPassword(!showPassword)}
          aria-label={showPassword ? "비밀번호 숨기기" : "비밀번호 표시"}
        >
          {showPassword ? (
            <EyeOff className="h-4 w-4" />
          ) : (
            <Eye className="h-4 w-4" />
          )}
        </Button>
      </div>
    </FormField>
  );
}
