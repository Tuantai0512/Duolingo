
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

export interface IMobileSidebarProps {
}

export default function MobileSidebar (props: IMobileSidebarProps) {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white"/>
      </SheetTrigger>
      <SheetContent side={"left"}>
        <Sidebar className="block"/>
      </SheetContent>
    </Sheet>
  );
}
