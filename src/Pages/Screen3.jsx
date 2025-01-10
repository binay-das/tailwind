import { Button } from "../components/Button";

export const Screen3 = () => {
  return (
    <div className="bg-mainbg min-h-screen flex justify-center items-center text-center">
        <div className="max-w-[350px] flex flex-col gap-8">
        <div className="flex justify-center items-center gap-4">
            <input type="number" />
        </div>
        <Button>Verify</Button>
        </div>
    </div>
  );
};
