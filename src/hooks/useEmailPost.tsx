import { useState } from "react";
import { siteConfig } from "../configs/config";
import { toast } from "react-toastify";


interface FormData {
  userEmail: string;
  userSubject: string;
  userMobile: string;
  userName: string;
}

export function useEmailPost() {
  const [isSendingMail, setIsSendingMail] = useState(false);
  const [isMailSent, setIsMailSent] = useState(false);

  async function sendEmail(data: FormData) {
    const apiEndpoint = '/api/email';
    setIsSendingMail(true); // Start loading
    try {
      const res = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await res.json();    
      if (res.ok) {
        toast.success(`Mail sent to ${siteConfig.author}`)
        setIsMailSent(true);
      } else {
        toast.error('Failed to send mail please try again !!')
        setIsMailSent(false);
      }

      return responseData;
    } catch (error) {
      toast.error('An error occurred try again !!')
      setIsMailSent(false);
    }
    finally {
      setIsSendingMail(false); // Stop loading wheather it is failed or passed
    }
  }

  return { isSendingMail, sendEmail, isMailSent, setIsMailSent };
}
