'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { Button, Input, Textarea } from '@nextui-org/react';
import SectionHeader from '@/src/components/ui/SectionHeader';
import InputField from '../ui/InputField';

const ContactMe = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isWaiting, setIsWaiting] = useState(false);
  const [waitTime, setWaitTime] = useState(0); // In seconds
  const [userInfo, setUserInfo] = useState<any>({});

  useEffect(() => {
    if (siteConfig.contact.debug) {
      const fetchUserInfo = async () => {
        try {
          const res = await fetch('https://ipapi.co/json/');
          const data = await res.json();
          const browserInfo = {
            ip: data.ip,
            country: data.country_name,
            city: data.city,
            region: data.region,
            timezone: data.timezone,
            isp: data.org,
            browser: navigator.userAgent,
            platform: navigator.platform,
            screenResolution: `${window.screen.width}x${window.screen.height}`,
            os: navigator.platform,
            chromeVersion: navigator.userAgent.match(
              /Chrom(e|ium)\/([0-9]+)\./
            )?.[2],
            domain: window.location.href
          };
          setUserInfo(browserInfo);
        } catch (error) {
          console.error('Error fetching user info:', error);
        }
      };

      fetchUserInfo();
    }
  }, []);


  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    formData.append("access_key", "ed9aec66-e5a8-4c05-81d9-790a314efe98");

    const object = Object.fromEntries(formData);

    // Pick only the required fields
    const filteredData = {
      name: object.name,
      email: object.email,
      phone: object.phone,
      message: object.message,
      access_key: 'ed9aec66-e5a8-4c05-81d9-790a314efe98',
    };
    const json = JSON.stringify(filteredData);

    console.log("Filtered Form Data:", json);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    });
    // Check if user is trying to send an email before the ratelimit window is up
    const currentTime = Date.now();
    // Simulate form submission and success
    setTimeout(() => {
      setIsSubmitted(true);
      sessionStorage.setItem('lastSubmittedTime', currentTime.toString());
      sessionStorage.setItem('lastEmail', email);
    }, 500);
    const result = await response.json();
    if (result.success) {
      form.reset();

    }
  }

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Fill out the form below to contact me. Please, no spam. I strive to respond to all legitimate inquiries, but please be clear and concise in your message. Whether you have a question about my work, a need of a personal mentor or just want to connect, feel free to reach out. I look forward to hearing from you!"
      />

      <div className="w-full flex justify-between items-center flex-col mx-auto max-w-screen-xl">
        <div className="w-full flex justify-between items-center flex-col lg:flex-row gap-6 mb-10">
          <div className="w-full rounded-xl border border-gray-800 hover:border-gray-900 bg-white dark:bg-[#080809] p-4 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] sm:p-6 transition ease">
            <h3 className="font-bold text-1xl tracking-tight text-foreground dark:text-white text-start">
              Email
            </h3>
            <p className="text-base mt-2 text-foreground dark:text-white">
              {siteConfig.social.email}
            </p>
          </div>
        </div>

        <div className="w-auto sm:w-full flex justify-center items-center flex-col ">
          <form
            onSubmit={handleSubmit}
            className="w-full space-y-4"
            method="POST"
            encType="multipart/form-data"
          >
            <div>
              <label htmlFor="" className='dark:text-white text-black'>Name</label>
              <InputField
                label="Name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='py-4 mt-1.5'
                name="name"
                required
              />
            </div>

            <div className="grid grid-cols-1 gap-20  sm:grid-cols-2">
              <div>
                <label htmlFor="" className='dark:text-white text-black'>Email</label>
                <InputField
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  label='Email'
                  name='email'
                  className='py-4 mt-1.5'
                  required
                />
              </div>

              <div className=''>
                <label htmlFor="" className='dark:text-white text-black'>Mobile</label>

                <InputField
                  label="Phone"
                  placeholder="Enter your phone number"
                  type="number"
                  className='py-4 mt-1.5'
                  name='phone'
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="" className='dark:text-white text-black'>Message</label>
              <InputField
                label="Message"
                placeholder="Enter your message"
                rows={4}
                name='message'
                type='textarea'
                className='mt-1.5'
                required
              />
            </div>

            {siteConfig.contact.debug && (
              <div>
                <Input
                  type="hidden"
                  name="userInfo"
                  value={JSON.stringify(userInfo)}
                  required
                />
              </div>
            )}

            <Button
              type="submit"
              className="flex items-center justify-center rounded-xl px-5 py-3 text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm transition ease mx-auto"
            >
              <span className="font-medium text-base">Send</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-3 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Button>
          </form>

          {/* Show warning message if the user tries to submit before waiting */}
          {isWaiting && (
            <div className="mt-4 text-red-500">
              <p>
                You need to wait {waitTime} second{waitTime !== 1 && 's'} before
                sending another message.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Success Popup */}
      {isSubmitted && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-bold text-lg text-foreground dark:text-white mb-4">
              Thank you, {name}!{' '}
              <span className="text-black dark:text-white">🎉</span>
            </h3>
            <p className="text-base text-foreground dark:text-gray-400">
              Your message has been sent to {siteConfig.social.email}{' '}
              successfully.
            </p>
            <Button
              onPress={() => setIsSubmitted(false)}
              className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition ease"
            >
              Close
            </Button>
          </div>
        </div>
      )}
    </AnimationContainer>
  );
};

export default ContactMe;
