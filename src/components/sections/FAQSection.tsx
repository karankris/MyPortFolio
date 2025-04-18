'use client';
import { Accordion, AccordionItem } from '@heroui/react';
import React, { useState } from 'react';
import AnimationContainer from '@/src/components/utils/AnimationContainer';
import SectionHeader from '@/src/components/ui/SectionHeader';

import { faqData } from '@/src/configs/faq';
import Script from 'next/script';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from "lucide-react";
export default function FAQSection() {
  // FAQ schema markup in JSON-LD format for SEO
  const faqPageSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqData.map((faq) => ({
      '@type': 'Question',
      name: faq.title,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.content.props.children[0] // Extract the main answer text
      }
    }))
  };
  const [openIndex, setOpenIndex] = useState<null | number>(null);


  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  console.log('====================================');
  console.log("openIndex === index", openIndex);
  console.log('====================================');
  return (
    <>
      <Script
        id="faq-schema" // Make sure the ID is unique for this script
        type="application/ld+json"
      >
        {JSON.stringify(faqPageSchema)}
      </Script>

      <AnimationContainer customClassName="w-full">
        {/* FAQ Section Header */}
        <SectionHeader
          title="Frequently Asked Questions"
          content="Here are some common questions I receive. If you have any more questions, feel free to reach out!"
        />

        <div id="accordion-collapse" data-accordion="collapse">
          {faqData.map((faq, index) => (
            <div key={index} className='me-10'>
              <h2 id={`accordion-collapse-heading-${index}`}>
                <button
                  type="button"
                  className="flex items-center justify-between w-full p-5 font-medium text-gray-500 border  border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={openIndex === index}
                  aria-controls={`accordion-collapse-body-${index}`}
                >
                  <span className='text-sm font-medium flex text-left overflow-clip text-ellipsis w-40 sm:w-full'>{faq.title}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
              </h2>
              <motion.div
                id={`accordion-collapse-body-${index}`}
                className={openIndex === index ? "p-5 w-full border border-gray-200 dark:border-gray-700 text-black dark:text-white " : "overflow-hidden"}
                aria-labelledby={`accordion-collapse-heading-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {faq.content}
              </motion.div>
            </div>
          ))}
        </div>
      </AnimationContainer>
    </>
  );
}
