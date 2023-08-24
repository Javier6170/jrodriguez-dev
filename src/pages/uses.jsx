import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'
import { Button } from '@/components/Button'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Education - Javier Rodriguez Marulanda</title>
        <meta
          name="description"
          content="Education"
        />
      </Head>
      <SimpleLayout
        title="Education"
        intro="This is my academic background"
      >
        <div className="space-y-20">
          <ToolsSection title="Professional">
            <Tool title="Software Engineering (eighth semester)">
              2020 - Present
              <br />
              University EAM
            </Tool>
          </ToolsSection>
          <ToolsSection title="Technological">
            <Tool title="Technology in software Development">
              2020 - 2023
              <br />
              University EAM
            </Tool>
          </ToolsSection>

          <ToolsSection title="Certifications">
            <Tool title="Diploma in Software Development">
              2021 - 2022
              <br />
              University of Caldas - MISION TIC
            </Tool>
            <Tool title="Certification in Data Analytics">
              2021 - 2022
              <br />
              CorrelationOne
              <Button href="#" variant="secondary" className="group mt-6 w-full">
              <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
                View Certificate
              </Button>
            </Tool>
          </ToolsSection>
          <ToolsSection title="Technical">
            <Tool title="Technical Bachelor in Systems and Information">
              2008 - 2019
              <br />
              Educational Institution C.A.S.D
            </Tool>

            

          </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
