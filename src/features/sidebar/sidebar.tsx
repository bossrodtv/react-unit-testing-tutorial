export type SidebarProps = {
  avatar: React.ReactNode;
};

export function Sidebar({ avatar }: SidebarProps) {
  return (
    <div>
      {avatar}
      <div aria-label="menus">Menus</div>
    </div>
  );
}
