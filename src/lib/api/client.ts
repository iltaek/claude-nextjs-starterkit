import ky from "ky";

/**
 * API 클라이언트 인스턴스
 * ky 라이브러리를 사용한 HTTP 클라이언트
 */
export const api = ky.create({
  prefixUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api",
  timeout: 30000,
  retry: {
    limit: 2,
    methods: ["get", "post", "put", "delete"],
    statusCodes: [408, 413, 429, 500, 502, 503, 504],
  },
  hooks: {
    beforeRequest: [
      (request) => {
        // 인증 토큰 추가 (예시)
        if (typeof window !== "undefined") {
          const token = localStorage.getItem("auth_token");
          if (token) {
            request.headers.set("Authorization", `Bearer ${token}`);
          }
        }
      },
    ],
    afterResponse: [
      async (_request, _options, response) => {
        // 401 에러 시 로그아웃 처리 등
        if (response.status === 401) {
          if (typeof window !== "undefined") {
            localStorage.removeItem("auth_token");
            window.location.href = "/login";
          }
        }
      },
    ],
  },
});

/**
 * API 에러 타입
 */
export interface APIError {
  message: string;
  code?: string;
  status?: number;
}
