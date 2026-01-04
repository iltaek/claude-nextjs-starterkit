import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Shield, Rocket, Target, Globe, Award, FileText, Database, Blocks } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const features = [
    {
      icon: Zap,
      title: "빠른 성능",
      description: "Next.js 16의 최신 기능으로 최적화된 성능을 제공합니다",
    },
    {
      icon: Shield,
      title: "보안",
      description: "업계 표준 보안 관행과 검증된 라이브러리를 사용합니다",
    },
    {
      icon: Rocket,
      title: "확장 가능",
      description: "Atomic Design 기반의 확장 가능한 컴포넌트 구조",
    },
    {
      icon: Target,
      title: "타입 안전성",
      description: "TypeScript와 Zod로 완벽한 타입 안전성 보장",
    },
    {
      icon: Globe,
      title: "반응형",
      description: "모바일부터 데스크톱까지 모든 디바이스 지원",
    },
    {
      icon: Award,
      title: "검증된 스택",
      description: "25M+ weekly downloads의 검증된 라이브러리만 사용",
    },
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero 섹션 */}
        <section className="container mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl flex-col items-center justify-center gap-8 px-4 py-20 text-center">
          <Badge variant="secondary" className="px-4 py-1">
            엔터프라이즈급 스타터킷
          </Badge>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Next.js로 빠르게
            <br />
            <span className="text-primary">웹 개발 시작하기</span>
          </h1>

          <p className="max-w-2xl text-base text-muted-foreground sm:text-lg">
            검증된 라이브러리와 모범 사례로 구축된 프로덕션 레디 스타터킷.
            다크모드, 폼 검증, 데이터 페칭 등 모든 것이 준비되어 있습니다.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/dashboard">시작하기</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/docs">문서 보기</Link>
            </Button>
          </div>
        </section>

        {/* Features 섹션 */}
        <section className="border-t bg-muted/30 py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">주요 기능</h2>
              <p className="text-muted-foreground">
                프로덕션 레디 웹 앱을 위한 모든 것
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="text-center">
                    <CardHeader className="pb-4">
                      <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-7 w-7 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* 예제 Showcase 섹션 */}
        <section className="border-t py-20">
          <div className="container mx-auto max-w-6xl px-4">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold">예제 둘러보기</h2>
              <p className="text-muted-foreground">
                실제 동작하는 예제로 스타터킷의 기능을 체험해보세요
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: "폼 예제",
                  description: "React Hook Form과 Zod를 활용한 폼 검증 시연",
                  href: "/examples/forms",
                  icon: FileText,
                },
                {
                  title: "데이터 페칭 예제",
                  description: "React Query를 활용한 데이터 관리 및 캐싱",
                  href: "/examples/data-fetching",
                  icon: Database,
                },
                {
                  title: "컴포넌트 예제",
                  description: "재사용 가능한 공통 컴포넌트 사용법",
                  href: "/examples/components",
                  icon: Blocks,
                },
              ].map((example, index) => {
                const Icon = example.icon;
                return (
                  <Card key={index} className="flex flex-col">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <CardTitle className="text-xl">{example.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-grow flex-col items-center justify-between gap-4">
                      <CardDescription className="text-center leading-relaxed">
                        {example.description}
                      </CardDescription>
                      <Button asChild variant="outline" className="w-full">
                        <Link href={example.href}>예제 보기</Link>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA 섹션 */}
        <section className="border-t py-20">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-3xl font-bold">지금 바로 시작하세요</h2>
            <p className="mb-8 text-lg text-muted-foreground">
              몇 분 안에 프로덕션 레디 웹 앱을 시작할 수 있습니다
            </p>
            <Button size="lg" asChild>
              <Link href="/dashboard">시작하기</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
