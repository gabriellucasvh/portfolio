import Navbar from '@/components/Navbar';
import ToggleThemeButton from '@/components/ToggleThemeButton';
import WithLoader from '@/components/WithLoader';
export default function Home() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen font-geistSans select-none">
        <WithLoader>
        <Navbar />
        <ToggleThemeButton />
        </WithLoader>
    </div>
  );
}
