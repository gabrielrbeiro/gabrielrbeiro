import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>('/src/assets/images/*.{jpg,jpeg,png,gif,webp}');
function imageResolver(file: string): Promise<{ default: ImageMetadata }> {
  const key = `/src/assets/images/${file}`;
  return images[key]();
}

export default imageResolver;
