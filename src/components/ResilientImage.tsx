import { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#FBF1F4] via-[#FFF9F4] to-[#F3E5DC] text-[#5E5054] p-6 text-center ${className}`}
      >
        <Sparkles className="w-6 h-6 text-[#C9A46A] mb-2" aria-hidden="true" />
        <span className="font-display text-lg text-[#30262A]">
          {fallbackTitle || 'Shravani Salon & Spa'}
        </span>
        <span className="text-xs text-[#76666A] mt-1">Image preview unavailable</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
