import { cn } from "@/lib/utils";

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * 페이지 컨테이너 컴포넌트
 * 일관된 여백과 최대 너비를 제공합니다
 */
export function PageShell({ children, className }: PageShellProps) {
  return (
    <div className={cn("container mx-auto py-8", className)}>{children}</div>
  );
}
