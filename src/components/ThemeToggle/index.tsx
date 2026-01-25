import { Moon, Sun, Laptop } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useTheme } from '@/providers';
import { Activity } from 'react';

interface IProps {
    isExpanded?: boolean;
}

export function ThemeToggle({ isExpanded = false }: IProps) {
    const { theme, setTheme } = useTheme();

    const icon =
        theme === 'light' ? (
            <Sun className="h-4 w-4" />
        ) : theme === 'dark' ? (
            <Moon className="h-4 w-4" />
        ) : (
            <Laptop className="h-4 w-4" />
        );

    return (
        <DropdownMenu>
            <Activity mode={isExpanded ? 'visible' : 'hidden'}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="hover:text-primary-foreground hover:bg-primary text-primary w-full"
                    >
                        {icon}
                    </Button>
                </DropdownMenuTrigger>
            </Activity>

            <Activity mode={!isExpanded ? 'visible' : 'hidden'}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        size="icon"
                        className="hover:text-primary-foreground hover:bg-primary rounded-full"
                    >
                        {icon}
                    </Button>
                </DropdownMenuTrigger>
            </Activity>

            <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme('light')}>
                    <Sun className="mr-2 h-4 w-4" />
                    Light
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme('dark')}>
                    <Moon className="mr-2 h-4 w-4" />
                    Dark
                </DropdownMenuItem>

                <DropdownMenuItem onClick={() => setTheme('system')}>
                    <Laptop className="mr-2 h-4 w-4" />
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
