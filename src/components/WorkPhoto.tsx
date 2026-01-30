type WorkPhotoData = {
  src: string;
  alt: string;
  className: string;
};

const WorkPhoto = ({ src, alt, className }: WorkPhotoData) => {
  return (
    <div
      className={`w-full max-w-[480px] aspect-[480/384] rounded-xl overflow-hidden ${className}`}
    >
      <img src={src} alt={alt} className="w-full h-full object-cover" />
    </div>
  );
};

export default WorkPhoto;
