import { Button, Text } from "components/ui";
import { NextPage } from "next";
import Link from "next/link";
import { FiArrowRight, FiExternalLink } from "react-icons/fi";
import classed from "tw-classed";
import {
  UpdateIcon,
  LayersIcon,
  LightningBoltIcon,
  CodeIcon,
} from "@radix-ui/react-icons";

const Home: NextPage = () => {
  return (
    <main className="container mx-auto px-5 mb-24">
      <section className="py-24">
        <h1 className="text-center text-5xl font-bold mb-4">
          Make your Tailwind components <br /> re-usable
        </h1>
        <p className="text-center text-2xl text-radix-slate10 mb-12 max-w-[65ch] mx-auto">
          Tailwind CSS and CSS-in-JS, the best of both worlds. Great DX and user
          experience right out of the gate.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <Link href="/docs/installation" passHref>
            <Button as="a" size="md" radius="pill">
              Documentation <FiArrowRight size="1.25rem" />
            </Button>
          </Link>
          <Button
            color="ghostSlate"
            as="a"
            radius="pill"
            size="md"
            target="_blank"
            href="https://github.com/sannajammeh/tw-styled"
          >
            Github <FiExternalLink />
          </Button>
        </div>
        <div className="prose prose-slate dark:prose-invert mx-auto">
          <pre className="rounded-xl">
            <code>npm install tw-classed</code>
          </pre>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 features mx-auto py-24">
        <FeatureCard>
          <FeatureTitle>
            <FeatureCardIcon>
              <UpdateIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            Reusable
          </FeatureTitle>
          <Text className="mt-3" color="secondary">
            Classed Tailwind lets you create reusable components in record time.
            No more `forwardRef` & Typescript interfaces
          </Text>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>
            <FeatureCardIcon>
              <LayersIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            Extendable
          </FeatureTitle>
          <Text className="mt-3" color="secondary">
            Write your components in a modular way. Wrap them in a classed
            method and extend them with more styles
          </Text>
        </FeatureCard>
        <FeatureCard>
          <FeatureTitle>
            <FeatureCardIcon>
              <CodeIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            Variants
          </FeatureTitle>
          <Text className="mt-3" color="secondary">
            Add custom variants to have complete control over your
            component&apos;s look.
          </Text>
        </FeatureCard>
        <FeatureCard className="col-auto lg:col-[2] xl:col-auto">
          <FeatureTitle>
            <FeatureCardIcon>
              <LightningBoltIcon className="w-[1em] h-[1em]" />
            </FeatureCardIcon>
            Tiny
          </FeatureTitle>
          <Text className="mt-3" color="secondary">
            Acheive excellent DX and performance with only{" "}
            <small className="text-radix-cyan11">~315b</small> of code!
          </Text>
        </FeatureCard>
      </section>
    </main>
  );
};

export default Home;

const FeatureCard = classed(
  "article",
  "bg-slate-100 bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-xl shadow-lg p-3"
);

const FeatureTitle = classed(
  "h3",
  "text-lg font-medium flex gap-2 items-center"
);

const FeatureCardIcon = classed(
  "span",
  "inline-flex items-center justify-center p-2 bg-radix-blue5 text-radix-blue10 rounded-full text-xl"
);
