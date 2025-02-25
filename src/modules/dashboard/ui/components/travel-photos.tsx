import BlurImage from "@/components/blur-image";
import { Photo } from "@/db/schema/photos";

interface TravelPhotosProps {
  data: {
    coverPhoto: Photo;
    photos: Photo[];
  };
}

export const TravelPhotos = ({ data }: TravelPhotosProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 w-full border-r">
      {data.photos.slice(0, 4).map((photo: Photo) => (
        <div
          key={photo.id}
          className="flex items-center justify-between backdrop-blur-sm border-b last:border-b-0 px-4"
        >
          <div className="flex flex-col gap-1">
            <h3 className="font-medium text-sm">{photo.title}</h3>
            <p className="text-xs text-muted-foreground">
              {photo.city}, {photo.country}
            </p>
          </div>
          <div className="relative h-16 aspect-[4/3] overflow-hidden">
            <BlurImage
              src={photo.url}
              alt={photo.title}
              fill
              className="object-cover"
              blurhash={photo.blurData}
            />
          </div>
        </div>
      ))}
    </div>
  );
};
