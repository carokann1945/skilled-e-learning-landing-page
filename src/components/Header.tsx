import { cn } from '@/lib/utils';
import Logo from './Logo';
import Button from './Button';

export default function Header() {
  return (
    <header
      className={cn(
        'w-full xl:max-w-[1440px]',
        'px-[20px] md:px-[44px] xl:px-[80px] py-[16px] md:py-[24px] xl:mx-auto',
      )}>
      <nav className={cn('w-full xl:max-w-[1120px]', 'flex justify-between items-center xl:mx-auto')}>
        <Logo variant="dark" />
        <Button variant="black" />
      </nav>
    </header>
  );
}
