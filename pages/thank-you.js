import Head from 'next/head';
import Link from 'next/link';

/**
 * ThankYou page displayed after a successful form submission.
 */
export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You – Homes by Omar</title>
      </Head>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-white">
        <h1 className="font-display text-4xl mb-4 text-center">Thank you!</h1>
        <p className="text-lg text-center mb-8">
          Your submission has been received. We will get back to you soon.
        </p>
        <Link href="/">
          <a className="text-primary underline">Return to Home</a>
        </Link>
      </div>
    </>
  );
}