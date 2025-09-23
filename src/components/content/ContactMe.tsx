'use client';
import React, { useEffect, useState } from 'react';
import AnimationContainer from '../utils/AnimationContainer';
import { siteConfig } from '@/src/configs/config';
import { Button, Input } from '@nextui-org/react';
import SectionHeader from '@/src/components/ui/SectionHeader';
import InputField from '../ui/InputField';
import { useEmailPost } from '@/src/hooks/useEmailPost';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [userInfo, setUserInfo] = useState<any>({});
  const { isSendingMail, sendEmail, isMailSent, setIsMailSent } = useEmailPost();

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

 // Nodemailder form submit handler
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const res = await sendEmail({
      userEmail: data.email as string,
      userSubject: data.message as string,
      userMobile: data.phone as string,
      userName: data.name as string
    });
    if (res) {
      form.reset();
      setName('');
      setEmail('');
    }
  }

  return (
    <AnimationContainer customClassName="w-full">
      <SectionHeader
        id="contactme"
        title="Contact Me"
        content="Fill out the form below to contact me. Please, no spam. I strive to respond to all legitimate inquiries, but please be clear and concise in your message. Whether you have a question about my work, a need of a personal mentor or just want to connect, feel free to reach out. I look forward to hearing from you!"
      />

      <div className=" flex justify-between items-center flex-col mx-auto ">
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

        <div className="w-auto  flex justify-center items-center  me-16">
          <form
            onSubmit={handleSubmit}
            className=" space-y-4"
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
                className='py-4 mt-1.5 pr-0'
                name="name"
                required
              />
            </div>

            <div className="grid  grid-cols-1 gap-20  sm:grid-cols-2">
              <div>
                <label htmlFor="" className='dark:text-white text-black'>Email</label>
                <InputField
                  type="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  label='Email'
                  name='email'
                  className='py-4 mt-1.5 pr-0'
                  required
                />
              </div>

              <div className=''>
                <label htmlFor="" className='dark:text-white text-black'>Mobile</label>

                <InputField
                  label="Phone"
                  placeholder="Enter your phone number"
                  type="number"
                  className='py-4 mt-1.5 pr-0'
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
                className='mt-1.5 pr-0'
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
              className="flex items-center justify-center rounded-xl px-5 py-3 text-white dark:text-black bg-black dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-200 shadow-sm transition ease mx-auto disabled:cursor-not-allowed"
              disabled={isSendingMail}
            >
              {isSendingMail ? (
                <>
                  <svg aria-hidden="true" className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="font-medium text-base">Sending...</span>
                </>
              ) : (
                <>
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
                </>
              )}

            </Button>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {isMailSent && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow-lg text-center">
            <h3 className="font-bold text-lg text-foreground dark:text-white mb-4">
              Thank you for reaching out!
              <span className="text-black dark:text-white"> 🎉</span>
            </h3>
            <p className="text-base text-foreground dark:text-gray-400">
              Your message has been sent to {siteConfig.social.email}{' '}
              successfully.
            </p>
            <Button
              className="mt-4 px-4 py-2 rounded-xl bg-black text-white dark:bg-white dark:text-black hover:bg-gray-800 dark:hover:bg-gray-200 transition ease"
              onPress={() => setIsMailSent(false)}
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
