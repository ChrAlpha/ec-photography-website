import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Photo } from '@prisma/client'

import SiteGrid from '@/components/SiteGrid'
import ImageLarge from '@/components/ImageLarge'

const PhotoLarge =
({
  photo,
  tag,
  priority,
  prefetchShare,
  shouldScrollOnShare,
}: {
  photo: Photo
  tag?: string
  priority?: boolean
  prefetchShare?: boolean
  shouldScrollOnShare?: boolean
}) => {

  const renderMiniGrid = (children: JSX.Element) =>
    <div className={cn(
      'flex gap-y-4',
      'flex-col sm:flex-row md:flex-col',
      '[&>*]:sm:flex-grow',
      'pr-2',
    )}>
      {children}
    </div>;

  return (
    <SiteGrid
      contentMain={
        <ImageLarge
          className="w-full"
          alt={photo.title}
          src={photo.imageUrl}
          aspectRatio={photo.aspectRatio}
          priority={priority}
        />}
      contentSide={
        <div className={cn(
          'sticky top-4 self-start',
          'grid grid-cols-2 md:grid-cols-1',
          'gap-y-4',
          '-translate-y-1',
          'mb-4',
        )}>
          {renderMiniGrid(<>
            {/* TITLT  */}
            <div>
              <Link
                href=''
                className="font-bold uppercase"
              >
                {photo.title}
              </Link>
            </div>
            {/* CARMRA  */}
            <div className="uppercase">
              {photo.cameraMake} {photo.cameraModel}
            </div>
          </>)}
          {renderMiniGrid(<>
            <ul className={cn(
              'text-gray-500',
              'dark:text-gray-400',
            )}>
              <li>
                {photo.focalLength}
                {' '}
                <span className={cn(
                  'text-gray-400/80',
                  'dark:text-gray-400/50',
                )}>
                  {photo.focalLengthIn35mmFilm}
                </span>
              </li>
              <li>{photo.fNumber}</li>
              <li>{photo.iso}</li>
              <li>{photo.shutterSpeed}</li>
              <li>{photo.latitude ?? '—'}</li>
            </ul>
            <div className={cn(
              'flex gap-y-4',
              'flex-col sm:flex-row md:flex-col',
            )}>
              <div className={cn(
                'grow uppercase',
                'text-gray-500',
                'dark:text-gray-400',
              )}>
                {photo.timestamp}
              </div>
              <div className="-translate-x-0.5">
                
              </div>
            </div>
          </>)}
        </div>}
    />
  )
}

export default PhotoLarge
