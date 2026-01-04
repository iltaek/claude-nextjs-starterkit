import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";

/**
 * 푸터 컴포넌트
 * 저작권, 링크, 소셜 미디어 아이콘을 포함합니다
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-muted/50">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-3 gap-8">
          {/* 로고 및 설명 - 좌측 정렬 */}
          <div className="space-y-4 text-left">
            <h3 className="text-lg font-bold">Next.js Starterkit</h3>
            <p className="text-sm text-muted-foreground">
              엔터프라이즈급 Next.js 웹 스타터킷
            </p>
          </div>

          {/* 링크 - 중앙 정렬 */}
          <div className="flex items-center justify-center">
            <nav className="flex space-x-6 text-sm text-muted-foreground">
              <Link
                href="/docs"
                className="transition-colors hover:text-foreground"
              >
                문서
              </Link>
              <Link
                href="/about"
                className="transition-colors hover:text-foreground"
              >
                소개
              </Link>
              <Link
                href="/contact"
                className="transition-colors hover:text-foreground"
              >
                문의
              </Link>
            </nav>
          </div>

          {/* 소셜 미디어 - 우측 정렬 */}
          <div className="space-y-4 text-right">
            <h4 className="text-sm font-semibold">소셜</h4>
            <div className="flex justify-end space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* 저작권 */}
        <div className="mt-8 border-t pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Next.js Starterkit. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
