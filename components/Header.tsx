import Logo from "./Logo";

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        <a
          href="https://github.com/saasitech/saasi"
          target="_blank"
          rel="noreferrer"
        >
          <Logo className="w-[100px] h-[50px] light:text-black dark:text-white" />
        </a>
      </div>
      <h1 className="text-2xl lg:text-3xl !leading-tight mx-auto max-w-xl text-center font-extralight">
        <span className="font-bold hover:underline">Create</span> and test
        multiple strategies to unlock the most{" "}
        <span className="font-bold hover:underline">optimal pricing</span> for
        your SaaS startup
      </h1>
    </div>
  );
}
