import React, { useState, useEffect, useMemo } from 'react';
import { ArrowLeft, X, ChevronLeft, ChevronRight, Image as ImageIcon, Maximize2 } from 'lucide-react';
import galleryManifestMergedAdditions from '../lib/galleryManifest.merged_additions';
import ImageWithWatermark from './ImageWithWatermark';

const mergedManifestSource: Record<string, string[]> = {
  ...(galleryManifestMergedAdditions as Record<string, string[]> || {})
};

type Album = {
  name: string;
  images: string[];
  cover: string;
  count: number;
  description: string;
};

const mission = "Our mission is to rescue, protect and empower vulnerable children and women — providing a safe haven, stabilizing care and pathways to long-term wellbeing.";
const vision = "We envision communities where every child grows up free from harm, with access to education, health and opportunity.";

// Generate contextual descriptions based on album name
const generateAlbumDescription = (albumName: string): string => {
  const name = albumName.toLowerCase();
  
  const descriptions: Record<string, string> = {
    'girlie camp': 'Empowering young girls through education, mentorship and alternative rites of passage programs.',
    'boundaries': 'Teaching women about healthy relationships, self-worth and personal boundaries.',
    'feed a granny': 'Supporting elderly community members with food, healthcare and companionship.',
    'christmas': 'Spreading joy and hope during the holiday season with gifts and celebrations.',
    'teen mom': 'Supporting young mothers with education, childcare and life skills training.',
    'safe haven': 'Providing shelter, safety and rehabilitation for women and children escaping violence.',
    'schooling': 'Ensuring every child has access to quality education and school supplies.',
    'community': 'Building stronger, more resilient communities through outreach and support.',
    'workshops': 'Educational workshops focused on empowerment, health and personal development.',
    'events': 'Community gatherings and special events that bring hope and connection.',
    'volunteers': 'Dedicated volunteers making a difference in the lives of vulnerable families.',
    'construction': 'Building safe spaces and facilities to expand our reach and impact.',
    'health': 'Providing essential healthcare services and education to underserved communities.',
    'education': 'Creating pathways to learning and opportunity for children and adults.',
    'empowerment': 'Programs designed to help women and children discover their strength and potential.'
  };
  
  // Check for keyword matches
  for (const [keyword, desc] of Object.entries(descriptions)) {
    if (name.includes(keyword)) {
      return desc;
    }
  }
  
  // Default description
  return `Moments captured from our ${albumName} program, showcasing the impact of community support and empowerment.`;
};

const Gallery: React.FC = () => {
  const manifestSource: Record<string, string[]> = mergedManifestSource;

  const normalizedManifest = useMemo(() => {
    const out: Record<string, string[]> = {};
    Object.entries(manifestSource).forEach(([name, images]) => {
      out[name] = (images || [])
        .filter(Boolean)
        .map(i => (typeof i === 'string' ? i : String(i)));
    });
    return out;
  }, [manifestSource]);

  const staticAlbums: Album[] = Object.entries(normalizedManifest).map(([name, images]) => ({
    name,
    images,
    cover: images[0],
    count: images.length,
    description: generateAlbumDescription(name)
  }));

  const [albums] = useState<Album[]>(staticAlbums);
  const [loading] = useState(false);
  const [loadError] = useState<string | null>(albums.length ? null : 'No gallery images found. Ensure src/lib/galleryManifest.ts or src/lib/galleryManifest.json is populated with correct image paths.');
  const [openAlbumIndex, setOpenAlbumIndex] = useState<number | null>(null);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);

  const triedRequirePathsState: string[] = [];
  const triedGlobPatternsState: string[] = [];
  const rawModuleKeys: string[] = [];
  const discoveredAlbumsDebug: { name: string; count: number; sample: string[] }[] = [];

  const openAlbum = (index: number) => {
    if (index < 0 || index >= albums.length) return;
    setOpenAlbumIndex(index);
    setLightboxIndex(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const closeAlbum = () => setOpenAlbumIndex(null);

  const openLightbox = (idx: number) => {
    setLightboxIndex(idx);
    setImageLoaded(false);
  };
  
  const closeLightbox = () => {
    setLightboxIndex(null);
    setImageLoaded(false);
  };
  
  const showPrev = () => {
    if (openAlbumIndex === null || lightboxIndex === null) return;
    const images = albums[openAlbumIndex]?.images ?? [];
    if (!images.length) return;
    const len = images.length;
    setLightboxIndex((lightboxIndex - 1 + len) % len);
    setImageLoaded(false);
  };
  
  const showNext = () => {
    if (openAlbumIndex === null || lightboxIndex === null) return;
    const images = albums[openAlbumIndex]?.images ?? [];
    if (!images.length) return;
    const len = images.length;
    setLightboxIndex((lightboxIndex + 1) % len);
    setImageLoaded(false);
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
    <section className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Hero Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-akina-purple to-akina-orange rounded-3xl mb-6 shadow-xl">
            <ImageIcon className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-akina-purple to-akina-orange bg-clip-text text-transparent">
            Our Gallery
          </h1>
          <div className="max-w-3xl mx-auto space-y-3">
            <p className="text-lg text-gray-700 leading-relaxed">{mission}</p>
            <p className="text-lg text-gray-700 leading-relaxed">{vision}</p>
          </div>
        </header>

        {/* Loading / Error states */}
        {loading && (
          <div className="py-20 text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-200 border-t-akina-purple"></div>
            <p className="mt-4 text-gray-600">Loading gallery...</p>
          </div>
        )}
        
        {!loading && loadError && (
          <div className="max-w-2xl mx-auto py-6 px-6 bg-red-50 border border-red-200 rounded-2xl text-center">
            <p className="text-red-600">{loadError}</p>
          </div>
        )}

        {/* Debug panel */}
        {(!loading && (albums.length === 0 || loadError)) && (
          <div className="mb-8 p-6 bg-yellow-50 border border-yellow-200 rounded-2xl shadow-sm">
            <div className="font-semibold mb-3 text-yellow-800">Gallery Debug Information</div>
            <div className="space-y-2 text-sm text-yellow-700">
              <div><strong>Tried require.context paths:</strong> {triedRequirePathsState.length ? triedRequirePathsState.join(', ') : 'none'}</div>
              <div><strong>Tried glob patterns:</strong> {triedGlobPatternsState.length ? triedGlobPatternsState.join(', ') : 'none'}</div>
              <div><strong>Discovered module keys (sample):</strong></div>
              <ul className="list-disc ml-6 max-h-40 overflow-auto text-xs">
                {rawModuleKeys.length ? rawModuleKeys.map((k, i) => <li key={i}>{k}</li>) : <li>none</li>}
              </ul>
              <div><strong>Albums found:</strong></div>
              <ul className="ml-6 list-disc text-xs">
                {discoveredAlbumsDebug.length ? discoveredAlbumsDebug.map(a => (
                  <li key={a.name}>{a.name} — {a.count} images — sample: {a.sample.join(', ')}</li>
                )) : <li>none</li>}
              </ul>
              <div className="mt-3 text-xs text-yellow-600">
                If no modules were discovered, confirm images are placed under src/assets/gallery/[AlbumName]/image.jpg and that your bundler includes them.
              </div>
            </div>
          </div>
        )}

        {/* Album grid */}
        {openAlbumIndex === null ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {albums.map((album, i) => (
              <article 
                key={album.name} 
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <button
                    type="button"
                    onClick={() => openAlbum(i)}
                    className="block w-full h-64 focus:outline-none focus:ring-2 focus:ring-akina-purple focus:ring-offset-2 rounded-t-3xl"
                    aria-label={`Open album ${album.name}`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>
                    <ImageWithWatermark
                      src={album.cover}
                      alt={`${album.name} cover`}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Floating badge */}
                    <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-akina-purple px-4 py-2 rounded-full text-sm font-semibold shadow-lg z-20 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4" />
                      {album.count}
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-akina-purple/0 group-hover:bg-akina-purple/20 transition-all duration-300 z-20 flex items-center justify-center">
                      <div className="transform scale-0 group-hover:scale-100 transition-transform duration-300">
                        <Maximize2 className="w-12 h-12 text-white" />
                      </div>
                    </div>
                  </button>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-akina-purple transition-colors duration-300">
                    {album.name}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-2">
                    {album.description}
                  </p>
                  <button 
                    onClick={() => openAlbum(i)} 
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-akina-purple to-akina-orange text-white px-6 py-2.5 rounded-full font-medium shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                  >
                    View Album
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </article>
            ))}
            {(!loading && albums.length === 0) && (
              <div className="col-span-full text-center py-20">
                <ImageIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-gray-600">No albums found.</p>
              </div>
            )}
          </div>
        ) : (
          // Album view
          <div className="animate-fadeIn">
            {openAlbumIndex !== null && !albums[openAlbumIndex] && (
              <div className="py-20 text-center text-gray-600">Album not available.</div>
            )}
            {openAlbumIndex !== null && albums[openAlbumIndex] && (
              <div>
                {/* Album header */}
                <div className="bg-white rounded-3xl shadow-xl p-8 mb-8">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex-1">
                      <h2 className="text-4xl font-bold text-gray-900 mb-3">
                        {albums[openAlbumIndex].name}
                      </h2>
                      <p className="text-gray-600 leading-relaxed">
                        {albums[openAlbumIndex].description}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
                        <ImageIcon className="w-4 h-4" />
                        <span>{albums[openAlbumIndex].count} photos</span>
                      </div>
                    </div>
                    <button 
                      onClick={closeAlbum} 
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-all duration-300 transform hover:scale-105"
                    >
                      <ArrowLeft className="w-5 h-5" />
                      Back to Albums
                    </button>
                  </div>
                </div>

                {/* Images grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {albums[openAlbumIndex].images.map((src, idx) => (
                    <div 
                      key={src} 
                      className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1"
                    >
                      <button 
                        onClick={() => openLightbox(idx)} 
                        className="block w-full h-56 focus:outline-none focus:ring-2 focus:ring-akina-purple focus:ring-offset-2 rounded-2xl"
                      >
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 z-10 flex items-center justify-center">
                          <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                        </div>
                        <ImageWithWatermark
                          src={src}
                          alt={`${albums[openAlbumIndex].name} ${idx + 1}`}
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
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
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn">
            <div className="relative max-w-7xl w-full h-full flex flex-col p-4">
              {/* Close button */}
              <button 
                onClick={closeLightbox} 
                className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-3 transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Navigation buttons */}
              <button 
                onClick={showPrev} 
                className="absolute left-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110 hidden md:block focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <button 
                onClick={showNext} 
                className="absolute right-6 top-1/2 -translate-y-1/2 z-50 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110 hidden md:block focus:outline-none focus:ring-2 focus:ring-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Image container */}
              <div className="flex-1 flex items-center justify-center p-4 md:p-12">
                {!imageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-4 border-white/20 border-t-white"></div>
                  </div>
                )}
                <img 
                  src={albums[openAlbumIndex].images[lightboxIndex]} 
                  alt={`${albums[openAlbumIndex].name} ${lightboxIndex + 1}`}
                  className="max-h-full max-w-full object-contain rounded-2xl shadow-2xl"
                  onLoad={() => setImageLoaded(true)}
                  style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s' }}
                />
              </div>

              {/* Info bar */}
              <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{albums[openAlbumIndex].name}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Photo {lightboxIndex + 1} of {albums[openAlbumIndex].count}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button 
                      onClick={showPrev} 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-full font-medium transition-all duration-300"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span className="hidden sm:inline">Previous</span>
                    </button>
                    <button 
                      onClick={showNext} 
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-akina-purple to-akina-orange text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      <span className="hidden sm:inline">Next</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
      `}</style>
    </section>
  );
};

export default Gallery;