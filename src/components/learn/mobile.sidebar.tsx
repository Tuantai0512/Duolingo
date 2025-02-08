
import {
  Sheet,
  SheetContent,
  SheetTrigger
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Sidebar from "./sidebar";

export default function MobileSidebar () {
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
