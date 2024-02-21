'use client';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@apps/components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navigation({
  items,
}: {
  items: Array<{ title: string; url: string; exact?: boolean }>;
}) {
  const pathname = usePathname();

  return (
    <NavigationMenu>
      <NavigationMenuList>
        {items.map((item) => (
          <NavigationMenuItem key={JSON.stringify(item)}>
            <Link href={item.url} legacyBehavior passHref>
              <NavigationMenuLink
                active={
                  item.exact
                    ? pathname === item.url
                    : pathname.startsWith(item.url)
                }
                className={navigationMenuTriggerStyle()}
              >
                {item.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
