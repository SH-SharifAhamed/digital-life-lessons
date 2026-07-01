
import { DrawerPage } from "@/components/deshboard/Drawer";

const DeshboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      
      <aside>
         <DrawerPage />
      </aside>
      <div className="flex-1">{children}</div>
    </div>
  );
};

export default DeshboardLayout;

