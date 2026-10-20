import { Calculator, Certificate, ChatBubbles, FolderUpload, Globe, Medal, People, Rocket } from "./Spots";

export type ArtName = "rocket" | "calculator" | "medal" | "globe" | "certificate" | "chat" | "folder" | "people";

const map = {
  rocket: Rocket,
  calculator: Calculator,
  medal: Medal,
  globe: Globe,
  certificate: Certificate,
  chat: ChatBubbles,
  folder: FolderUpload,
  people: ({ className }: { className?: string }) => <People count={3} className={className} />,
} satisfies Record<ArtName, (p: { className?: string }) => React.ReactNode>;

export function Art({ name, className }: { name: ArtName; className?: string }) {
  const Component = map[name];
  return <Component className={className} />;
}

/** Picks a spot illustration for any services URL, by category. */
export function artForPath(path: string): ArtName {
  if (path.includes("business-registration")) return "rocket";
  if (path.includes("gst-taxation") || path.includes("accounting")) return "calculator";
  if (path.includes("startup-services")) return "medal";
  if (path.includes("corporate-compliance")) return "certificate";
  if (path.includes("licences")) return "folder";
  if (path.includes("trademark") || path.includes("legal")) return "certificate";
  return "chat";
}
