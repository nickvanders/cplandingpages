import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6">
      <h1 className="font-heading text-4xl font-bold text-foreground mb-4">404</h1>
      <p className="text-muted-foreground mb-8">Page not found.</p>
      <Link href="/adhd">
        <Button>Go to Home</Button>
      </Link>
    </div>
  );
}
