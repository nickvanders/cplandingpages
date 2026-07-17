export function GradientBullet({ className = "" }: { className?: string }) {
  return <span aria-hidden="true" className={`block h-2 w-2 rounded-full flex-shrink-0 ${className}`} style={{ background: "linear-gradient(135deg, #27BBE9, #B67AEC)" }} />;
}
