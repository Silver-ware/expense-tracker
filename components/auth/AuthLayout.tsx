import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Login from "./Login";
import Signup from "./Signup";

const AuthLayout = () => {
  return (
    <Tabs defaultValue="login" className="w-full h-fit">
      <TabsList>
        <TabsTrigger value="login" className="pt-3 pb-4 px-4 text-base uppercase cursor-pointer">Login</TabsTrigger>
        <TabsTrigger value="signup" className="pt-3 pb-4 px-4 text-base uppercase cursor-pointer">Signup</TabsTrigger>
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
