import Image from "next/image";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex gap-3">
      <Link href="https://www.linkedin.com/in/andrewpayne64">
        <div className="transition-transform hover:scale-125">
          <Image
            src="/icons8-linkedin.svg"
            alt="linkedin icon"
            width={30}
            height={30}
          />
        </div>
      </Link>
      <Link href="https://github.com/payneandrew">
        <div className="transition-transform hover:scale-125">
          <Image
            src="/icons8-github.svg"
            alt="github icon"
            width={30}
            height={30}
          />
        </div>
      </Link>

      <Link href="/say-hello">
        <div className="transition-transform hover:scale-125">
          <Image
            src="/icons8-email.png"
            alt="email icon"
            width={30}
            height={30}
          />
        </div>
      </Link>
    </div>
  );
}
