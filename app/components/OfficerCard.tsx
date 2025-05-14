import Image from 'next/image';
// components/OfficerCard.tsx
interface OfficerCardProps {
    image: string;
    name: string;
    position: string;
    focus: string[];
    socials: {
      instagram?: string;
      linkedin?: string;
      email?: string;
    };
    quote: string;
    isActive?: boolean;
  }

const OfficerCard = ({ image, name, position, focus, socials, quote, isActive = false }: OfficerCardProps) => {
    return (
        <div className={`flex flex-col ${isActive ? 'opacity-100' : 'opacity-50 blur-sm'}`}>
        <div className="flex items-center border border-white/[0.2] rounded-full py-4 px-8 ">
            <Image src={image} alt={name} width={64} height={64} className="rounded-full" />
            <div className="ml-4">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-xl text-secondary text-left">{position}</p>
            </div>
        </div>
        {isActive && (
            <div className='font-fira-code'>
                <div className="mt-4 space-y-4 text-left">
                <div className='flex flex-row items-center space-x-4'>
                    <h4 className="text-secondary text-lg">Focus:</h4>
                    <div className="flex gap-2 mt-2">
                    {focus.map((tag) => (
                        <span key={tag} className="px-2 py-1 rounded-full text-sm border border-white/[0.2]">
                        {tag}
                        </span>
                    ))}
                    </div>
                </div>
                <div className='flex flex-row items-center space-x-4'>
                    <h4 className="text-secondary text-lg">Socials:</h4>
                    <div className="flex gap-4 mt-2">
                    {socials.instagram && (
                        <a href={socials.instagram} target="_blank" rel="noopener noreferrer" className='px-2 py-1 rounded-full text-sm border border-white/[0.2]'>
                        <Image src="/logos/instagram2.svg" alt="Instagram" width={20} height={20} />
                        </a>
                    )}
                    {socials.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className='px-2 py-1 rounded-full text-sm border border-white/[0.2]'>
                        <Image src="/logos/linkedin2.svg" alt="LinkedIn" width={20} height={20} />
                        </a>
                    )}
                    {socials.email && (
                        <a href={`mailto:${socials.email}`} className='text-secondary px-2 py-1 rounded-full text-sm border border-white/[0.2]'>{socials.email}
                        </a>
                    )}
                    </div>
                </div>
                </div>
                <div>
                    <p className="flex justify-center text-md mt-10 max-w-sm">"{quote}"</p>
                </div>
            </div> 
        )}
    </div>
    );
};

export default OfficerCard;