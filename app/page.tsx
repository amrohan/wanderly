import { Input } from "@heroui/input";

import { title, subtitle } from "@/components/primitives";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title()}>Explore&nbsp;</span>
        <span className={title({ color: "violet" })}>the world&nbsp;</span>
        <br />
        <span className={title()}>and uncover its wonders.</span>
        <div className={subtitle({ class: "my-4" })}>
          Search for any place and discover what it has to offer – adventure,
          food, history, and more.
        </div>
        <Input
          endContent={<SearchIcon className="text-default-600" />}
          placeholder="Search for a place..."
          size="lg"
        />
      </div>
    </section>
  );
}

export const SearchIcon = (props: any) => {
  return (
    <svg
      className="lucide lucide-search"
      fill="none"
      height="24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
};
