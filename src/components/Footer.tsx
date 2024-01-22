import Link from "next/link";
import { ImFacebook, ImInstagram, ImTwitter, ImYoutube } from "react-icons/im";

export const Footer = () => {
  return (
    <footer className="">
      <div className="container px-4 py-16 md:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="grid gap-8 auto-rows-max">
            <h3 className="text-xl font-bold lg:text-2xl font-primary decorator">Get In Touch</h3>
            <ul className="grid gap-2">
              <li className="">
                <Link href="#">contact@yourwebsite.com</Link>
              </li>
              <li className="text-neutral-500">(355)-202-234-0457</li>
            </ul>
          </div>

          <div className="grid gap-8 auto-rows-max">
            <h3 className="text-xl font-bold lg:text-2xl font-primary decorator">where&apos;s my office?</h3>
            <ul className="grid gap-2">
              <li className="text-neutral-500">2489 Locust Court, Los Angeles</li>
              <li className="text-neutral-500">3927 Red Maple Drive, Los Angeles</li>
            </ul>
          </div>

          <div className="grid gap-8 auto-rows-max">
            <h3 className="text-xl font-bold lg:text-2xl font-primary decorator">My social links</h3>
            <ul className="flex gap-4">
              <li className="">
                <Link href="#">
                  <ImFacebook />
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <ImTwitter />
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <ImInstagram />
                </Link>
              </li>
              <li className="">
                <Link href="#">
                  <ImYoutube />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />
      <div className="container px-4 py-16 md:px-8">
        <p className="">© 2023 Alena Miller.</p>
      </div>
    </footer>
  );
};
