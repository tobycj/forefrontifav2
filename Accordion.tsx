import { Disclosure } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { ReactNode } from "react";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <Disclosure>
      {({ open }) => (
        <div className="border-b border-gray-200 py-4">
          <Disclosure.Button className="flex w-full items-center justify-between text-left text-lg font-medium">
            {title}
            <ChevronDown
              className={\`h-5 w-5 transition-transform \${open ? "rotate-180" : ""}\`}
            />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-4 space-y-4 text-gray-700">
            {children}
          </Disclosure.Panel>
        </div>
      )}
    </Disclosure>
  );
}
