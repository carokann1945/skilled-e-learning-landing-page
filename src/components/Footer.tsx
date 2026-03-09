import { cn } from '@/lib/utils';
import Logo from './Logo';
import Button from './Button';

export default function Footer() {
  return (
    <footer className={cn('w-full', 'px-[20px] md:px-[44px] py-[24px]', 'bg-blue-900')}>
      <div className={cn('w-full max-w-[1120px] mx-auto', 'flex justify-between items-center')}>
        <Logo variant="light" />
        <Button variant="purple" />
      </div>
    </footer>
  );
}
