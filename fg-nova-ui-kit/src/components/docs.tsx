import { ChevronRight, Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";

export const Docs = () => (
  <div>
    <h1 className="text-4xl font-extrabold lg:text-5xl mb-12">
      Fg Nova UI Kit
    </h1>
    <div className="flex flex-col gap-24">
      <ButtonExamples />
    </div>
  </div>
);

const ButtonExamples = () => (
  <ComponentDocs title="Button">
    <ComponentExamples title="Variants">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="destructive">Destructive</Button>
    </ComponentExamples>

    <ComponentExamples title="Sizes">
      <Button variant="outline" size="sm">
        Small
      </Button>
      <Button variant="outline">Default</Button>
      <Button variant="outline" size="lg">
        Large
      </Button>
    </ComponentExamples>

    <ComponentExamples title="With icon">
      <Button variant="outline">
        With icon
        <ChevronRight className="h-4 w-4 ml-2" />
      </Button>
      <Button variant="outline" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </ComponentExamples>

    <ComponentExamples title="States">
      <Button variant="outline" disabled>
        Disabled
      </Button>
      <Button variant="outline">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        Loading
      </Button>
    </ComponentExamples>
  </ComponentDocs>
);

const ComponentDocs = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div>
    <h2 className="text-3xl font-semibold border-b mb-8">{title}</h2>
    <div className="flex flex-col gap-12">{children}</div>
  </div>
);

const ComponentExamples = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <div>
    <h3 className="text-2xl font-semibold mb-4">{title}</h3>
    <div className="flex gap-4 items-center">{children}</div>
  </div>
);
