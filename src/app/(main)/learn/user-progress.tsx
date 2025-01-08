import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';

export interface IUserProgressProps {
  activeCourse: { imageSrc: string, title: string };
  hearts: number;
  points: number;
  hasActiveSupcription: boolean
}

export default function UserProgress({ 
  activeCourse,
  hearts,
  points,
  hasActiveSupcription 
}: IUserProgressProps) {
  return (
    <div className='flex items-center justify-between gap-x-2 py-6 w-full'>
      <Link href="/courses">
        <Button variant={"nothing"}>
          <Image
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            width={32}
            height={32}
          />
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"nothing"} className='text-[rgb(28,176,246)]'>
          <Image
            src={"/images/gem.svg"}
            alt={"User Points"}
            width={32}
            height={32}
            className='mr-2'
          />
          <span className='font-bold'>{points}</span>
        </Button>
      </Link>
      <Link href={"/shop"}>
        <Button variant={"nothing"} className='text-[rgb(255,75,75)]'>
          <Image
            src={"/images/heart.svg"}
            alt={"User hearts"}
            width={32}
            height={32}
            className='mr-2'
          />
          {hasActiveSupcription ? 
            <InfinityIcon className='h-4 w-4 stroke-[3]'/>
            :
            <span className='font-bold'>{hearts}</span>
          }
        </Button>
      </Link>
    </div>
  );
}
