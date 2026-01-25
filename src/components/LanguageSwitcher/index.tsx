import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { useTranslation } from 'react-i18next';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const LANGUAGES = {
    'pt-BR': {
        label: 'PT',
        flag: '🇧🇷',
        name: 'Português',
    },
    en: {
        label: 'EN',
        flag: '🇺🇸',
        name: 'English',
    },
} as const;

type Lang = keyof typeof LANGUAGES;

export function LanguageSwitcher() {
    const { lang } = useParams<{ lang?: Lang }>();
    const navigate = useNavigate();
    const { i18n } = useTranslation();

    const currentLang: Lang = lang && lang in LANGUAGES ? lang : 'en';

    function changeLanguage(newLang: Lang) {
        navigate(`/${newLang}`, { replace: true });
    }

    useEffect(() => {
        i18n.changeLanguage(currentLang);
        document.documentElement.lang = currentLang;
    }, [currentLang, i18n]);

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant="outline"
                    size="icon"
                    className="border-primary/50 bg-background/50 hover:bg-primary hover:border-primary hover:text-primary-foreground h-9 w-9 rounded-full p-0 transition-all duration-300"
                >
                    <span className="text-primary hover:text-primary-foreground flex h-full w-full items-center justify-center text-lg leading-none">
                        {LANGUAGES[currentLang].flag}
                    </span>
                </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
                {(Object.keys(LANGUAGES) as Lang[]).map((key) => (
                    <DropdownMenuItem
                        key={key}
                        onClick={() => changeLanguage(key)}
                        className="flex items-center gap-2"
                    >
                        <span>{LANGUAGES[key].flag}</span>
                        <span>{LANGUAGES[key].name}</span>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
