import Image from 'next/image';
import { SignIn } from '@clerk/nextjs';

export default function Login() {

  return (
    <main className="flex flex-col h-screen justify-center items-center">
      <SignIn
        path="/login" 
        routing="path"
        afterSignInUrl="/"
        signUpUrl="/sign-up" 
        afterSignUpUrl="/sign-up/create-organization" 
        />
    </main>
  );
}
