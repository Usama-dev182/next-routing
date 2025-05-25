import { Boundary } from "@/app/_components/boundry";

export default function Page() {
  return (
    <Boundary label="Child Page" textCenter  filePath="child/page.tsx">
      child page has the root layout
    </Boundary>
  );
}
