import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";

const AuthLayout = () => {
  return (
    <Tabs defaultValue="login" className="w-full h-fit">
      <TabsList className="w-full grid grid-cols-2 h-fit">
        <TabsTrigger value="login" className="text-base uppercase cursor-pointer">Login</TabsTrigger>
        <TabsTrigger value="signup" className="text-base uppercase cursor-pointer">Signup</TabsTrigger>
      </TabsList>
      <div className="w-full h-fit max-h-full flex text-white">
        <TabsContent value="login">
          <Login/>
        </TabsContent>
        <TabsContent value="signup">
          <Signup/>
        </TabsContent>
      </div>
    </Tabs>
  );
};

export default AuthLayout;
