import { Boundary } from "@/app/_components/boundry";
import { Link } from "@/app/_components/link";

export default function Page() {
  return (
    <Boundary label="Root Page" textCenter filePath="page.tsx">
      <div className="space-y-4">
        <p className="text-gray-300 text-sm">
          🔄 This demonstrates <strong>Layout vs Template</strong> behavior:
        </p>
        <ul className="text-gray-400 text-xs space-y-1 text-left">
          <li>• <strong>Layout</strong> (above): Keeps input value when navigating</li>
          <li>• <strong>Template</strong> (child page): Resets on navigation</li>
        </ul>
        <Link href="/nesting-layout/template/child">go to the child page</Link>
      </div>
    </Boundary>
  );
}
