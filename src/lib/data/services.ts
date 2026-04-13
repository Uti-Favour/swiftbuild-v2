import type { LucideIcon } from "lucide-react";
import {
  Globe,
  Workflow,
  Smartphone,
  Code2,
  Zap,
  ShoppingCart,
  
} from "lucide-react";

export interface ServiceCard {
  icon: LucideIcon;
  text: string;
  boldText?: string;
}

export const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: Zap,
    text: "Eliminate repetitive tasks, ",
    boldText: "save 30 hours every week.",
  },
  {
    icon: Code2,
    text: "Build scalable software that grows with your business.",
  },
  {
    icon: Globe,
    text: "Launch websites that turn visitors into ",
    boldText: "paying customers.",
  },
  {
    icon: Workflow,
    text: "Streamline operations and ",
    boldText: "cut costs fast.",
  },
  {
    icon: Smartphone,
    text: "Create mobile apps that ",
    boldText: "scale your revenue.",
  },
  {
    icon: ShoppingCart,
    text: "Build online stores that ",
    boldText: "sell while you sleep.",
  },
];

export const SERVICE_SECTION_CONTENT = {
  heading: "Services That Help You Scale Faster",
  description:
    "We help early-stage startups and small businesses build and scale faster with expert technical and business support.",
};
