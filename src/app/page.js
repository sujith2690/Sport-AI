import { Button } from "@/components/ui/button";
import { UserButton } from "@stackframe/stack";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h2> Hello
        <div>
          <Button>Click me</Button>
          <UserButton />
        </div>
      </h2>
    </div>
  );
}
