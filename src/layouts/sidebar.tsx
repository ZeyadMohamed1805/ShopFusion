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
					<SheetTitle>Edit profile</SheetTitle>
					<SheetDescription>
						Make changes to your profile here. Click save when you
						are done.
					</SheetDescription>
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
