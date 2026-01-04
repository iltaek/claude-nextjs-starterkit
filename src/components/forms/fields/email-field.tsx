import { Input } from "@/components/ui/input";
import { FormField } from "../form-field";
import { UseFormRegisterReturn } from "react-hook-form";

interface EmailFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  className?: string;
  registration?: UseFormRegisterReturn;
}

/**
 * 이메일 입력 필드 컴포넌트
 */
export function EmailField({
  label = "이메일",
  error,
  required = true,
  placeholder = "example@example.com",
  description,
  className,
  registration,
}: EmailFieldProps) {
  return (
    <FormField
      label={label}
      error={error}
      required={required}
      description={description}
      className={className}
    >
      <Input
        type="email"
        placeholder={placeholder}
        autoComplete="email"
        {...registration}
        aria-invalid={error ? "true" : "false"}
      />
    </FormField>
  );
}
