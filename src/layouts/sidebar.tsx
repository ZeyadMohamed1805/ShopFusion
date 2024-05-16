import Image from "next/image";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetFooter,
	SheetClose,
	SheetTrigger,
} from "@/components/ui/sheet";
import { ChildrenType } from "@/types/types";

const Sidebar = ({ children }: ChildrenType) => {
	return (
		<Sheet>
			<SheetTrigger asChild>{children}</SheetTrigger>
			<SheetContent side={"right"}>
				<SheetHeader>
					<Image
						src={"/logo.svg"}
						width={160}
						height={30.24}
						priority
						alt="Logo"
					/>
				</SheetHeader>
				<div className="grid gap-4 py-4">
					<div className="grid grid-cols-4 items-center gap-4">
						Name
					</div>
					<div className="grid grid-cols-4 items-center gap-4">
						Username
					</div>
				</div>
				<SheetFooter>
					<SheetClose asChild>Save changes</SheetClose>
				</SheetFooter>
			</SheetContent>
		</Sheet>
	);
};

export default Sidebar;
