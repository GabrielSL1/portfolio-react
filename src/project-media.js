// Real assets only. Paths are relative to public/; no video is requested until configured.
export const flowPdfMedia = {
  title: 'FlowPDF',
  site: 'https://final-blue-eight.vercel.app/login',
  video: 'videos/flowpdf-preview.mp4',
  poster: 'images/flowpdf-preview.jpg',
  posterAlt: 'PDF de demonstração aberto no FlowPDF, com classificação e palavras-chave ao lado',
  posterKind: 'screenshot',
  posterWidth: 1440,
  posterHeight: 900,
  description: 'Prévia real da busca, leitura e classificação de um PDF de demonstração.',
  captions: null, // Optional Portuguese WebVTT captions for a recording containing speech.
};

export const mediaPath = (path) => `${import.meta.env.BASE_URL}${path}`;
