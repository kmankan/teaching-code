"use client";

import type { ContentBlock } from "@/data/lessons";
import CodeBlock from "./CodeBlock";
import CommandBlock from "./CommandBlock";
import Callout from "./Callout";
import Expandable from "./Expandable";
import ChecklistItem from "./ChecklistItem";

function renderBlock(block: ContentBlock, index: number): React.ReactNode {
  switch (block.type) {
    case "paragraph":
      return <p key={index} className="my-3 leading-relaxed">{block.text}</p>;

    case "heading":
      if (block.level === 2) {
        return <h2 key={index} className="text-xl font-bold mt-8 mb-3">{block.text}</h2>;
      }
      return <h3 key={index} className="text-lg font-semibold mt-6 mb-2">{block.text}</h3>;

    case "command":
      return <CommandBlock key={index} command={block.command} description={block.description} />;

    case "code":
      return <CodeBlock key={index} code={block.code} language={block.language} filename={block.filename} />;

    case "callout":
      return (
        <Callout key={index} type={block.variant} title={block.title}>
          {block.text}
        </Callout>
      );

    case "expandable":
      return (
        <Expandable key={index} title={block.title}>
          {block.content.map((child, i) => renderBlock(child, i))}
        </Expandable>
      );

    case "list":
      if (block.ordered) {
        return (
          <ol key={index} className="my-3 ml-6 list-decimal space-y-1.5">
            {block.items.map((item, i) => (
              <li key={i} className="leading-relaxed">{item}</li>
            ))}
          </ol>
        );
      }
      return (
        <ul key={index} className="my-3 ml-6 list-disc space-y-1.5">
          {block.items.map((item, i) => (
            <li key={i} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );

    case "checklist":
      return (
        <div key={index} className="my-3 space-y-1">
          {block.items.map((item) => (
            <ChecklistItem key={item.id} id={item.id} label={item.label} sublabel={item.sublabel} />
          ))}
        </div>
      );

    default:
      return null;
  }
}

interface LessonContentProps {
  sections: { id: string; title: string; content: ContentBlock[] }[];
}

export default function LessonContent({ sections }: LessonContentProps) {
  return (
    <div>
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="mb-12">
          <h2 className="text-2xl font-bold mb-4 pb-2 border-b border-border">{section.title}</h2>
          {section.content.map((block, i) => renderBlock(block, i))}
        </section>
      ))}
    </div>
  );
}
