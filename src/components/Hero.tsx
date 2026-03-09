import { cn } from '@/lib/utils';
import Button from './Button';
import heroMobile from '@/assets/images/image-hero-mobile.png';
import heroTablet from '@/assets/images/image-hero-tablet.png';
import heroDesktop from '@/assets/images/image-hero-desktop.png';

export default function Hero() {
  return (
    <div
      className={cn(
        'w-full xl:max-w-[1440px] max-h-[824px] md:max-h-[528px] xl:max-h-[688px]',
        'px-[20px] md:px-[44px] xl:px-[80px] py-[64px] xl:mx-auto',
      )}>
      <div
        className={cn(
          'w-full xl:max-w-[1120px] xl:h-[560px]',
          'flex flex-col md:flex-row gap-[48px] md:gap-[24px] xl:gap-[32px] justify-center items-center xl:mx-auto',
        )}>
        {/* Maximize~ */}
        <div className={cn('w-full', 'flex flex-col gap-[40px]')}>
          <h1 className={cn('typo-1 text-[40px] xl:text-[56px] text-blue-900')}>Maximize skill, minimize budget</h1>
          <p className={cn('typo-5 text-grey')}>
            Our modern courses across a range of in-demand skills will give you the knowledge you need to live the life
            you want.
          </p>
          <div className={cn('w-[168px] h-[59px]')}>
            <Button variant="orange" />
          </div>
        </div>
        {/* illustration */}
        <figure className={cn('w-full h-[320px] md:h-[400px]', 'relative flex justify-center items-center')}>
          <picture>
            <source media="(min-width: 1280px)" srcSet={heroDesktop} />
            <source media="(min-width: 768px)" srcSet={heroTablet} />
            <img
              src={heroMobile}
              alt="illustration"
              className={cn(
                'md:max-w-none md:h-[700px] xl:h-[860px]',
                'md:absolute md:top-[-220px] xl:top-[-330px] md:left-0 xl:left-[60px]',
                '-z-1',
              )}
            />
          </picture>
        </figure>
      </div>
    </div>
  );
}
