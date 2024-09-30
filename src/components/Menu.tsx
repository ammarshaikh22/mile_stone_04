"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";


const MenuList = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div className={cn(className)}>
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item="Home">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="About Us">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Blogs">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Docs">
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item="Support">
                </MenuItem>
            </Menu>
        </div>
    );
}
export default MenuList