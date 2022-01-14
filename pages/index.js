import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Discord Clone</title>
        <link rel="icon" href="favicon.ico" />
      </Head>
      <div className="h-screen bg-[#404eed] flex flex-col">
        <header className="bg-[#404eed] flex items-center justify-between pt-4 flex-shrink-0">
          <section id="discord-logo" className="ml-20">
            <Image
              src="/icons/discord.svg"
              width="124"
              height="34"
              alt="discord logo"
              className="text-white"
            />
          </section>
          <nav id="nav-links" className="space-x-10">
            <Link href="/">
              <a className="text-white font-semibold hover:underline">
                Download
              </a>
            </Link>
            <Link href="/">
              <a className="text-white font-semibold hover:underline">Nitro</a>
            </Link>
            <Link href="/">
              <a className="text-white font-semibold hover:underline">Safety</a>
            </Link>
            <Link href="/">
              <a className="text-white font-semibold hover:underline">
                Support
              </a>
            </Link>
            <Link href="/">
              <a className="text-white font-semibold hover:underline">Blog</a>
            </Link>
            <Link href="/">
              <a className="text-white font-semibold hover:underline">
                Careers
              </a>
            </Link>
          </nav>
          <section id="login" className="mr-20">
            <button className="rounded-full p-3">
              <a className="bg-white px-4 py-2 rounded-full hover:shadow-xl hover:text-[#404eed]">
                Login
              </a>
            </button>
          </section>
        </header>
        <main className="bg-[#404eed] relative mt-24 flex-grow overflow-hidden">
          <div className="absolute bottom-0 -left-20 object-none">
            <Image
              src="/img/landing-0.svg"
              width="2560"
              height="626"
              alt="bg -1"
              className="hidden"
            />
          </div>

          <section className="text-white text-center flex flex-col max-w-3xl mx-auto">
            <h2 className="font-Ginto text-6xl bg-local">IMAGINE A PLACE...</h2>
            <p className="font-sans text-lg mt-12 leading-9">
              ...where you can belong to a school club, a gaming group, or a
              worldwide art community. Where just you and a handful of friends
              can spend time together. A place that makes it easy to talk every
              day and hang out more often.
            </p>
            <section className="flex space-x-5 mx-auto mt-14 z-10">
              <button className="bg-white text-black rounded-full px-8 py-4 flex items-center text-lg">
                <Image
                  src="/icons/download.svg"
                  width="24"
                  height="24"
                  alt="download icon"
                />
                Download for Windows
              </button>
              <button className="bg-[#36393f] rounded-full text-lg text-white px-8 py-4">
                Open Discord in your browser
              </button>
            </section>
          </section>
          <div className="absolute bottom-0 -left-1/4">
            <Image
              src="/img/landing-1.svg"
              width="689"
              height="352"
              alt="bg -1"
            />
          </div>
          <div className="absolute bottom-0 -right-1/4 object-contain">
            <Image
              src="/img/landing-2.svg"
              width="615"
              height="360"
              alt="bg -1"
            />
          </div>
        </main>
      </div>
      <section className="h-screen grid grid-cols-2 items-center">
        <div className="object-none">
          <Image
            src="/img/landing-left-1.svg"
            width="678"
            height="440"
            alt="channels"
          />
        </div>
        <article className="px-40">
          <h3 className="text-5xl font-sans font-extrabold">
            Create an invite-only place where you belong
          </h3>
          <p className="text-lg font-sans leading-8 mt-12">
            Discord servers are organized into topic-based channels where you
            can collaborate, share, and just talk about your day without
            clogging up a group chat.
          </p>
        </article>
      </section>
      <section className="h-screen grid grid-cols-2 items-center bg-gray-100">
        <article className="px-40">
          <h3 className="text-5xl font-sans font-extrabold">
            Where hanging out is easy
          </h3>
          <p className="text-lg font-sans leading-8 mt-12">
            {`Grab a seat in a voice channel when you're free. Friends in your
          server can see you're around and instantly pop in to talk without
          having to call.`}
          </p>
        </article>
        <div className="object-none">
          <Image
            src="/img/landing-right-2.svg"
            width="678"
            height="440"
            alt="vc and channels"
          />
        </div>
      </section>
      <section className="h-screen grid grid-cols-2 items-center">
        <div className="object-none">
          <Image
            src="/img/landing-left-3.svg"
            width="678"
            height="440"
            alt="profile"
          />
        </div>
        <article className="px-40">
          <h3 className="text-5xl font-sans font-extrabold">
            From few to a fandom
          </h3>
          <p className="text-lg font-sans leading-8 mt-12">
            Get any community running with moderation tools and custom member
            access. Give members special powers, set up private channels, and
            more.
          </p>
        </article>
      </section>
      <section className="bg-gray-100 flex flex-col justify-center px-10">
        <h3 className="text-5xl font-sans font-extrabold text-center mt-3">
          RELIABLE TECH FOR STAYING CLOSE
        </h3>
        <p className="text-lg font-sans leading-8 mt-12 text-center mx-24">
          Low-latency voice and video feels like you’re in the same room. Wave
          hello over video, watch friends stream their games, or gather up and
          have a drawing session with screen share.
        </p>
        <Image
          src="/img/landing-center-4.svg"
          width="874"
          height="530"
          alt="video calls"
        />
        <div>
          <div className="flex flex-col">
            <Image
              src="/img/download-sparkles.svg"
              width="531"
              height="49"
              alt="sparkles"
            />
            <h4 className="text-3xl font-sans font-extrabold text-center">
              Ready to start your journey?
            </h4>
          </div>
          <button className="bg-[#5865f2] px-5 py-3 rounded-full flex items-center text-white text-xl justify-center mx-auto mt-10 mb-5">
            <div className="mx-2 flex items-center">
              <Image
                src="/icons/download-white.svg"
                width="24"
                height="24"
                alt="download icon"
              />
            </div>
            Download for Windows
          </button>
        </div>
      </section>
      <footer className="bg-[#23272a]">
        <section className="grid grid-cols-6 py-10 px-20">
          <div className="col-span-2 flex flex-col space-y-4">
            <div>
              <h2 className="font-Ginto text-3xl text-[#5865f2]">IMAGINE A</h2>
              <h2 className="font-Ginto text-3xl text-[#5865f2]">PLACE</h2>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink flex flex-items mr-4">
                <Image src="/img/usa.png" width="24" height="16" alt="usa" />
              </div>
              <p className="text-gray-300 text-lg">English, USA</p>
            </div>
            <div id="socials" className="flex">
              <div className="pr-5">
                <Image
                  src="/icons/twitter.svg"
                  width="24"
                  height="24"
                  alt="twitter"
                />
              </div>
              <div className="pr-5">
                <Image
                  src="/icons/instagram.svg"
                  width="24"
                  height="24"
                  alt="instagram"
                />
              </div>
              <div className="pr-5">
                <Image
                  src="/icons/facebook.svg"
                  width="24"
                  height="24"
                  alt="facebook"
                />
              </div>
              <div className="pr-5">
                <Image
                  src="/icons/youtube.svg"
                  width="24"
                  height="24"
                  alt="youtube"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-[#5865f2] text-lg">Product</h6>
            <Link href="/">
              <a className="hover:underline text-gray-300">Download</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Nitro</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Status</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-[#5865f2] text-lg">Company</h6>
            <Link href="/">
              <a className="hover:underline text-gray-300">About</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Jobs</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Branding</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Newsroom</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-[#5865f2] text-lg">Resources</h6>
            <Link href="/">
              <a className="hover:underline text-gray-300">College</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Support</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Safety</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Blog</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Feedback</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Developers</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">StreamKit</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-3">
            <h6 className="text-[#5865f2] text-lg">Policies</h6>
            <Link href="/">
              <a className="hover:underline text-gray-300">Terms</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Privacy</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Cookie Settings</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Guidelines</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Acknowledgements</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Licenses</a>
            </Link>
            <Link href="/">
              <a className="hover:underline text-gray-300">Moderation</a>
            </Link>
          </div>
        </section>
        <section className="border-t-2 border-t-[#5865f2] flex justify-between py-8 mx-16">
          <div>
            <Image
              src="/icons/discord-gray.svg"
              width="124"
              height="34"
              alt="discord logo"
            />
          </div>
          <button className="text-white bg-[#5865f2] rounded-full px-3 py-2">
            Sign up
          </button>
        </section>
      </footer>
    </div>
  );
}
