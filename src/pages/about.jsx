import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  TwitterIcon,
  InstagramIcon,
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/photo_my.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target='_blank'
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Javier Rodriguez Marulanda</title>
        <meta
          name="description"
          content="I’m Spencer Sharp. I live in New York City, where I design the future."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              I’m Javier Rodriguez Marulanda. I live in Colombia, where I develop the
              future.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                hello! I am Javier Rodriguez Marulanda, I am a Software Engineering student (Propaedeutic Cycles).
                <br />
                <br />
                ⚡ I’m a software developer and digital experience creator with skills in Java, Python, kotlin, JavaScript, Angular, SpringBoot, and SQL. I have collaborated in team software projects, providing solutions and knowledge that have been valued by my colleagues and supervisors.
              </p>
              <p>
                ⚡ I am passionate about the world of technology and software development, and I am always constantly learning to keep up to date with the latest trends and tools. I enjoy the creativity and challenge of software development, and am motivated to see how my solutions can positively impact the world.
              </p>
              <p>
                ✨Competent in requirements analysis, software design, UML modeling, design patterns, and architectural techniques to create efficient and scalable software solutions.
                <br />
                In addition, I have knowledge in:
              </p>
              <p>
                💻 Programming Languages - Java, Python, PHP, CSS, Javascript, HTML5, Kotlin
                <br />
                🔐 Databases - MySQL, SQL Developer oracle, MariaDB, Postgres
                <br />
                ⏰ Agile Work Frameworks and Methodologies - SCRUM
                <br />
                💡 Frameworks - Springboot, Bootstrap, Laravel, Simfony, Astro, Angular, React, Tailwind
                <br />
                📚 Libraries - JQuery, Thymeleaf
                <br />
                ⚖️ Adobe Tools and Prototyping - XD, Illustrator
                <br />
                💭 Others - Advanced Office Automation
                <br />
                💎 Knowledge in Consumption of APIs
                <br />
                🗺 Languages - Spanish (Native), Intermediate English
                <br />
                <br />
                Currently studying Software Engineering at the I.U. EAM 🎓🧠
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="https://www.instagram.com/javi_417/" icon={InstagramIcon} className="mt-4">
                Follow on Instagram
              </SocialLink>
              <SocialLink href="https://github.com/Javier6170" icon={GitHubIcon} className="mt-4">
                Follow on GitHub
              </SocialLink>
              <SocialLink href="https://www.linkedin.com/in/javier-rodriguez-marulanda-8b2725230/" icon={LinkedInIcon} className="mt-4">
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:spencer@planetaria.tech"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                contact@jrodriguez-dev.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
