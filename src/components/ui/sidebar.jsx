import * as React from "react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const SidebarContext = React.createContext(null);

export function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider");
  }
  return context;
}

export function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React.useState(false);
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp !== undefined ? openProp : _open;
  const setOpen = React.useCallback(
    (value) => {
      if (setOpenProp) {
        return setOpenProp(value);
      }
      _setOpen(value);
    },
    [setOpenProp]
  );

  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  return (
    <SidebarContext.Provider
      value={{
        state: open ? "expanded" : "collapsed",
        open,
        setOpen,
        isMobile,
        openMobile,
        setOpenMobile,
        toggleSidebar,
      }}
    >
      <div
        style={{ ...style }}
        className={cn("flex min-h-screen w-full bg-background", className)}
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

export const Sidebar = React.forwardRef(({ className, children, ...props }, ref) => {
  return (
    <aside
      ref={ref}
      className={cn("hidden md:flex w-64 flex-col border-r border-white/10 bg-card/60 p-4", className)}
      {...props}
    >
      {children}
    </aside>
  );
});
Sidebar.displayName = "Sidebar";
