import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
const Home = () => {
  return (
    <div className="container px-4 py-8">
      <div className="flex w-full max-w-sm items-center space-x-2">
        <Input type="text" placeholder="bulbasuar" />
        <Button className="cursor-pointer">Search</Button>
      </div>
    </div>
  );
};

export default Home;
