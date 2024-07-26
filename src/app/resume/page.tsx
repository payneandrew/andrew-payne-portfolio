import Link from "next/link";

export default function Resume() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between md:p-24 p-6 bg-home-gradient">
      <div className="flex flex-col justify-center items-center gap-4">
        <Link
          href={"/resume-july-2024.pdf"}
          className="p-2 items-center justify-center overflow-hidden rounded border-2 border-solid border-daisyPurple-800 bg-daisyPurple-800 font-semibold text-white duration-300 ease-linear hover:bg-white hover:text-daisyPurple-800 flex"
        >
          Download Resume
        </Link>
        <div className="md:flex hidden">{/* <ResumeViewer /> */}</div>
      </div>
    </main>
  );
}
