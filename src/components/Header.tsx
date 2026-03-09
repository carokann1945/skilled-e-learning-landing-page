import { cn } from '@/lib/utils';
import Logo from './Logo';
import Button from './Button';

export default function Header() {
  return (
    <header className={cn('w-full', 'px-[20px] md:px-[44px] py-[16px] md:py-[24px]')}>
      <nav className={cn('w-full', 'flex justify-between items-center')}>
        <Logo variant="dark" />
        <Button variant="black" />
      </nav>
    </header>
  );
}
