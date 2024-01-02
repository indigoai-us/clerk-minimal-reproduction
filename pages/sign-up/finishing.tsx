import { useAuth, useOrganization, useUser } from '@clerk/nextjs'
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function SignUpFinishing() {
  const { user: clerkUser } = useUser();
  const { organization, membership } = useOrganization();
  const router = useRouter();
  const [errorText, setErrorText] = useState("");
  const [inFlight, setInFlight] = useState(false);
  const { getToken } = useAuth();

  useEffect(() => {
    console.log('clerk user: ', clerkUser);
    console.log('organization: ', organization);
    console.log('membership: ', membership);
    
  }, [clerkUser, organization, inFlight, getToken, membership, router]);  
  
  return (
    <div className="flex flex-col p-2 h-screen bg-zinc-900">
      {/* Logo header */}
      <div className="grow-0 h-auto">
        <h1 className="text-3xl font-bold text-white-700 flex items-center relative right-1">
          <Image src="/512x512.png" width="40" alt="Indigo" />
          <div className="text-5xl ml-3 relative bottom-1">Indigo</div>
        </h1>
      </div>

      Finishing...

      <div className="grow-0 h-[150px]"></div>
    </div>
  )
}
