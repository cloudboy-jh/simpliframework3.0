import { Code2, Zap, Shield, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import simplicon from './assets/simplicon.png';
import { CodeBlock } from '@/components/CodeBlock';

export default function Home() {
  return (
    <main className="min-h-screen gradient-bg">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center text-center text-white">
          <div className="mb-8">
            <Image
              src={simplicon}
              alt="Simpli Framework Logo"
              width={120}
              height={120}
              priority
              className="drop-shadow-lg"
            />
          </div>
          
          <h1 className="text-6xl font-bold mb-6">
            Simpli Framework
          </h1>
          
          <p className="text-xl mb-12 max-w-2xl">
            A modern, extensible framework for building beautiful applications with ease.
            Powered by Next.js, TypeScript, and Tailwind CSS.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <FeatureCard
              icon={<Code2 className="h-8 w-8" />}
              title="Type-Safe"
              description="Built with TypeScript for robust development"
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Fast"
              description="Optimized for performance and quick development"
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8" />}
              title="Secure"
              description="Built-in authentication and security features"
            />
            <FeatureCard
              icon={<Palette className="h-8 w-8" />}
              title="Beautiful"
              description="Pre-built components and themes"
            />
          </div>

          <div className="w-full max-w-2xl mb-12">
            <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
            <CodeBlock code="npx create-simpli-app my-app" />
          </div>

          <div className="flex gap-4">
            <Button size="lg" variant="secondary">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10">
              Documentation
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

function FeatureCard({ icon, title, description }: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 rounded-xl bg-white/10 backdrop-blur-lg">
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-white/80">{description}</p>
    </div>
  );
}
