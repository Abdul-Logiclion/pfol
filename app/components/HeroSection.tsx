"use client"; // This is needed to use state and effects

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Chatbot from "./Chatbot";

export default function HeroSection() {
  const [copied, setCopied] = useState(false);

  const emailAddress = "abduljabarsc01@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset the "Copied" state after 2 seconds
  };

  return (
    <section id="hero" className="pt-3 pb-16 px-4 bg-gray-50 dark:bg-gray-900 font-sans">
      <div className="container mx-auto text-center">
        <Image
          src="/profile12.jpg"
          alt="Abdul Jabar"
          width={250}
          height={250}
          className="rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
        />
        <h1 className="text-2xl md:text-4xl  mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
          Abdul Jabbar Rahimoon
        </h1>
        <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-4 font-medium">
          Full-Stack Web Developer & Computer Science Graduate
        </p>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-5">
          Passionate about creating innovative web applications and solving complex problems with clean, efficient code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/Abdul_Jabar_ Resume-.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer"
            download
          >
            <Button
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 hover:scale-105 transition-all duration-200"
            >
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Button>
          </a>

          <div className="flex space-x-4">
            <Link href="https://github.com/Abdul-Logiclion" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200">
                <Github className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/abdul-jabbar-rahimoon" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200">
                <Linkedin className="w-4 h-4" />
              </Button>
            </Link>
            
            {/* Mail button with copy functionality */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleCopyEmail}
              className="hover:bg-gray-200 dark:hover:bg-gray-800 hover:scale-110 transition-all duration-200 relative group"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-500" />
              ) : (
                <Mail className="w-4 h-4" />
              )}
              {/* Copy tooltip section */}
              {!copied && (
                <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-gray-800 rounded-md">
                  Click to Copy
                </span>
              )}
              {copied && (
                <span className="absolute bottom-full mb-2 hidden group-hover:block px-2 py-1 text-xs text-white bg-green-500 rounded-md">
                  Copied!
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}