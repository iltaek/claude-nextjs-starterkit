import { format, formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

/**
 * 날짜를 지정된 형식으로 포맷합니다
 * @param date - 포맷할 날짜
 * @param formatStr - 날짜 형식 (기본값: "yyyy-MM-dd")
 * @returns 포맷된 날짜 문자열
 */
export function formatDate(date: Date | string, formatStr = "yyyy-MM-dd") {
  return format(new Date(date), formatStr, { locale: ko });
}

/**
 * 날짜를 상대적 시간으로 포맷합니다 (예: "3분 전")
 * @param date - 포맷할 날짜
 * @returns 상대적 시간 문자열
 */
export function formatRelativeTime(date: Date | string) {
  return formatDistanceToNow(new Date(date), {
    addSuffix: true,
    locale: ko,
  });
}

/**
 * 숫자를 통화 형식으로 포맷합니다
 * @param amount - 금액
 * @param currency - 통화 코드 (기본값: "KRW")
 * @returns 포맷된 통화 문자열
 */
export function formatCurrency(amount: number, currency = "KRW") {
  return new Intl.NumberFormat("ko-KR", {
    style: "currency",
    currency,
  }).format(amount);
}

/**
 * 바이트를 읽기 쉬운 형식으로 포맷합니다
 * @param bytes - 바이트 수
 * @returns 포맷된 파일 크기 문자열
 */
export function formatBytes(bytes: number) {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + " " + sizes[i];
}

/**
 * 숫자를 천 단위로 구분하여 포맷합니다
 * @param num - 포맷할 숫자
 * @returns 포맷된 숫자 문자열
 */
export function formatNumber(num: number) {
  return new Intl.NumberFormat("ko-KR").format(num);
}
