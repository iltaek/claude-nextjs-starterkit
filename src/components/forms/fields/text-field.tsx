import { Input } from "@/components/ui/input";
import { FormField } from "../form-field";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextFieldProps {
  label?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
  description?: string;
  className?: string;
  registration?: UseFormRegisterReturn;
}

/**
 * 텍스트 입력 필드 컴포넌트
 */
export function TextField({
  label,
  error,
  required,
  placeholder,
  description,
  className,
  registration,
}: TextFieldProps) {
  return (
    <FormField
      label={label}
      error={error}
      required={required}
      description={description}
      className={className}
    >
      <Input
        type="text"
        placeholder={placeholder}
        {...registration}
        aria-invalid={error ? "true" : "false"}
      />
    </FormField>
  );
}
