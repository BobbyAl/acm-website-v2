// components/Card.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Owner {
  image: string;
  name: string;
  role?: string;
}

interface CardProps {
  isEmpty?: boolean;
  owner?: Owner;
  title?: string;
  body?: string;
  learnMoreLink?: string;
  className?: string;
}

const Card = ({ isEmpty = false, owner, title, body, learnMoreLink, className = "bg-white/[0.05]" }: CardProps) => {
  if (isEmpty) {
    return (
      <div className="bg-white/[0.05] border border-white/[0.2] rounded-xl p-6 max-w-sm flex flex-col items-center justify-center space-y-2">
          <Image
            src="/logos/acm-logo.svg"
            alt="ACM Logo"
            width={128}
            height={128}
          />
        <h2 className="text-xl font-bold">
          More News Coming Soon
        </h2>
        <p className="text-secondary text-center">
          Stay tuned for updates here at acmuta.org
        </p>
      </div>
    );
  }

  return (
    <div className={`border border-white/[0.2] rounded-xl p-6 max-w-sm flex flex-col ${className}`}>
      {/* Owner Section */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="rounded border border-white/[0.2] p-2 items-center">
          <Image
            src={owner?.image || ''}
            alt={owner?.name || ''}
            width={36}
            height={36}
          />
        </div>
        <div>
          <h3 className="font-bold text-white">{owner?.name}</h3>
          {owner?.role && (
            <p className="text-sm text-secondary text-left">{owner.role}</p>
          )}
        </div>
      </div>

      {/* Title Section */}
      <h2 className="text-xl font-bold text-white mb-4 text-left">{title}</h2>

      {/* Divider */}
      <div className="border-t border-white/[0.2] mb-4" />

      {/* Body Text */}
      <p className="text-white/80 mb-6 text-left">{body}</p>

      {/* Learn More Button */}
      <div className='text-left mt-auto pt-6'>
        <Link 
            href={learnMoreLink || '#'}
            className="inline-flex hover:bg-white/[0.2] border border-white/[0.2] rounded-lg px-4 py-1 text-white transition-colors"
        >
            Learn More
            <Image src='icons/right-arrow.svg' alt='right arrow' width={12} height={12} />
        </Link>
      </div>
    </div>
  );
};

export default Card;