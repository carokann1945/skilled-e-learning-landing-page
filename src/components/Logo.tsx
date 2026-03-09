import logoDark from '@/assets/images/logo-dark.svg';
import logoLight from '@/assets/images/logo-light.svg';
import { cn } from '@/lib/utils';

type LogoVariant = 'dark' | 'light';

interface LogoProps {
  variant?: LogoVariant;
  className?: string;
}

const variantStyles: Record<LogoVariant, string> = {
  dark: 'w-[79.29px] h-[20px] xl:w-[111px] xl:h-[28px] shrink-0',
  light: 'w-[79.29px] h-[20px] xl:w-[111px] xl:h-[28px] shrink-0',
};

export default function Logo({ variant = 'dark', className }: LogoProps) {
  const logoSrc = variant === 'dark' ? logoDark : logoLight;
  return (
    <div className={cn(variantStyles[variant], className)}>
      <img src={logoSrc} alt="logo" />
    </div>
  );
}
