import { cn } from '@/lib/utils';
import React from 'react';

type ButtonVariant = 'black' | 'orange' | 'purple' | 'link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  black:
    'cursor-pointer bg-[#13183F] hover:bg-[#666CA3] typo-7 text-white px-[32px] py-[16px] md:px-[24px] md:py-[12px] xl:px-[32px] xl:py-[16px] overflow-hidden rounded-[28px]',
  orange:
    'cursor-pointer gradient-pink hover:gradient-pink-light typo-7 text-white px-[32px] py-[16px] md:px-[24px] md:py-[12px] xl:px-[32px] xl:py-[16px] overflow-hidden rounded-[28px]',
  purple:
    'cursor-pointer gradient-purple hover:gradient-purple-light typo-7 text-white px-[32px] py-[16px] md:px-[24px] md:py-[12px] xl:px-[32px] xl:py-[16px] overflow-hidden rounded-[28px]',
  link: 'cursor-pointer w-[104px] h-[28px] typo-7 text-pink-600 hover:text-pink-300',
};

export default function Button({ variant = 'black' }: ButtonProps) {
  return <button className={cn(variantStyles[variant])}>Get Started</button>;
}
