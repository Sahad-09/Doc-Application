import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import Form from "./Form";
import { Button } from "./ui/button";

const Dialog = () => {
  return (
    <div>
      <AlertDialog>
        <AlertDialogTrigger>
          <Button variant="add">New Patient</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>New Patient ?</AlertDialogTitle>
            <AlertDialogDescription>
              Fill patient details:
            </AlertDialogDescription>
          </AlertDialogHeader>
          <Form />
          {/* <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter> */}
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default Dialog;
