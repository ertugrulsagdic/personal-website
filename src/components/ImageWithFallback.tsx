'use client';

import type { FC } from 'react';
import { useState } from 'react';

import Image from 'next/image';
import type { ImageProps } from 'next/image';

type ImageWithFallbackProps = ImageProps & {
  src: string;
  alt: string;
};

export const ImageWithFallback: FC<ImageWithFallbackProps> = ({
  src,
  alt,
  ...props
}) => {
  const [show, setShow] = useState(true);
  return (
    <Image
      {...props}
      alt={alt}
      src={src}
      onError={() => {
        return setShow(false);
      }}
      className={show ? '' : 'hidden'}
    />
  );
};