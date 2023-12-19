"use client";
import { getTheme, themes } from "@/lib/themes";

export default function ThemeSwitch() {
  const changeTheme = (theme: string) => {
    const themeStyles = getTheme(theme);
    Object.entries(themeStyles).forEach(([key, value]: any) => {
      document.documentElement.style.setProperty(
        key === "colorScheme" ? "color-scheme" : key,
        value
      );
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.remove("system");
      document.documentElement.classList.add(
        themeStyles["colorScheme"] || "light"
      );
    });
  };
  return (
    <div className="h-[400px] overflow-y-auto flex flex-col gap-2 scrollbar-thin scrollbar-thumb-primary scrollbar-track-white pr-2">
      {Object.entries(themes).map(([theme]) => {
        const styleProps = getTheme(theme);

        return (
          <button
            onClick={() => changeTheme(theme)}
            style={styleProps}
            key={theme}
          >
            <div className="border-base-content/20 hover:border-base-content/40 overflow-hidden rounded-lg border outline outline-2 outline-offset-2 outline-transparent">
              <div
                data-theme={theme}
                className="bg-base-100 text-base-content w-full font-sans"
              >
                <div className="grid grid-cols-5 grid-rows-3">
                  <div className="bg-base-200 col-start-1 row-span-2 row-start-1" />
                  <div className="bg-base-300 col-start-1 row-start-3" />
                  <div className="bg-base-100 col-span-4 col-start-2 row-span-3 row-start-1 flex flex-col gap-1 p-2">
                    <div className="font-bold text-left capitalize">
                      {theme}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      <div className="bg-primary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-primary-content text-sm font-bold">
                          A
                        </div>
                      </div>
                      <div className="bg-secondary flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-secondary-content text-sm font-bold">
                          A
                        </div>
                      </div>
                      <div className="bg-accent flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-accent-content text-sm font-bold">
                          A
                        </div>
                      </div>
                      <div className="bg-neutral flex aspect-square w-5 items-center justify-center rounded lg:w-6">
                        <div className="text-neutral-content text-sm font-bold">
                          A
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
