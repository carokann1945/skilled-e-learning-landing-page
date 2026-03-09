import { cn } from '@/lib/utils';
import animation from '@/assets/images/icon-animation.svg';
import design from '@/assets/images/icon-design.svg';
import photography from '@/assets/images/icon-photography.svg';
import crypto from '@/assets/images/icon-crypto.svg';
import business from '@/assets/images/icon-business.svg';
import Button from './Button';

export default function Content() {
  return (
    <div
      className={cn(
        'w-full max-w-[1440px] mx-auto',
        'px-[20px] md:px-[44px] xl:px-[80px] pt-[64px] pb-[80px] md:pb-[144px]',
      )}>
      <div className="w-full max-w-[335px] md:max-w-[680px] xl:max-w-[1120px] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[24px] xl:gap-x-[32px] gap-y-[56px] xl:gap-y-[80px] mx-auto">
        {/* 2. 첫 번째 강조 카드 (그라데이션 배경, 아이콘 없음) */}
        <div className="max-w-[352px] gradient-pink rounded-[15px] p-[32px] md:pt-[64px] md:pb-[40px]">
          <h2 className="typo-3 text-white text-[24px]">Check out our most popular courses!</h2>
        </div>

        {/* 3. 일반 과정 카드 (흰색 배경, 튀어나온 아이콘 있음) */}
        <div className="relative max-w-[335px] xl:max-w-[352px] bg-white rounded-[15px] pt-[64px] pb-[40px] px-[32px] shadow-lg flex flex-col items-start">
          {/* 절대 좌표로 배치된 아이콘 */}
          <div className="absolute top-[-28px] left-[32px] w-[56px] h-[56px] rounded-full flex justify-center items-center">
            {/* 아이콘 이미지 (예시로 img 태그 사용) */}
            <img src={animation} alt="animation icon" />
          </div>
          {/* 카드 내용 */}
          <h3 className="typo-4 text-blue-900 text-[20px] mb-[24px]">Animation</h3>
          <p className="typo-6 text-grey mb-[24px] grow">
            Learn the latest animation techniques to create stunning motion design and captivate your audience.
          </p>
          <Button variant="link" />
        </div>

        {/* 3. 일반 과정 카드 (흰색 배경, 튀어나온 아이콘 있음) */}
        <div className="relative max-w-[335px] xl:max-w-[352px] bg-white rounded-[15px] pt-[64px] pb-[40px] px-[32px] shadow-lg flex flex-col items-start">
          {/* 절대 좌표로 배치된 아이콘 */}
          <div className="absolute top-[-28px] left-[32px] w-[56px] h-[56px] rounded-full flex justify-center items-center">
            {/* 아이콘 이미지 (예시로 img 태그 사용) */}
            <img src={design} alt="design icon" />
          </div>

          {/* 카드 내용 */}
          <h3 className="typo-4 text-blue-900 text-[20px] mb-[24px]">Design</h3>
          <p className="typo-6 text-grey mb-[24px] grow">
            Create beautiful, usable interfaces to help shape the future of how the web looks.
          </p>

          <Button variant="link" />
        </div>

        {/* 3. 일반 과정 카드 (흰색 배경, 튀어나온 아이콘 있음) */}
        <div className="relative max-w-[335px] xl:max-w-[352px] bg-white rounded-[15px] pt-[64px] pb-[40px] px-[32px] shadow-lg flex flex-col items-start">
          {/* 절대 좌표로 배치된 아이콘 */}
          <div className="absolute top-[-28px] left-[32px] w-[56px] h-[56px] rounded-full flex justify-center items-center">
            {/* 아이콘 이미지 (예시로 img 태그 사용) */}
            <img src={photography} alt="photography icon" />
          </div>

          {/* 카드 내용 */}
          <h3 className="typo-4 text-blue-900 text-[20px] mb-[24px]">Photography</h3>
          <p className="typo-6 text-grey mb-[24px] grow">
            Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos.
          </p>

          <Button variant="link" />
        </div>

        {/* 3. 일반 과정 카드 (흰색 배경, 튀어나온 아이콘 있음) */}
        <div className="relative max-w-[335px] xl:max-w-[352px] bg-white rounded-[15px] pt-[64px] pb-[40px] px-[32px] shadow-lg flex flex-col items-start">
          {/* 절대 좌표로 배치된 아이콘 */}
          <div className="absolute top-[-28px] left-[32px] w-[56px] h-[56px] rounded-full flex justify-center items-center">
            {/* 아이콘 이미지 (예시로 img 태그 사용) */}
            <img src={crypto} alt="crypto icon" />
          </div>

          {/* 카드 내용 */}
          <h3 className="typo-4 text-blue-900 text-[20px] mb-[24px]">Crypto</h3>
          <p className="typo-6 text-grey mb-[24px] grow">
            All you need to know to get started investing in crypto. Go from beginner to advanced with this 54 hour
            course.
          </p>

          <Button variant="link" />
        </div>

        {/* 3. 일반 과정 카드 (흰색 배경, 튀어나온 아이콘 있음) */}
        <div className="relative max-w-[335px] xl:max-w-[352px] bg-white rounded-[15px] pt-[64px] pb-[40px] px-[32px] shadow-lg flex flex-col items-start">
          {/* 절대 좌표로 배치된 아이콘 */}
          <div className="absolute top-[-28px] left-[32px] w-[56px] h-[56px] rounded-full flex justify-center items-center">
            {/* 아이콘 이미지 (예시로 img 태그 사용) */}
            <img src={business} alt="business icon" />
          </div>

          {/* 카드 내용 */}
          <h3 className="typo-4 text-blue-900 text-[20px] mb-[24px]">Business</h3>
          <p className="typo-6 text-grey mb-[24px] grow">
            A step-by-step playbook to help you start, scale, and sustain your business without outside investment.
          </p>

          <Button variant="link" />
        </div>
      </div>
    </div>
  );
}
