import { Shield, Dumbbell, CircleDot, Film, Guitar } from 'lucide-react';
export const mediaItems_data = [
    {
        type: 'image' as const,
        src: '/personal/apresentacao-final-pibiti.webp',
        captionKey: 'personal.media.pibiti',
    },
    {
        type: 'image' as const,
        src: '/personal/csbc.webp',
        captionKey: 'personal.media.csbc',
    },
    {
        type: 'image' as const,
        src: '/personal/hackathon-hack-massa.webp',
        captionKey: 'personal.media.hackathon',
    },
    {
        type: 'image' as const,
        src: '/personal/projeto-de-extensao-conexao-consciente.webp',
        captionKey: 'personal.media.extension',
    },
    {
        type: 'image' as const,
        src: '/personal/jiu-jitsu.webp',
        captionKey: 'personal.media.jiujitsu',
    },
    {
        type: 'video' as const,
        src: '/personal/basketball.mp4',
        captionKey: 'personal.media.basketball',
    },
    {
        type: 'video' as const,
        src: '/personal/violao.mp4',
        captionKey: 'personal.media.guitar',
    },
];

export const hobbies_data = [
    {
        icon: Shield,
        key: 'jiujitsu',
        color: 'from-red-500/15 to-rose-500/10',
        iconColor: 'text-red-500',
    },
    {
        icon: Guitar,
        key: 'music',
        color: 'from-purple-500/15 to-pink-500/10',
        iconColor: 'text-purple-500',
    },
    {
        icon: CircleDot,
        key: 'basketball',
        color: 'from-orange-500/15 to-amber-500/10',
        iconColor: 'text-orange-500',
    },
    {
        icon: Dumbbell,
        key: 'volleyball',
        color: 'from-blue-500/15 to-cyan-500/10',
        iconColor: 'text-blue-500',
    },
    {
        icon: Film,
        key: 'movies',
        color: 'from-slate-500/15 to-zinc-500/10',
        iconColor: 'text-slate-500',
    },
];
