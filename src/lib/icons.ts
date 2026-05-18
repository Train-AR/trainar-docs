import {
  Rocket,
  LayoutDashboard,
  CheckSquare,
  Video,
  ShoppingBag,
  BarChart2,
  Settings,
  Plug,
  Code,
  FileText,
  Smartphone,
  BookOpen,
  type LucideIcon,
} from 'lucide-react';

const ICONS: Record<string, LucideIcon> = {
  rocket: Rocket,
  'layout-dashboard': LayoutDashboard,
  'check-square': CheckSquare,
  video: Video,
  'shopping-bag': ShoppingBag,
  'bar-chart-2': BarChart2,
  settings: Settings,
  plug: Plug,
  code: Code,
  'file-text': FileText,
  smartphone: Smartphone,
  'book-open': BookOpen,
};

export function getIcon(name: string): LucideIcon {
  return ICONS[name] ?? BookOpen;
}
