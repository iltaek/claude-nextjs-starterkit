import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";
import { Button } from "@/components/ui/button";

/**
 * 헤더 컴포넌트
 * 로고, 네비게이션, 다크모드 토글을 포함합니다
 */
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        {/* 로고 */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Next.js Starterkit</span>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden items-center gap-6 md:flex">
            <Link
              href="/dashboard"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              대시보드
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              문서
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              소개
            </Link>
          </nav>
        </div>

        {/* 우측 액션 버튼 */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild size="sm">
            <Link href="/login">로그인</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
