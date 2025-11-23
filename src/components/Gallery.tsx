import React, { useState, useEffect, useMemo } from 'react';
// Prefer the bundled TS manifest (uses require(...) so images are included in the build).
// Fallback to the JSON manifest (public URLs) if TS manifest isn't present or is empty.
import galleryManifestMergedAdditions from '../lib/galleryManifest.merged_additions';


const mergedManifestSource: Record<string, string[]> = {
  ...(galleryManifestMergedAdditions as Record<string, string[]> || {})
};
// Use only the TS manifests to avoid fallback to JSON manifest that has incorrect paths

type Album = {
  name: string;
  images: string[];
  cover: string;
  count: number;
  description: string;
};

const mission = "Our mission is to rescue, protect and empower vulnerable children and women — providing a safe haven, stabilizing care and pathways to long-term wellbeing.";
const vision = "We envision communities where every child grows up free from harm, with access to education, health and opportunity.";

const Gallery: React.FC = () => {
  // Use merged manifest without fallback to JSON manifest
  const manifestSource: Record<string, string[]> = mergedManifestSource;

  // Normalize manifest: remove falsy entries and coerce values to strings.
  const normalizedManifest = useMemo(() => {
    const out: Record<string, string[]> = {};
    Object.entries(manifestSource).forEach(([name, images]) => {
      // Debug log album and images
      console.log(`Gallery album: ${name} with ${images?.length ?? 0} images.`);
      console.log('Sample images:', Array.isArray(images) ? images.slice(0, 3) : images);
      out[name] = (images || [])
        .filter(Boolean)
        .map(i => (typeof i === 'string' ? i : String(i)));
    });
    return out;
  }, [manifestSource]);

  // Build albums from the normalized manifest
  const staticAlbums: Album[] = Object.entries(normalizedManifest).map(([name, images]) => ({
    name,
    images,
    cover: images[0],
    count: images.length,
    description: `${name} — images from our work: rescue, care and community support. ${mission} ${vision}`
  }));

  const [albums] = useState<Album[]>(staticAlbums);
  const [loading] = useState(false);
  const [loadError] = useState<string | null>(albums.length ? null : 'No gallery images found. Ensure src/lib/galleryManifest.ts or src/lib/galleryManifest.json is populated with correct image paths.');
  const [openAlbumIndex, setOpenAlbumIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Debug placeholders for environments where dynamic discovery isn't used.
  // These are intentionally simple arrays so the debug panel can render safely.
  const triedRequirePathsState: string[] = [];
  const triedGlobPatternsState: string[] = [];
  const rawModuleKeys: string[] = [];
  const discoveredAlbumsDebug: { name: string; count: number; sample: string[] }[] = [];

  // album view helpers
  const openAlbum = (index: number) => {
    // guard index bounds
    if (index < 0 || index >= albums.length) return;
    setOpenAlbumIndex(index);
    setLightboxIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const closeAlbum = () => setOpenAlbumIndex(null);

  // lightbox helpers
  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const showPrev = () => {
    if (openAlbumIndex === null || lightboxIndex === null) return;
    const images = albums[openAlbumIndex]?.images ?? [];
    if (!images.length) return;
    const len = images.length;
    setLightboxIndex((lightboxIndex - 1 + len) % len);
  };
  const showNext = () => {
    if (openAlbumIndex === null || lightboxIndex === null) return;
    const images = albums[openAlbumIndex]?.images ?? [];
    if (!images.length) return;
    const len = images.length;
    setLightboxIndex((lightboxIndex + 1) % len);
  };

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightboxIndex, openAlbumIndex, albums]);

  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-akina-purple mb-3">Gallery</h1>
        <p className="text-akina-brown max-w-3xl mb-3">{mission}</p>
        <p className="text-akina-brown max-w-3xl">{vision}</p>
      </header>

      {/* Loading / Error states to avoid white screen */}
      {loading && (
        <div className="py-12 text-center text-gray-600">Loading gallery...</div>
      )}
      {!loading && loadError && (
        <div className="py-6 text-center text-sm text-red-600">{loadError}</div>
      )}

      {/* Debug panel (visible when no albums or when loadError present) */}
      {(!loading && (albums.length === 0 || loadError)) && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded text-sm">
          <div className="font-medium mb-2">Gallery debug info</div>
          <div className="mb-2"><strong>Tried require.context paths:</strong> {triedRequirePathsState.length ? triedRequirePathsState.join(', ') : 'none'}</div>
          <div className="mb-2"><strong>Tried glob patterns:</strong> {triedGlobPatternsState.length ? triedGlobPatternsState.join(', ') : 'none'}</div>
          <div className="mb-2"><strong>Discovered module keys (sample):</strong></div>
          <ul className="list-disc ml-6 mb-2 max-h-40 overflow-auto text-xs">
            {rawModuleKeys.length ? rawModuleKeys.map((k, i) => <li key={i}>{k}</li>) : <li>none</li>}
          </ul>
          <div><strong>Albums found:</strong></div>
          <ul className="ml-6 list-disc text-xs">
            {discoveredAlbumsDebug.length ? discoveredAlbumsDebug.map(a => (
              <li key={a.name}>{a.name} — {a.count} images — sample: {a.sample.join(', ')}</li>
            )) : <li>none</li>}
          </ul>
          <div className="mt-2 text-xs text-gray-600">
            If no modules were discovered, confirm images are placed under src/assets/gallery/[AlbumName]/image.jpg and that your bundler includes them. If images are in public/, move them to src/ or import them explicitly.
          </div>
        </div>
      )}

      {/* Album grid (Google-Photos-like) */}
      {openAlbumIndex === null ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {albums.map((album, i) => (
            <article key={album.name} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200">
              <div className="relative">
                <button
                  type="button"
                  onClick={() => openAlbum(i)}
                  className="block w-full h-56 focus:outline-none"
                  aria-label={`Open album ${album.name}`}
                >
                  <img
                    src={album.cover}
                    alt={`${album.name} cover`}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </button>

                <div className="absolute top-3 left-3 bg-black/40 text-white px-2 py-1 rounded text-sm">
                  {album.count} photos
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between">
                  <div className="pr-4">
                    <h3 className="text-lg font-semibold text-akina-purple">{album.name}</h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">{album.description}</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button onClick={() => openAlbum(i)} className="bg-akina-orange text-white px-3 py-1 rounded-full text-sm">Open</button>
                  </div>
                </div>
              </div>
            </article>
          ))}
          {(!loading && albums.length === 0) && (
            <div className="col-span-full text-center text-gray-600 py-8">No albums found.</div>
          )}
        </div>
      ) : (
        // Album view with images grid
        <div>
          {/* guard against invalid index */}
          {openAlbumIndex !== null && !albums[openAlbumIndex] && (
            <div className="py-8 text-center text-gray-600">Album not available.</div>
          )}
          {openAlbumIndex !== null && albums[openAlbumIndex] && (
           <div>
             <div className="flex items-center justify-between mb-6">
               <div>
                <h2 className="text-2xl font-bold text-akina-purple">{albums[openAlbumIndex].name}</h2>
                <p className="text-sm text-gray-600">{albums[openAlbumIndex].description}</p>
               </div>
               <div className="flex gap-3">
                 <button onClick={closeAlbum} className="px-4 py-2 border rounded-md">Back to albums</button>
               </div>
             </div>
 
             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {albums[openAlbumIndex].images.map((src, idx) => (
                <div key={src} className="relative group bg-white rounded overflow-hidden">
                  <button onClick={() => openLightbox(idx)} className="block w-full h-40 sm:h-48 focus:outline-none">
                    <img src={src} alt={`${albums[openAlbumIndex].name} ${idx + 1}`} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  </button>
                </div>
              ))}
             </div>
           </div>
          )}
         </div>
       )}

       {/* Lightbox */}
       {openAlbumIndex !== null && lightboxIndex !== null && albums[openAlbumIndex] && (
         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 px-4">
           <div className="relative max-w-5xl w-full bg-black rounded-lg overflow-hidden">
             <button onClick={closeLightbox} className="absolute top-3 right-3 text-white bg-black/50 rounded-full p-2">✕</button>
             <div className="flex items-center gap-4">
               <button onClick={showPrev} className="p-3 text-white hidden md:block">◀</button>
               <div className="flex-1 flex items-center justify-center p-6 bg-black">
                <img src={albums[openAlbumIndex].images[lightboxIndex]} alt="" className="max-h-[80vh] object-contain" />
               </div>
               <button onClick={showNext} className="p-3 text-white hidden md:block">▶</button>
             </div>
 
             <div className="p-4 bg-white">
               <div className="flex items-center justify-between">
                 <div>
                  <h3 className="text-lg font-semibold text-akina-purple">{albums[openAlbumIndex].name}</h3>
                  <p className="text-sm text-gray-700 mt-1">Photo {lightboxIndex + 1} of {albums[openAlbumIndex].count}</p>
                 </div>
                 <div className="flex gap-2">
                   <button onClick={showPrev} className="px-3 py-1 border rounded">Previous</button>
                   <button onClick={showNext} className="px-3 py-1 bg-akina-purple text-white rounded">Next</button>
                 </div>
               </div>
               <p className="text-sm text-gray-600 mt-3">{albums[openAlbumIndex].description}</p>
             </div>
           </div>
         </div>
       )}
     </section>
   );
 };

 export default Gallery;
