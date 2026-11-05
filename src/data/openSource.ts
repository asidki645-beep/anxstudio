export interface OpenSourceResource {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  githubUrl: string;
}

export const OPEN_SOURCE_RESOURCES: readonly OpenSourceResource[] = [
  {
    slug: 'voicestudio',
    title: 'VoiceStudio',
    subtitle: 'A Free Alternative to ElevenLabs',
    description:
      'VoiceStudio is presented as a free alternative to ElevenLabs. Use this page to continue to the project\'s latest release on GitHub.',
    image: '/images/voicestudio-cover.png',
    imageAlt:
      'VoiceStudio cover with a microphone, an audio waveform, and the text A Free Alternative to ElevenLabs',
    imageWidth: 1536,
    imageHeight: 1024,
    githubUrl: 'https://github.com/debpalash/VoiceStudio/releases/latest',
  },
];

export const VOICESTUDIO = OPEN_SOURCE_RESOURCES[0];
