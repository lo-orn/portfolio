export type NavId = 'work' | 'lab' | 'about' | 'contact';

export interface NavItem {
  id: NavId;
  label: string;
  href: string;
}
