import { Boundary } from "@/app/_components/boundry";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Root Page" textCenter filePath="page.tsx">
      <div className="space-y-4">
        <p className="text-gray-300 text-sm">
          🎯 This demonstrates <strong>Next.js App Router</strong> concepts:
        </p>
        <ul className="text-gray-400 text-xs space-y-1 text-left">
          <li>• <strong>Nested Layouts</strong>: How layouts wrap child components</li>
          <li>• <strong>State Persistence</strong>: Layouts maintain state during navigation</li>
          <li>• <strong>Visual Boundaries</strong>: Color-coded borders show hierarchy</li>
        </ul>
        <div className="space-y-2">
          <Link href="/nesting-layout/child">🔗 Basic nested layout example</Link>
          <Link href="/nesting-layout/template">🔄 Layout vs Template demo</Link>
        </div>
      </div>
    </Boundary>
  );
}
